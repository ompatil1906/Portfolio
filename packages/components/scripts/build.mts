import { promises as fs } from "node:fs"
import path from "node:path"
import { rimraf } from "rimraf"

const ROOT = process.cwd()
const PKG_ROOT = path.join(ROOT, "packages/components")
const DIST_PATH = path.join(PKG_ROOT, "dist")

async function build() {
  console.log("📦 Cleaning packages/components/dist...")
  await rimraf(DIST_PATH)
  await fs.mkdir(DIST_PATH, { recursive: true })

  console.log("⚡ Building @heyompatil/components re-export bundle...")

  // ESM
  await fs.writeFile(
    path.join(DIST_PATH, "index.mjs"),
    'export * from "@heyompatil/ui";\n',
    "utf8"
  )

  // CJS
  await fs.writeFile(
    path.join(DIST_PATH, "index.cjs"),
    '"use strict";\nmodule.exports = require("@heyompatil/ui");\n',
    "utf8"
  )

  // TypeScript declaration
  await fs.writeFile(
    path.join(DIST_PATH, "index.d.ts"),
    'export * from "@heyompatil/ui";\n',
    "utf8"
  )

  // Copy root LICENSE
  const rootLicense = path.join(ROOT, "LICENSE")
  if (await fs.stat(rootLicense).catch(() => null)) {
    await fs.copyFile(rootLicense, path.join(PKG_ROOT, "LICENSE"))
  }

  console.log("✅ @heyompatil/components build complete!")
}

build().catch((err) => {
  console.error("Build failed:", err)
  process.exit(1)
})
