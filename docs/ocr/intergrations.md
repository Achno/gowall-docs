# Intergration with Screenshoting utilties

Gowall let's you intergrate with your favourite screenshotting utilities like `flameshot` ,`grim`, `spectacle` etc...

Letting you use any screenshot utility **has huge advantages**, since you can annotate on the image to alter it (eg. hide some stuff with black lines so the OCR doesn't pick it up etc...)

:::info

The whole point is to pass gowall the image. You can pass it via `stdin` check out [Unix Pipe (Stdin,Stdout)](../unix_pipe.md) to understand how to do that, If your screenshot utility doesn't output the raw image (eg. flameshot can with `--raw` flag) then simply create a temporary file have gowall read it and delete it afterwards, like i do with the example below
:::

1. Have flameshot pass the image to gowall
2. Have gowall perform ocr and output to `stdout`
3. Here i make it copy the result to `clipboard` and then `send a notification when its done`. You can make it do whatever you want.

```bash
flameshot gui -p /tmp/screenshot.png && \
gowall ocr /tmp/screenshot.png - -s gem | wl-copy && \
rm /tmp/screenshot.png && \
notify-send "OCR Result" "Screenshot processed and copied to clipboard"
```

![](./img/intergration.png)