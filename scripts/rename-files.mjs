import fs from "fs/promises";
import path from "path";

export const renameFiles = async () => {
  const executingDir = process.cwd();

  const files = await fs.readdir(executingDir);

  for (const file of files) {
    if (file.endsWith(".md")) {
      let newName;

      if (file === "README.md") {
        newName = "intro.md";
      } else {
        const baseName = path.basename(file, ".md");
        newName = `nip-${baseName}.md`;
      }
      await fs.rename(
        path.join(executingDir, file),
        path.join(executingDir, newName),
      );
    }
  }
};

if (import.meta.url === `file://${process.argv[1]}`) {
  renameFiles();
}
