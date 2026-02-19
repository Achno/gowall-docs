---
sidebar_position: 4
---

# Blend colors

Blending is moving color A toward color B by some percentage, essentially interpolation.
Its the same as the other color utilities in this section, its supposed to be used by you to help generate your [custom theme](../themes.md#create-your-own-theme).

![blend](./img/blend_colors.png)

```bash
gowall color blend "#FFC771" "#ff34ff"  -n 4

gowall color blend "rgb(255,199,113)" "rgb(255,52,255)"
```

## Usage & Options

➤ **Number**

The `-n` (or `--number`) flag controls how many colors to generate between the two input colors.

- **Default**: `3` (generates 3 intermediate colors)

```bash
# Generate 10 colors for a smoother gradient of colors
gowall color blend "#FF5733" "#33FF57" -n 10
```

You can pass colors in any format that `gowall` understands (for example `hex`, `rgb`, `hsl`, `lab`) as shown in [here](./convert.md).

