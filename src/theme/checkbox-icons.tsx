import SvgIcon, { type SvgIconProps } from '@mui/material/SvgIcon';
import { FOCUS_OUTLINE_WIDTH_PX } from './focus.ts';

const BOX = { x: 5, y: 5, width: 14, height: 14, rx: 2 } as const;

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: FOCUS_OUTLINE_WIDTH_PX,
  vectorEffect: 'non-scaling-stroke'
} as const;

type CheckboxUncheckedIconProps = SvgIconProps;

export function CheckboxUncheckedIcon(props: CheckboxUncheckedIconProps) {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <rect {...BOX} {...stroke} />
    </SvgIcon>
  );
}

type CheckboxCheckedIconProps = SvgIconProps;

export function CheckboxCheckedIcon(props: CheckboxCheckedIconProps) {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <rect {...BOX} {...stroke} />
      <path
        d="M8 12.5 10.5 15 16 9"
        fill="none"
        stroke="currentColor"
        strokeWidth={FOCUS_OUTLINE_WIDTH_PX}
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </SvgIcon>
  );
}

type CheckboxIndeterminateIconProps = SvgIconProps;

export function CheckboxIndeterminateIcon(props: CheckboxIndeterminateIconProps) {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <rect {...BOX} {...stroke} />
      <path
        d="M8 12h8"
        fill="none"
        stroke="currentColor"
        strokeWidth={FOCUS_OUTLINE_WIDTH_PX}
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </SvgIcon>
  );
}
