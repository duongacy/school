# MCP Server Integration (Model Context Protocol)

This document explains a minimal setup to run a local MCP server for development and debugging. It is an optional integration that can be used with UI workflows (for example shadcn helpers or local agents).

References
- Model Context Protocol GitHub: https://github.com/modelcontextprotocol
- MCP documentation / SDKs: https://modelcontextprotocol.io/

Quick steps
1. Inspect `mcp-server/` in the repo — it contains a minimal TypeScript stdio-based server (demo/echo).
2. Install the server dependencies and run in dev mode:

```bash
cd mcp-server
npm install
npm run dev
```

3. Build + run for production-like behavior:

```bash
npm run build
npm start
```

4. VS Code integration: open the workspace and the provided `.vscode/mcp.json` registers the server for local debugging (stdio). Edit the `command`/`args` if you run with a different command.

Notes
- The included server is intentionally minimal (an echo/demo server) and is intended for development/debugging only. Use the official MCP SDK to implement full MCP behaviors (capabilities, streaming, JSON-RPC patterns, etc.).
