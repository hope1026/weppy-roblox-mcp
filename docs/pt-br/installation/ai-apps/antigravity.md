# Configuração do Antigravity

Como usar o Roblox MCP com o [Google Antigravity](https://developers.googleblog.com/build-with-google-antigravity-our-new-agentic-development-platform/).

> **Antigravity** é a plataforma de desenvolvimento baseada em agentes do Google, em que agentes de IA realizam tarefas complexas de forma autônoma alternando entre edição de código, terminal e navegador.

## Pré-requisitos

1. **Antigravity** instalado (consulte a documentação oficial para SO suportados/requisitos)
2. **Plugin do Roblox Studio** instalado

## Registrar servidor MCP

No Antigravity, os servidores MCP são gerenciados no **painel do agente (Agent pane)**.

### Registro manual via raw config (recomendado)

1. No painel do agente, clique em **⋯** → **MCP Servers** → **Manage MCP Servers** → **View raw config**

![Abrir menu MCP Servers](../../../assets/screenshots/antigravity/antigravity_mcp_services_menu.png)

2. No JSON exibido, adicione/mescle o conteúdo abaixo:

```json
{
  "mcpServers": {
    "weppy-roblox-mcp": {
      "command": "<path-to>/weppy-roblox-mcp-<os>-<arch>"
    }
  }
}
```

> Baixe em [GitHub Releases](https://github.com/hope1026/roblox-mcp/releases/latest). `<os>`: darwin, linux, windows / `<arch>`: amd64, arm64

![Editar raw config](../../../assets/screenshots/antigravity/antigravity_mcp_raw.png)

3. Após salvar, faça **Refresh** (ou reinicie/atualize conforme a UI orientar)

> O caminho/nome real do arquivo de configuração pode variar conforme o SO e a versão do Antigravity. Sempre edite com base no local indicado em **View raw config**.

### Opção: Ajustar porta/logs via variáveis de ambiente

Recomendamos manter o padrão (HTTP `127.0.0.1:3002`). Se necessário, você pode definir variáveis de ambiente assim:

```json
{
  "mcpServers": {
    "weppy-roblox-mcp": {
      "command": "<path-to>/weppy-roblox-mcp-<os>-<arch>",
      "env": {
        "HTTP_HOST": "127.0.0.1",
        "HTTP_PORT": "3002",
        "LOG_LEVEL": "INFO"
      }
    }
  }
}
```

## Teste de conexão

1. Abra o **Roblox Studio** → aba Plugins → **W-MCP** → **Connect**
2. No **Antigravity**, digite:
   ```
   Diga-me o que está selecionado atualmente no Roblox Studio
   ```

## Solução de problemas

### Se o servidor não iniciar

Execute o servidor MCP diretamente para verificar o erro:
```bash
./weppy-roblox-mcp-<os>-<arch>
```

### Falha na conexão

- Verifique se o plugin do Roblox Studio está em **Connected**
- Verifique se a porta **3002** não está bloqueada pelo firewall
- Verifique o status do servidor no painel do agente **⋯** → **MCP Servers**
- (Avançado) Se você alterou `HTTP_PORT`, o plugin/bridge do Roblox Studio também precisa usar a mesma porta.

## Materiais de referência

- [Introdução ao Google Antigravity](https://developers.googleblog.com/build-with-google-antigravity-our-new-agentic-development-platform/)
- [Guia de primeiros passos do Antigravity (Codelab)](https://codelabs.developers.google.com/getting-started-google-antigravity)
