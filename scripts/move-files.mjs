import fs from "fs/promises";
import path from "path";
import { renameFiles } from "./rename-files.mjs";

const moveFiles = async () => {
  try {
    await renameFiles();
  } catch (error) {
    console.error("Error executing renameFiles:", error);
    process.exit(1);
  }

  const executingDir = process.cwd();
  const targetDir = path.join(executingDir, "pages");
  await fs.mkdir(targetDir, { recursive: true });

  const files = await fs.readdir(executingDir);
  for (const file of files) {
    if (file.startsWith("nip-") || file === "intro.md") {
      await fs.rename(
        path.join(executingDir, file),
        path.join(targetDir, file),
      );
    }
  }
};

if (import.meta.url === `file://${process.argv[1]}`) {
  moveFiles();
}
