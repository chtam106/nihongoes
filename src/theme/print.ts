/** Hide the node in print output. Pair with the `.no-print` class in `src/index.css`. */
export const hideOnPrintSx = {
  '@media print': {
    display: 'none !important'
  }
} as const;
