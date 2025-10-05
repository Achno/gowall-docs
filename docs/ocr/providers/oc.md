# OC (OpenAI Compatible) Provider

## Prerequisites

- You must have configured an API key for the `openai compatible` provider. See the [API Keys](./api_keys.md) section for more information.

```env
OPENAI_API_COMPATIBLE_SERVICE_API_KEY=your_api_key
```

- You must set the base url for the openai compatible endpoint. 

```env
OPENAI_BASE_URL=https://api.oepnaicompatible.com/v1
```
(Make sure it supports the openai vision capabilities eg. `image_url` and not just simple text completion like deepseek does). For example openrouter is a truly openai compatible, but there is already a section for that.

## Most Basic Schema

```yaml title="~/.config/gowall/schema.yml"
schemas:
  - name: "oc"
    config:
      ocr:
        provider: "oc"
        model: "your_model_name"
```

```bash
gowall ocr img.png -s oc
```
Please refer to the [schemas](../schema.md) section for more information on how to use schemas with rate limiting,pre/post processing options,text correction etc...


