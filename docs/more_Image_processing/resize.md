# Resize an Image (New)

Well do i really have to explain this? Nah.

```bash
gowall resize ~/Pictures/icon.png -d 32x32
gowall resize ~/Pictures/icon.png -d 32x32 --output ~/NewFolder/newName.png

gowall resize --dir ~/Pictures/Icons -d 32x32 --output ~/NewFolder/
gowall resize --batch icon1.png,icon2.png -d 32x32 --output ~/NewFolder/
```

## Usage & Options

➤ **Dimensions**

Dimensions are in the format WIDTHxHEIGHT (e.g., 1920x1080).

```bash
gowall resize ~/Pictures/img.png -d 1920x1080
```

➤ **Method**

The `-m` flag is used to specify the method for resizing. The available methods are:

- `lanczos` Lanczos interpolation. (default)
- `catmullrom` Catmull-Rom interpolation.

```bash
gowall resize ~/Pictures/img.png -m bilinear
```