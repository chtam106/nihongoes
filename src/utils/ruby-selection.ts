/** Plain text for the current selection, with `<rt>` annotations stripped. */
export function selectionTextWithoutRuby(): string {
  const selection = window.getSelection();

  if (!selection || selection.rangeCount === 0) {
    return '';
  }

  const fragment = selection.getRangeAt(0).cloneContents();
  fragment.querySelectorAll('rt').forEach((rt) => rt.remove());

  const div = document.createElement('div');
  div.appendChild(fragment);

  return div.textContent ?? '';
}

export function selectionIncludesRuby(): boolean {
  const selection = window.getSelection();

  if (!selection || selection.rangeCount === 0) {
    return false;
  }

  return Boolean(selection.getRangeAt(0).cloneContents().querySelector('rt'));
}

/** Keep copy/paste to surface kanji/kana only - omit furigana readings. */
export function installRubyAwareCopyHandler() {
  const onCopy = (event: ClipboardEvent) => {
    if (!event.clipboardData || !selectionIncludesRuby()) {
      return;
    }

    event.clipboardData.setData('text/plain', selectionTextWithoutRuby());
    event.preventDefault();
  };

  document.addEventListener('copy', onCopy);

  return () => {
    document.removeEventListener('copy', onCopy);
  };
}
