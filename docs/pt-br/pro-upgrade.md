# Guia de Upgrade para Pro

## Por que Pro?

### Sync bidirecional para fluxos de desenvolvimento reais

O Sync do Pro vai além do simples export. Edite scripts localmente e envie para o Studio. Faça mudanças no Studio e traga de volta para o disco. Pro mantém os dois lados sincronizados.

- **Sync bidirecional** — Mudanças fluem em ambas as direções entre Studio e arquivos locais.
- **Direction por tipo** — Configure a direção independentemente para Scripts, Values, Containers, Data e Services.
- **Apply Mode por tipo** — Escolha Auto ou Manual por tipo para equilibrar velocidade e controle.
- **Full Sync / Resync** — Reconstrua o estado limpo do projeto após grandes mudanças ou reconexões.
- **Histórico de mudanças** — Rastreie o que mudou, quando e em qual direção antes de aplicar.
- **Sync multi-place** — Sincronize até 3 Roblox Places simultaneamente, cada um com armazenamento isolado e histórico próprio.

### Economize tokens de IA com workflows de alto impacto

Ações em massa e avançadas reduzem chamadas repetitivas — faça mais por prompt.

### Capacidades avançadas mais amplas

Geração de terrain, busca de assets, análise espacial, animação, áudio e automação em escala de produção.

## Assinatura e download

### Passo 1: Assinar no Gumroad

1. Acesse [Gumroad - Weppy Roblox Plugin](https://gumroad.com/l/faccjs?utm_source=github&utm_medium=repo&utm_campaign=pro_upgrade_md)
2. Conclua a compra da licenca Pro por assinatura

### Passo 2: Baixar no GitHub Releases

1. Abra [GitHub Releases](https://github.com/hope1026/weppy-roblox-mcp/releases/latest)
2. Baixe `weppy-roblox-mcp-v{version}.zip`
3. Extraia e copie `roblox-plugin/WeppyRobloxMCP.rbxm` para a pasta de Plugins do Roblox

### Passo 3: Verificar

1. Abra o W-MCP no Roblox Studio
2. Confirme que o selo Pro aparece
3. Execute uma acao Pro (por exemplo: `manage_sync` ou operacoes em massa)

## Comparação de Recursos

| Recurso | Basic | Pro |
|---------|:-----:|:---:|
| Gerenciamento de Script, Instance, Property | ✅ Acesso total | ✅ Acesso total |
| Selection, Tag, Camera, Log | ✅ Acesso total | ✅ Acesso total |
| Direção do Sync | Studio → Local (unidirecional) | Bidirecional |
| Sync Direction por tipo | ❌ | ✅ Scripts / Values / Containers / Data / Services |
| Apply Mode por tipo | ❌ | ✅ Auto / Manual |
| Full Sync | ❌ | ✅ |
| Resync / Reconstruir estado | ❌ | ✅ |
| Histórico de mudanças | ❌ | ✅ |
| Sync multi-place | ❌ | ✅ Até 3 places com armazenamento isolado |
| Controle de Playtest (Reproduzir/Parar/Pausar/Retomar) | ❌ | ✅ |
| Cobertura avançada de tools | Conjunto base | Conjunto avançado mais amplo |
| Eficiência de tokens IA | Padrão | Melhor com ações em massa / de alto impacto |
