# Gemini Provider

## Prerequisites

- You must have configured an API key for the `gemini` provider. See the [API Keys](./api_keys.md) section for more information.

## Most Basic Schema

```yaml title="~/.config/gowall/schema.yml"
schemas:
  - name: "gem"
    config:
      ocr:
        provider: "gemini"
        model: "gemini-2.5-flash"
```

```bash
gowall ocr img.png -s gem
```
Please refer to the [schemas](../schema.md) section for more information on how to use schemas with rate limiting,pre/post processing options,text correction etc...


