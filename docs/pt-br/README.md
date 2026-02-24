# Roblox MCP

[English](../../README.md) | [한국어](../ko/README.md) | [日本語](../ja/README.md) | [Español](../es/README.md) | **Português** | [Bahasa Indonesia](../id/README.md)

> Fale com a IA e ela executa direto no Roblox Studio.

[![Demo](https://img.youtube.com/vi/3jrUpBbZPaw/maxresdefault.jpg)](https://youtu.be/3jrUpBbZPaw)

## Funcionalidades principais

### 1) MCP Tool: execucao direta no Studio via linguagem natural

O primeiro eixo do Roblox MCP e a **execucao de MCP Tool**.
A IA consegue operar diretamente scripts, instancias, propriedades, terreno, iluminacao, assets, audio e animacao dentro do Studio.

- "Adiciona particulas + som + cooldown quando o jogador pular."
- "Cria uma arena de boss no centro do mapa e coloca spawns sem colisao."
- "Muda a interface deste modulo e atualiza todos os scripts dependentes."

Nao e apenas geracao de codigo. Sao **acoes executaveis para fluxo real de desenvolvimento**.

### 2) Sync: mantem contexto completo do projeto para a IA

O segundo eixo e o **Project Sync**.
A IA trabalha com um espelho local sincronizado, entao alteracoes em varios arquivos continuam consistentes.

- Basic: sincronizacao unidirecional (Studio -> Local)
- Pro: sincronizacao bidirecional + Direction/Apply Mode por tipo + historico + multiplace

Assim voce mantem clara a fonte de verdade e evita perder contexto de mudancas.

## Valor imediato para o usuario

- Comprimir trabalho repetitivo: transformar muitas edicoes manuais em um pedido
- Alterar arquivos relacionados juntos: nao apenas um arquivo alvo
- Reduzir risco: decidir com base no estado do sync e no historico
- Melhor eficiencia de tokens (Pro): menos round trips com acoes em massa

## Documentacao detalhada

- [Cobertura de ferramentas (Tools Overview)](tools/overview.md)
- [Guia detalhado de Sync](sync/overview.md)

## Comecar

A instalacao tem dois passos:

1. **Instalar plugin do Roblox Studio** — Faz a ponte entre Studio e IA
2. **Registrar servidor MCP no app de IA** — Configura seu app de IA para reconhecer o Roblox MCP

Leva 5 minutos. 👉 [Ver guia de instalacao](installation/README.md)

## Upgrade Pro

Sync bidirecional, recursos avancados de criacao e eficiencia de tokens de IA — tudo em uma unica atualizacao.

👉 [Guia de upgrade Pro](pro-upgrade.md)

## Links

- [GitHub](https://github.com/hope1026/roblox-mcp)
- [Reportar Problema](https://github.com/hope1026/roblox-mcp/issues)
