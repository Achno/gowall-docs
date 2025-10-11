# config.yml Options

   ```yaml title="~/.config/gowall/config.yml"
   EnableImagePreviewing: true # default. Enables Image preview in your Terminal emulator (Kitty,Ghostty,Konosole,Wezterm)

   InlineImagePreview: true # default is false. prints images in the terminal without 3rd party dependencies

   ImagePreviewBackend: "chafa" # prints images in the terminal with chafa, if set

   OutputFolder: "MyImages" # default is "Pictures/gowall". Sets the gowall directory to `~/MyImages`. The folder will be created if it does not exist
   
   ColorCorrectionBackend : nn # Returns to the worse old color correction backend. See more info in the conversion section

   EnvFilePath: "env/gowall/.env" # default is .gowall/.env , do not add /home/user. (its infered)

   themes:
  - name: "CustomThemeName"
    colors:
      - "#F5E0DC"
      - "#F2CDCD"
      - "#F5C2E7"
      - "#A6ADC8"
      - "#9399B2"
      - "#7F849C"
      - "#6C7086"
      - "#585B70"
      - "#45475A"
      - "#313244"
      - "#1E1E2E"
      - "#181825"
      - "#11111B"
  - name: "CustomThemeName2"
    colors:
      - "#9399b2"
      - "#7f849c"
      - "#6c7086"
      - "#585b70"

   ```

