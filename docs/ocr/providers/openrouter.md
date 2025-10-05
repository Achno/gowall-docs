# OpenRouter Provider

## Prerequisites


- You must have configured an API key for the `openrouter` provider. See the [API Keys](./api_keys.md) section for more information.

## Most Basic Schema

```yaml title="~/.config/gowall/schema.yml"
schemas:
  - name: "op"
    config:
      ocr:
        provider: "openrouter"
        model: "qwen/qwen2.5-vl-72b-instruct:free"
```

```bash
gowall ocr img.png -s op
```
Please refer to the [schemas](../schema.md) section for more information on how to use schemas with rate limiting,pre/post processing options,text correction etc...

