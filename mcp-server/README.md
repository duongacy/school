# MCP Server (demo)

This is a minimal demo MCP server scaffold (stdio-based) intended for local development/testing only.

Quick start:

```bash
cd mcp-server
npm install
npm run dev   # development (requires ts-node-dev)
# or
npm run build
npm start     # run built JS
```

The server reads newline-delimited JSON from stdin and writes JSON responses to stdout. It is a stub — use the official MCP SDK to implement the real protocol.
