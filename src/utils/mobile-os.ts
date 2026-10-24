/** True for phone/tablet OS (iOS, iPadOS, Android). False for desktop OS (Windows, macOS, Linux, ...). */
export function isMobileOs(
  userAgent = typeof navigator !== 'undefined' ? navigator.userAgent : ''
) {
  if (/Android/i.test(userAgent)) {
    return true;
  }

  if (/iPhone|iPod/i.test(userAgent)) {
    return true;
  }

  // iPadOS 13+ may report MacIntel; treat as mobile OS.
  if (/iPad/i.test(userAgent)) {
    return true;
  }

  if (
    typeof navigator !== 'undefined' &&
    navigator.platform === 'MacIntel' &&
    navigator.maxTouchPoints > 1
  ) {
    return true;
  }

  return false;
}
