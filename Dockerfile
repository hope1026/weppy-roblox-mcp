FROM node:20-bookworm-slim

WORKDIR /app

COPY package.json ./package.json
COPY LICENSE ./LICENSE
COPY README.md ./README.md
COPY plugins/weppy-roblox-mcp/dist ./plugins/weppy-roblox-mcp/dist

ENV NODE_ENV=production

CMD ["node", "plugins/weppy-roblox-mcp/dist/index.js"]

