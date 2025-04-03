# Use gowall in Scripts

### Preview all of the 25 built in Themes
----

Lets say you want to see how the all of the colorschemes of the 25 built in themes look like on an image.
We can easily do that with a small bash script.

```bash

#!/bin/bash

themes=$(gowall list)

input_path="/home/<name>/Pictures/NOBORDER.png"

while IFS= read -r theme; do
  gowall convert "$input_path" -t "$theme" --output "/home/<name>/Pictures/gowall/Themetest/$theme"
done <<< "$themes"
```

The output of the above script will be the following, with the names of the images being the themes that your image got recolored to: 

```
1. catppuccin.png
2. nord.png
3. rose-pine.png 
4. everforest.png
....

```

<br />


### Load a Theme dynamically in the runtime via .json file
----

Lets say you have a way to generate a `.json` with hex colors (probably via another script) and dont want to define them in `~/.config/gowall/config.yml`. Now you can pass `.json` with a certain interface into gowall.

```bash
gowall convert ~/Pictures/img.png -t test.json

gowall convert ~/Pictures/img.png -t ~/clr/test.json # relative path
```

The test.json **must** have the following interface : 

```json
{
    "name": "MyTheme",
    "colors": [
        "#F5E0DC",
        "#F2CDCD",
        "#F5C2E7",
        "#11111B"
    ]
}
```

