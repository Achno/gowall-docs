# OpenAI Provider

## Prerequisites

- You must have configured an API key for the `openai` provider. See the [API Keys](./api_keys.md) section for more information.

## Most Basic Schema

```yaml title="~/.config/gowall/schema.yml"
schemas:
  - name: "op"
    config:
      ocr:
        provider: "openai"
        model: "gpt-5"
```

```bash
gowall ocr img.png -s op
```
Please refer to the [schemas](../schema.md) section for more information on how to use schemas with rate limiting,pre/post processing options,text correction etc...



## Specific Options

The provider specific options only for the `openai` provider are listed below with a `# <--` comment.

```yaml title="~/.config/gowall/schema.yml"
schemas:
  - name: "op"
    config:
      ocr:
        provider: "openai"
        model: "gpt-5"
      openai_options:
        temperature: 0.5 # <--
        max_tokens: 4096 # <--
```