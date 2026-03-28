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

### IA que controla playtests diretamente

A IA pode controlar os playtests do Roblox Studio diretamente. Ela pode iniciar e parar Play (F5) ou Run (F8), injetar scripts de teste, coletar logs e gerar relatórios automaticamente.

- "Inicia um playtest no modo Run e verifica se o NPC chega ao alvo."
- "Escreve um teste que verifica se o SpawnLocation está acima do chão e executa."
- "Valida que o script que acabei de mudar funciona sem erros no playtest."

### Capacidades avançadas mais amplas

Geração de terrain, busca de assets, análise espacial, animação, áudio e automação em escala de produção.

## Comprar e ativar

### Passo 1: Compre uma licença de assinatura Pro no Gumroad

1. Acesse [Gumroad - Weppy Roblox Plugin](https://gumroad.com/l/faccjs?utm_source=github&utm_medium=repo&utm_campaign=pro_upgrade_md)
2. Conclua a compra da licença de assinatura Pro
3. Copie a chave de licença que você recebe após a compra

Você só precisa ativar a licença uma vez, no plugin ou no dashboard. As duas superfícies compartilham o mesmo estado local de licença do MCP, então a ativação feita em um lugar aparece no outro.

### Ativar no plugin

1. Abra o **WROX** no Roblox Studio e conecte ao servidor MCP.
2. Abra a seção **Settings > License** no plugin.
3. Cole a chave comprada no campo `License key`.
4. Clique em **Activate** para ativar a licença.
5. Se o status não atualizar imediatamente, clique em **Refresh**.
6. Quando a ativação terminar, o status muda de Basic para Pro e os recursos Pro ficam disponíveis.

![Tela de ativação de licença no plugin](../assets/screenshots/plugin/license/plugin-license-screen.png)

### Ativar no dashboard

1. Inicie o servidor MCP e abra **Settings > License** no dashboard.
2. Confirme que o provider está definido como `gumroad`.
3. Cole a chave comprada no campo `License Key`.
4. Clique em **Activate License** para ativar a licença.
5. Se necessário, use **Refresh License** para buscar o status mais recente.

![Tela de ativação de licença no dashboard](../assets/screenshots/plugin/license/dashboard-license-screen.png)

### Depois da ativação

- Se o status da licença aparecer como `active` ou `grace`, os recursos Pro já estão disponíveis.
- O plugin e o dashboard compartilham o mesmo estado de licença, então a ativação feita em um deles aparece no outro.
- Use **Refresh** ou **Refresh License** sempre que quiser verificar o status mais recente novamente.

## Comparação de Recursos

| Recurso | Basic | Pro |
|---------|:-----:|:---:|
| Gerenciamento de Script, Instance, Property | ✅ Acesso total | ✅ Acesso total |
| Selection, Tag, Camera, Log | ✅ Acesso total | ✅ Acesso total |
| Direção do Sync | Studio → Local (unidirecional) | Bidirecional |
| Sync Direction por tipo | ❌ | ✅ Scripts / Values / Containers / Data / Services |
| Apply Mode por tipo | ❌ | ✅ Auto / Manual |
| Histórico de mudanças | ❌ | ✅ |
| Sync multi-place | ❌ | ✅ Até 3 places com armazenamento isolado |
| Controle de Playtest (Reproduzir/Parar/Pausar/Retomar) | ❌ | ✅ |
| Cobertura avançada de tools | Conjunto base | Conjunto avançado mais amplo |
| Eficiência de tokens IA | Padrão | Melhor com ações em massa / de alto impacto |
