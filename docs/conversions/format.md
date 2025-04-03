# Change Image Format

### ➤ `Single conversion`

     Change the format of an image, the available formats are `png` `jpeg` `jpg` `webp`  
     You can also rename and convert a single image without the `-f` flag (second example)

    ```bash
gowall convert ~/Pictures/img.webp -f png
gowall convert ~/Pictures/img.webp --output ~/Pictures/gowall/renamed.png
    ```
The above converts a `.webp` over to `.png` 

### ➤ `Batch conversion`

```bash
gowall convert --batch img1.png,img2.png -f webp --output ~/NewFolder
gowall convert --batch img1.png,img2.png -f webp 
```

### ➤ `Directory conversion`

Converts all the images under `~/Pictures/Dir` into `.webp` and saves them to `~/NewFolder`
```bash
gowall convert --dir ~/Pictures/Dir -f webp --output ~/NewFolder
gowall convert --dir ~/Pictures/Dir -f webp # saves to the default dir
```