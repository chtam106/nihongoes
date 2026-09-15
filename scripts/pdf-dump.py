"""Dump every page of a local textbook PDF to a UTF-8 text file for reference lookups."""

import sys
from pathlib import Path

from pypdf import PdfReader


def main() -> int:
    source = Path(sys.argv[1])
    target = Path(sys.argv[2])
    reader = PdfReader(source)

    with target.open("w", encoding="utf-8") as out:
        for index, page in enumerate(reader.pages, start=1):
            out.write(f"\n===== page {index} =====\n")
            out.write(page.extract_text() or "")

    print(f"wrote {target} from {len(reader.pages)} pages")
    return 0


if __name__ == "__main__":
    sys.exit(main())
