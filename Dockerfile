FROM node:20-bookworm-slim

WORKDIR /app

ENV NODE_ENV=production

CMD ["npx", "-y", "@weppy/roblox-mcp@latest"]
