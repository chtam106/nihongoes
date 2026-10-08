/** True when a drag highlighted text, so the following click should not count as an answer. */
export function hasTextSelection(): boolean {
  return Boolean(window.getSelection()?.toString());
}
