import fs from "node:fs";
import path from "node:path";

const cwd = process.cwd();
const outDir = path.join(cwd, "out");
const indexHtml = path.join(outDir, "index.html");

console.log("[verify-static-export] cwd:", cwd);
console.log(
  "[verify-static-export] root entries:",
  fs.readdirSync(cwd).join(", "),
);

if (!fs.existsSync(outDir) || !fs.statSync(outDir).isDirectory()) {
  console.error(
    "[verify-static-export] ERRO: pasta `out/` não foi criada pelo `next build`.",
  );
  process.exit(1);
}

if (!fs.existsSync(indexHtml)) {
  console.error(
    "[verify-static-export] ERRO: `out/index.html` em falta.",
    "Conteúdo de out/:",
    fs.readdirSync(outDir).join(", "),
  );
  process.exit(1);
}

console.log(
  "[verify-static-export] OK — out/ com index.html (",
  fs.readdirSync(outDir).length,
  "itens)",
);
