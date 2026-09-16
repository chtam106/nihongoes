"""Render pages of a local textbook PDF to PNG so Japanese text can be read visually.

The scanned books embed legacy fonts, so text extraction returns mojibake for
Japanese; rendering to images is the only reliable way to read them.

Usage:
  python scripts/pdf-pages-to-png.py <pdf> <out-dir> 59-64 [--dpi 220]
"""

import argparse
import sys
from pathlib import Path

import pymupdf


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("pdf")
    parser.add_argument("out_dir")
    parser.add_argument("pages", help="1-based inclusive range, e.g. 59-64")
    parser.add_argument("--dpi", type=int, default=220)
    args = parser.parse_args()

    start, _, end = args.pages.partition("-")
    first = int(start)
    last = int(end or start)

    out_dir = Path(args.out_dir)
    out_dir.mkdir(parents=True, exist_ok=True)

    with pymupdf.open(args.pdf) as doc:
        for number in range(first, min(last, doc.page_count) + 1):
            pixmap = doc[number - 1].get_pixmap(dpi=args.dpi)
            target = out_dir / f"page-{number:03d}.png"
            pixmap.save(target)
            print(f"{target} ({pixmap.width}x{pixmap.height})")

    return 0


if __name__ == "__main__":
    sys.exit(main())
