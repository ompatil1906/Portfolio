import { promises as fs } from "node:fs"
import path from "node:path"
import { execSync } from "node:child_process"
import { rimraf } from "rimraf"

const ROOT = process.cwd()
const PKG_ROOT = path.join(ROOT, "packages/ui")
const DIST_PATH = path.join(PKG_ROOT, "dist")
const ENTRY_PATH = path.join(PKG_ROOT, "src/index.ts")

async function build() {
  console.log("📦 Cleaning packages/ui/dist...")
  await rimraf(DIST_PATH)
  await fs.mkdir(DIST_PATH, { recursive: true })

  console.log("⚡ Building ESM bundle (index.mjs)...")
  const esmResult = await Bun.build({
    entrypoints: [ENTRY_PATH],
    outdir: DIST_PATH,
    naming: "index.mjs",
    format: "esm",
    target: "browser",
    packages: "external",
    banner: '"use client";',
  })

  if (!esmResult.success) {
    console.error("ESM build failed:", esmResult.logs)
    process.exit(1)
  }

  console.log("⚡ Building CJS bundle (index.cjs)...")
  const cjsResult = await Bun.build({
    entrypoints: [ENTRY_PATH],
    outdir: DIST_PATH,
    naming: "index.cjs",
    format: "cjs",
    target: "browser",
    packages: "external",
    banner: '"use client";',
  })

  if (!cjsResult.success) {
    console.error("CJS build failed:", cjsResult.logs)
    process.exit(1)
  }

  console.log("📝 Generating TypeScript definitions (index.d.ts)...")
  try {
    execSync(
      "npx tsc -p packages/ui/tsconfig.json --outDir packages/ui/dist",
      {
        stdio: "inherit",
        cwd: ROOT,
      }
    )
  } catch (err) {
    console.warn("TypeScript definition generation note:", err)
  }

  // Create root dist/index.d.ts pointing to relative paths
  const generatedIndexDts = path.join(DIST_PATH, "packages/ui/src/index.d.ts")
  if (await fs.stat(generatedIndexDts).catch(() => null)) {
    const rawContent = await fs.readFile(generatedIndexDts, "utf8")
    const relativeContent = rawContent.replaceAll("@/", "./src/")
    await fs.writeFile(
      path.join(DIST_PATH, "index.d.ts"),
      relativeContent,
      "utf8"
    )
  }

  // Remove redundant nested packages directory in dist
  await rimraf(path.join(DIST_PATH, "packages"))

  // Copy root LICENSE to package LICENSE
  const rootLicense = path.join(ROOT, "LICENSE")
  if (await fs.stat(rootLicense).catch(() => null)) {
    await fs.copyFile(rootLicense, path.join(PKG_ROOT, "LICENSE"))
  }

  console.log("✅ @heyompatil/ui build complete!")
}

build().catch((err) => {
  console.error("Build failed:", err)
  process.exit(1)
})
