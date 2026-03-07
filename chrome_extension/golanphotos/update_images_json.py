#!/usr/bin/env python3
"""
Scans a folder for images and produces an updated all_images2.json.
- Existing filenames keep their original title.
- New filenames get an empty title.
"""

import json
import os
import re
import argparse

IMAGE_EXTENSIONS = {".jpg", ".jpeg", ".png", ".gif", ".webp", ".bmp", ".tiff", ".tif", ".svg"}


def load_existing_titles(json_path: str) -> dict[str, str]:
    """Return a dict of {filename: title} from the existing JSON file."""
    if not os.path.exists(json_path):
        return {}
    with open(json_path, "r", encoding="utf-8") as f:
        data = json.load(f)
    return {entry["f"]: entry["t"] for entry in data.get("photos", [])}


def natural_key(s: str):
    """Sort key that orders image10 after image9, not after image1."""
    return [int(c) if c.isdigit() else c.lower() for c in re.split(r"(\d+)", s)]


def scan_images(folder: str) -> list[str]:
    """Return a natural-sorted list of image filenames found in *folder*."""
    filenames = []
    for entry in os.scandir(folder):
        if entry.is_file() and os.path.splitext(entry.name)[1].lower() in IMAGE_EXTENSIONS:
            filenames.append(entry.name)
    return sorted(filenames, key=natural_key)


def build_photos(filenames: list[str], existing_titles: dict[str, str]) -> list[dict]:
    """Build the photos list, preserving titles for known files."""
    return [
        {"f": fname, "t": existing_titles.get(fname, "")}
        for fname in filenames
    ]


def main():
    parser = argparse.ArgumentParser(
        description="Scan a folder for images and write an updated JSON catalog."
    )
    parser.add_argument(
        "folder",
        nargs="?",
        default=".",
        help="Folder containing the images (default: current directory)",
    )
    parser.add_argument(
        "--input-json",
        default="all_images.json",
        help="Existing JSON file to read titles from (default: all_images.json)",
    )
    parser.add_argument(
        "--output-json",
        default="all_images2.json",
        help="Output JSON file (default: all_images2.json)",
    )
    args = parser.parse_args()

    folder = os.path.abspath(args.folder)
    input_json = os.path.join(folder, args.input_json)
    output_json = os.path.join(folder, args.output_json)

    print(f"Scanning folder : {folder}")
    print(f"Reading titles  : {input_json}")
    print(f"Writing output  : {output_json}")

    existing_titles = load_existing_titles(input_json)
    filenames = scan_images(folder)

    if not filenames:
        print("No image files found.")
        return

    new_count = sum(1 for f in filenames if f not in existing_titles)
    photos = build_photos(filenames, existing_titles)

    lines = [json.dumps(entry, ensure_ascii=False, separators=(",", ":")) for entry in photos]
    with open(output_json, "w", encoding="utf-8") as f:
        f.write('{"photos":[\n')
        f.write(",\n".join(lines))
        f.write("\n]}\n")

    print(f"Done. {len(photos)} images total, {new_count} new (empty title).")


if __name__ == "__main__":
    main()
