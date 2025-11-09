import readline from "readline";

// Minimal stdio MCP-like demo server.
// For production, implement the full MCP protocol using the SDK.

const rl = readline.createInterface({ input: process.stdin, output: process.stdout, terminal: false });

console.error("[mcp-server] started (demo). Listening on stdin/stdout for JSON lines.");

rl.on("line", (line) => {
  line = line.trim();
  if (!line) return;
  try {
    const req = JSON.parse(line);
    const res = {
      id: (req && req.id) || null,
      result: {
        echo: req,
        message: "This is a demo MCP server response. Replace with real MCP SDK handling."
      }
    };
    process.stdout.write(JSON.stringify(res) + "\n");
  } catch (err) {
    // write a simple error object
    const errObj = { error: "invalid_json", detail: String(err), raw: line };
    process.stderr.write(JSON.stringify(errObj) + "\n");
  }
});
