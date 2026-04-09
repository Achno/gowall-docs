---
sidebar_position: 11
---

# Global Flags

  These are the shared flags used across most image-processing commands in
  `gowall`.

### ➤ **--batch**

  Process multiple individual files in one command, the little brother of `--dir`.

  ```bash
  gowall convert --batch file1.png,file2.png -t catppuccin
  ```
  - Dont leave any spaces between the file paths.
  - Cannot be used together with `--dir` duh...

  ---

  ### ➤ **--dir**

  Process every supported file inside a directory. Ex convert the theme of a bunch of 
  wallpapers in a directory. Or ocr a bunch of images in a directory. A more powerful `--batch`.

  ```bash
  gowall compress --dir ~/Pictures/walls
  ```

  - Cannot be used together with `--batch` duh...

  ---

  ### ➤ **--output**

  Override the output destination. It creates folders even if they dont exist automatically.  

  It's also used to rename a file along with change its format.


  ```bash
  gowall bg input.png --output ~/NewFolder
  gowall convert input.png -t nord --output ~/NewFolder/out.webp
  ```

  ---

  ### ➤ **--preview**

  Enable or disable previewing of the generated image, you might also notice its similar to the `EnableImagePreviewing` option in the `config.yml` file. 
  
  The reason this flag exists
  is to help with scripts and other automation when you have `EnableImagePreviewing: true`

  ```bash
  gowall convert input.png -t mocha --preview false
  ```

  - This overrides `EnableImagePreviewing` in the `config.yml` file.

  ---

  ### ➤ **--yes**

Allows you to auto accept any `y/n` confirmation prompts, very useful for automation since the first time you download gowall and it wants to download lets say a model it requires confirmation, but with this you can skip it.

Incredibly useful on first install where gowall asks you these but you need it to interact with other programs or scripts.

```bash
gowall bg ~/Pictures/hollow-knight.jpg                         
Removing background...

 ◈ ONNX Runtime is not installed. Would you like to set it up? (y/n): y
    ➜ Downloading ONNX Runtime, size: 7.8 MB, sit back and relax
    ➜ Process complete. ONNX Runtime setup
 ◈ Model "u2net" is missing. Download it? (y/n): 


# with --yes you can automatically accept the `y/n` prompts, big plus for automation.
```


  ```bash
  gowall bg hollow-knight.jpg  --yes
  gowall upscale skyrim.png --yes
  gowall compress skyrim.png --yes
  ```

  ---
