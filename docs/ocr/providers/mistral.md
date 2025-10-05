# Mistral Provider

- You must have configured an API key for the `mistral` provider. See the [API Keys](./api_keys.md) section for more information.

## Most Basic Schema

```yaml title="~/.config/gowall/schema.yml"
schemas:
  - name: "mist"
    config:
      ocr:
        provider: "mistral"
        model: "mistral-ocr-latest"
```

```bash
gowall ocr img.png -s mist
```
Please refer to the [schemas](../schema.md) section for more information on how to use schemas with rate limiting,pre/post processing options,text correction etc...

