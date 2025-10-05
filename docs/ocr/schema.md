---
sidebar_position: 2
---


# Schemas

Schemas are a way to store configs of a provider (even save them in your dotfiles) so you don't have to repeat yourself with a lot of cli flags.

You can create a schema file in `~/.config/gowall/schema.yml` and add your settings there.

The following schema replaces the following command : 

```bash
gowall ocr img.png -p openrouter -m qwen/qwen2.5-vl-72b-instruct:free
```

```yaml title="~/.config/gowall/schema.yml"
schemas:

  - name: "op-qwen"  # <-- the most simplistic schema just for an introduction to the concept
    config:
      ocr:
        provider: "openrouter"
        model: "qwen/qwen2.5-vl-72b-instruct:free"
```

:::tip
CLI flags will always override schema.yml options.
:::

## Rate Limitting 

:::tip 
It is recommended to change the rate limits, to increase performance/reduce time taken for OCR depending on the tier of the provider you are using (free,paid, etc...). 

Same goes for selfhosting increase the rate limits if your hardware can handle it.
:::

You can specify 2 fields `rps` (requests per second) and `burst` (burst requests) to adjust the rate limiting.

Following the token **bucket rate limiting algorithm**, explained simply with an example  `rps=2` `burst=4` , just imagine you have a bucket of tokens. The burst request number is the number of tokens the bucket has first, 1 token = 1 request. At first you send 4 requests since you start with 4 tokens and after that you generate tokens with a rate of 2 tokens per second and can only make 2 requests per second obviously.

Notice the burst at first? and the stable rps after that? Thats what the following flags control.

➤ `-r` is the requests per second flag.  
➤ `-b` is the burst requests flag.


```yaml title="~/.config/gowall/schema.yml"
  - name: "op-qwen"
    config:
      ocr:
        provider: "openrouter"
        model: "x-ai/grok-4-fast:free"
      rate_limit:
        rps: 2
        burst: 4
```

## Provider Configs

You can control the following settings for all providers: 

➤ `prompt` : Used to replace the default prompt gowall provides.  
➤ `append_prompt` : Used to append to the default prompt gowall provides.  
➤ `language` : Used to specify the language of the OCR **Be vary careful depending on the provider you use this changes accordinly**. For example for tesseract english is `eng` but for docling using EasyOCR its `en`, you have to search this by yourself.  
➤ `format` : Used to specify the format of the output either `md` (markdown) or `txt` (plain text).


```yaml title="~/.config/gowall/schema.yml"
  - name: "op-qwen"
    config:
      ocr:
        provider: "openrouter"
        model: "qwen/qwen2.5-vl-72b-instruct:free"
        prompt: "Your OCR Prompt here which replaces the default prompt"
        append_prompt: "This is a prompt that is appended to the default prompt gowall provides"
        language: "eng"
        format: "md"
```

## Pipeline Configs

You can also control the following settings : 

➤ `dpi` : Used when providers don't accept pdfs and gowall has to covert it to images. Higher dpi means bigger image size sharper text. Lower dpi smaller image size but fuzzier text. (Default is `150`)

➤ `concurrency` : Used to control the concurrency of pre-processing and post-processing stages. (Default is `5`)

➤ `ocr_concurrency` : Used to control the concurrency of the ocr stage. (Default is `10`)

```yaml title="~/.config/gowall/schema.yml"
  - name: "op-qwen"
    config:
      ocr:
        provider: "openrouter"
        model: "qwen/qwen2.5-vl-72b-instruct:free"
      pipeline:
        dpi: 150
        concurrency: 5
        ocr_concurrency: 10
```

## Text correction

This stage is not enabled by default.

A stage of the post-processing part. Usually paired with tesseract so the OCR happens very fast and an LLM corrects the **grammar mistakes**, **closes brackets**, **tries to format the output in markdown** by placing various markdown syntax where needed.


On the below example we are using tesseract for the OCR and an LLM from the openrouter provider for the text correction.

```yaml title="~/.config/gowall/schema.yml"
  - name: "tes-llm"
    config:
      ocr:
        provider: "tesseract"
        model: "tesseract"
      text_correction:
        enabled: true
        rate_limit:  # <-- rate limits the post-processing provider not the ocr provider
            rps: 2
            burst: 4
        provider:
          provider: "openrouter"  # You can specify all the provider configs as seen in the 'Provider Configs' section
          model: "x-ai/grok-4-fast:free"
```

## Provider specific Configs

Providers may have specific configs that are unique to them unlike all the options above. If a provider has a specific config you will find it under its specific provider section in the documentation.

The example above displays the options for Docling (both the docling CLI and the docling API service )


```yaml title="~/.config/gowall/schema.yml"
  - name: "docling-cli"
    config:
      ocr:
        provider: "docling"
        model: "easyocr"
        language: "en"
      docling_options:
        do_ocr: true
        force_ocr: true
        pipeline: "vlm"
        pdf_backend: "..."
        abort_on_error: true
        document_timeout: "..."
        num_threads: 3
        device: "..."
        verbose: "..."
      
```
All the options are from the docling CLI, they are also mostly named the same, so you would need to refer to the docs fo the provider.

```
# Part of the docling cli --help

│ --pipeline      [standard|vlm|asr]                                         Choose the pipeline to process PDF or image files.                             │
│ --vlm-model     [smoldocling|granite_vision|granite_vision_ollama]         Choose the VLM model to use with PDF or image files.                           │
│                                                                             [default: smoldocling]                                                        │
│ --ocr                                                                      If enabled, the bitmap content will be processed using OCR                     │
│                                                                             [default: ocr]                                                                │
│ --force-ocr                                                                Replace any existing text with OCR generated text over the full content        │
│ --pdf-backend   [pypdfium2|dlparse_v1|dlparse_v2|dlparse_v4]               The PDF backend to use. [default: dlparse_v2]                                  │
│ --abort-on-error                                                           If enabled, the processing will be aborted when the first error is encountered │
│ --verbose             INTEGER                                              Set the verbosity level. -v for info logging, -vv for                          │
│ --document-timeout    FLOAT                                                The timeout for processing each document, in seconds.                          │
│ --num-threads         INTEGE                                               Number of threads [default: 4]                                                 │
│ --device              [auto|cpu|cuda|mps]                                  Accelerator device [default: auto]                                             │
```

