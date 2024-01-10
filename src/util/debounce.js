let timeoutRef;
export function debounce(callback) {
  clearTimeout(timeoutRef);
  timeoutRef = setTimeout(() => callback(), 200);
}
