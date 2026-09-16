/** Vertical gap between stacked segment-button rows. */
export const SEGMENT_BUTTON_STACK_SPACING = 1;

/** Grid gap for exercise control bars that mix segment buttons and selects. */
export const SEGMENT_BUTTON_CONTROLS_GAP = 1;

/**
 * Shrink outlined selects to the same height as the segmented toggle buttons
 * (~42px) so the exercise controls line up. Also re-centers the resting
 * (non-floated) label for the reduced height - otherwise an empty/disabled
 * select shows its label too low. Apply on the wrapping FormControl.
 */
export const buttonSizedSelectSx = {
  '& .MuiSelect-select': {
    paddingTop: '11px',
    paddingBottom: '11px'
  },
  '& .MuiInputLabel-outlined:not(.MuiInputLabel-shrink)': {
    transform: 'translate(14px, 11px)'
  }
};
