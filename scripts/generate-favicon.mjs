import sharp from "sharp";
import pngToIco from "png-to-ico";
import { mkdir, writeFile, rm } from "node:fs/promises";

const source = "scripts/assets/favicon-source.png";
const output = "src/app/favicon.ico";
const tempDir = "scripts/temp-favicon";

// Tamanhos que queremos dentro do favicon.ico
const sizes = [16, 32, 48];

async function generateFavicon() {
  console.log("Gerando favicon...");

  // Cria uma pasta temporária
  await mkdir(tempDir, { recursive: true });

  const pngFiles = [];

  // Gera um PNG para cada tamanho
  for (const size of sizes) {
    const file = `${tempDir}/favicon-${size}x${size}.png`;

    await sharp(source)
      .resize(size, size)
      .png()
      .toFile(file);

    pngFiles.push(file);

    console.log(`✓ ${size}x${size} criado`);
  }

  // Junta os PNGs num único ficheiro ICO
  const ico = await pngToIco(pngFiles);

  // Guarda o favicon final
  await writeFile(output, ico);

  // Apaga os ficheiros temporários
  await rm(tempDir, { recursive: true, force: true });

  console.log(`✓ favicon.ico criado em: ${output}`);
  console.log("✓ Ficheiros temporários removidos");
}

generateFavicon().catch((error) => {
  console.error("Erro ao gerar favicon:");
  console.error(error);
  process.exit(1);
});