# Intergration with Screenshoting utilties

Gowall let's you intergrate with your favourite screenshotting utilities like `flameshot` ,`grim`, `spectacle` etc...

Your screenshot utility just has to pass the image data to gowall via `stdin`, gowall will consume it, perform ocr and it will output the text content to `stdout`.

- You can easily create commands 


```bash

#works in terminal and kde shortcuts
╰─ flameshot gui -p /tmp/screenshot.png && \
~/Projects/gowall/gowall ocr /tmp/screenshot.png - -s gem | wl-copy && \
rm /tmp/screenshot.png && \
notify-send "OCR Result" "Screenshot processed and copied to clipboard"

# the ocr command doesn't take from stdin for some reason.
flameshot gui --raw | ~/Projects/gowall/gowall ocr - - -s gem | wl-copy && \
notify-send "OCR Result" "Screenshot processed and copied to clipboard"



```