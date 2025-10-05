# Docling Provider

## Prerequisites

Gowall supports both the `Doclign CLI` and the docling `REST API` also called [docling serve](https://github.com/docling-project/docling-serve).

It tries the docling cli and falls back to the REST API if needed. I suggest just installing the docling cli to `$PATH` via a virtual environment using `uv`

### Docling CLI

- Install [uv](https://docs.astral.sh/uv/)
- Run `uv tool install 'docling[vlm]'` to install the docling cli and the amazing visual model smoldocling. 

### Docling REST API

If you decide to use the REST API you can run it via a [docker container](https://github.com/docling-project/docling-serve#container-images).

 Thing is, if you want to use your GPU you need to install the [Nvidia Container Toolkit](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html), so essentially only Linux users can use it.
 There is an experimental container for RoCm 6.3 as well, as the README suggests.
 
  Also you would have to install the model manually yourself inside the docker container, since they dont ship it by default, else the size of the container would be collosal. I really just advise you to choose the docling cli unless you want something simple like CPU-only easyocr.

Gowall assumes that ollama is running in the default host/port `http://localhost:5001` if you are running it on anything different you can specify it with this env, see [here](./api_keys.md) on how to setup env's.

```bash
DOCLING_BASE_URL=your_host
```

## Most Basic Schema

```yaml title="~/.config/gowall/schema.yml"
schemas:
  - name: "doc"
    config:
      ocr:
        provider: "docling"
        model: "easyocr"
```

```bash
gowall ocr img.png -s doc
```
Please refer to the [schemas](../schema.md) section for more information on how to use schemas with rate limiting,pre/post processing options,text correction etc...



## Visual Models with Docling

Docling supports visual models with the `vlm` pipeline. As long as you have installed docling via  `uv tool install 'docling[vlm]'` you have `smoldocling` & `granite_docling` installed

In the docling cli you have to specify a lot of flags like : 

```
docling --pipeline vlm --vlm-model smoldocling example.pdf --output ...
```

here you just simply specify the model and gowall automatically registers it.


```yaml title="~/.config/gowall/schema.yml"
schemas:
  - name: "doc"
    config:
      ocr:
        provider: "docling"
        model: "smoldocling"
```


## Specific Options

The provider specific options only for the `docling` provider are listed below.

All the options are from the docling CLI, they are also mostly named the same. I have explained the 2 most important options with comments, if you don't understand something refer to the docling docs or `docling --help`

```yaml title="~/.config/gowall/schema.yml"
schemas:
  - name: "doc"
    config:
      ocr:
        provider: "docling"
        model: "smoldocling"
      docling_options:
        # by disabling this it will only handle text that’s already machine-readable (eg. Pdf text),
        # but ignores scanned text. Obviously its a lot faster than doing OCR.
        do_ocr: true 

        # Runs OCR anyway even if the PDF already has a text layer 
        #and replaces any existing text with the new OCR-generated text. 
        force_ocr: true 


        pdf_backend: "dlparse_v2" # [pypdfium2|dlparse_v1|dlparse_v2|dlparse_v4] 
        abort_on_error: false 
        document_timeout: 30.0 
        num_threads: 4 
        device: "cuda" 
        verbose: 0 
```
