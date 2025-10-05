# VLLM Provider


## Prerequisites

You must first install `Vllm` download a model like `Qwen/Qwen2.5-VL-7B-Instruct`, and run the server.
[Here](https://docs.vllm.ai/projects/recipes/en/latest/Qwen/Qwen2.5-VL.html) is some quick reference to get started with Qwens 2.5 VL models.

## Most Basic Schema

```yaml title="~/.config/gowall/schema.yml"
schemas:
  - name: "vllm"
    config:
      ocr:
        provider: "vllm"
        model: "Qwen/Qwen2.5-VL-7B-Instruct"
```

```bash
gowall ocr img.png -s vllm
```
Please refer to the [schemas](../schema.md) section for more information on how to use schemas with rate limiting,pre/post processing options,text correction etc...

