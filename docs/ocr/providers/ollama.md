# Ollama Provider

## Prerequisites
- You must have `ollama` installed and running eg. (`ollama serve`).
- You must have a model installed and run it eg. (`ollama run qwen2.5vl:7b`).


Gowall assumes that ollama is running in the default host/port `http://127.0.0.1:11434` if you are running it on  anything different you can specify it with this env, see [here](./api_keys.md) on how to setup env's.

```bash
OLLAMA_HOST=your_host
```

:::tip
If the model isn't offloading to the GPU, you see any 100% of CPU usage meanwhile it hasn't even taken all of the VRAM you can tweak the following env's before you do `ollama run ...`

```bash
export OLLAMA_GPU_LAYERS=999
export OLLAMA_NUM_PARALLEL=1
```

**You must absolutely make sure ollama does not really offload to the CPU, because its insanely slow**. If you see the following message when you do `ollama run ...`

```bash
msg="offloaded 36/37 layers to GPU"
msg="offloading output layer to CPU" # <-- use the env's above, do not let it offload to both the CPU and GPU.  
```
:::

## Most Basic Schema

```yaml title="~/.config/gowall/schema.yml"
schemas:
  - name: "oll"
    config:
      ocr:
        provider: "ollama"
        model: "qwen2.5vl:7b"
```

```bash
gowall ocr img.png -s oll
```
Please refer to the [schemas](../schema.md) section for more information on how to use schemas with rate limiting,pre/post processing options,text correction etc...

