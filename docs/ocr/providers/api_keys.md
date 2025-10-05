# API Keys

Cloud based providers require an API key to be used. Grab an API key from your provider and provide it to gowall via an environment variable.


## .ENV file (recommended)

Gowall expects a `.env` file in `~/.gowall/.env`. You can change the location of the `.env` by specifying it in the config file `~/.config/gowall/config.yml`.

```yaml title="~/.config/gowall/config.yml"
EnvFilePath: "Secrets/gowall/.env" # no need for /home/username/ its infered.
```

```env title="Secrets/gowall/.env"
OPENAI_API_KEY=your_api_key
```


## ENV's

While you could i don't recommend placing them inside your `.zsh/.bashrc` since they are commonly stored in dotfiles.
You don't want to expose secrets now would ya?

```bash title=".zshrc"
export OPENAI_API_KEY=your_api_key
```

If you really wanna place them in your `.zsh/.bashrc` for some reason at least use something like hashicorps vault to populate them. (though i doubt anyone has vault randomly installed)

```bash title=".zshrc"
export OPENAI_KEY=$(vault kv get -field=API_KEY secret/openai)
```

---

You can always just use env's only for that session, though that would put the `export ...` line in your history which i do not recommend.

```bash
export OPENROUTER_API_KEY=your_api_key
gowall ocr img.png -p openrouter -m qwen/qwen2.5-vl-72b-instruct:free
```