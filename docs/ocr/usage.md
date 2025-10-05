---
sidebar_position: 3
---

# Usage

This section discusses the flags available for the ocr command. They are mostly useful to override the values you set in the `schema.yml` file. Checkout [schemas](./schema.md) on how they work.

Schemas make it so you only really need to use the `-s` flag since everything else is specified in the `schema.yml`.


### ➤ Schema

The `-s` flag is the flag that specifies what schema to use. In the example below we use the `or-simple` schema
to ocr the pdf.

```yaml title="~/.config/gowall/schema.yml"
schemas:
  - name: "or-simple"
    config:
      ocr:
        provider: "openrouter"
        model: "qwen/qwen2.5-vl-72b-instruct:free"

  - name: "gem"
    config:
      ocr:
        provider: "gemini"
        model: "gemini-2.5-flash"
```

```bash
gowall ocr test.pdf -s or-simple
```

### ➤ Provider & Model

The `-p` flag is the flag that specifies what provider to use. 
The `-m` flag is the flag that specifies what model to use. 

Checkout the providers section to see what providers gowall supports.

```bash
gowall ocr test.pdf -p openrouter -m qwen/qwen2.5-vl-72b-instruct:free
```

### ➤ Rate Limiting

The `-r` flag is the flag that specifies the requests per second.
The `-b` flag is the flag that specifies the burst requests in accordance to the token bucket rate limiting algorithm.

Checkout the schema section where i explain more about how rate limiting and the algorithm works so you can understnad the flags better [here](./schema.md#rate-limiting)

```bash
gowall ocr test.pdf -r 4 -b 4
```

### ➤ Language

The `-l` flag used to specify the language of the OCR.


:::warning
 Be vary careful depending on the provider you use this changes accordinly. For example for tesseract english is `eng` but for docling using EasyOCR its `en`, you have to search this by yourself.
:::

- Here is the language list for `Tesseract` : [list](https://tesseract-ocr.github.io/tessdoc/Data-Files-in-different-versions.html)
- Here is the language list for `EasyOCR (used with Docling)` : [list](www.jaided.ai/easyocr/)

```bash
# I assume that you have a schema already setup for tesseract named `tesseract`
gowall ocr test.pdf -s tesseract -l eng

# If not then you would do something like : 
gowall ocr test.pdf -p tesseract -m tesseract -l eng
```

### ➤ Append Prompt

The `-a` flag is used to append to the default prompt gowall provides.  


```bash
gowall ocr test.pdf -s gem -a "Append this prompt to the default prompt"
```

Let's say gowall has the following default prompt : `bla bla OCR the content of the image/pdf` then the final prompt would be :

 `bla bla OCR the content of the image/pdf Append this prompt to the default prompt`

### ➤ Prompt

The `-u` flag is used to replace the default prompt gowall provides.  


```bash
gowall ocr test.pdf -s gem -a "Replace the prompt with this"
```
Let's say gowall has the following default prompt : `bla bla OCR the content of the image/pdf` then the final prompt would be :

 `Replace the prompt with this`

### ➤ Format

The `-f` flag is used to specify the format of the output. 

**Available formats** : `md` (markdown default) or `txt` (plain text).

```bash
gowall ocr test.pdf -s gem -f md
```

### ➤ DPI

The `-d`flag is used when providers don't accept pdfs and gowall has to covert it to images. Higher dpi means bigger image size sharper text. Lower dpi smaller image size but fuzzier text. (Default is `150`)


```bash
gowall ocr test.pdf -s gem -d 300
```

### Usecases

1) Keeping all your provider specific options & overriding the model or prompt 

```yaml title="~/.config/gowall/schema.yml"
  - name: "op-qwen"
    config:
      ocr:
        provider: "openrouter"
        model: "qwen/qwen2.5-vl-72b-instruct:free"
      rate_limit:
        rps: 2
        burst: 4
```

And use the `-m` model flag to just keep your options from the schema above but just change the model, for example : 

```bash
gowall ocr test.pdf -s op-qwen -m google/gemma-3n-e2b-it:free
```
You could do the same thing with the prompt (`-p` flag).


