import fs from "fs"

// Top face paths:
// O:
const oOuterD = "M111.35 128.58L333.05 256.58L222.20 320.58L111.35 320.58L0.50 256.58L0.50 192.58Z"
const oInnerD = "M111.35 192.58L222.20 256.58L166.78 288.58L55.93 224.58Z"
const oFace = `${oOuterD} ${oInnerD}`

// P:
const pOuterD = "M333.05 0.58L166.78 96.58L277.63 160.58L443.90 64.58L554.76 128.58L554.76 64.58L443.90 0.58Z"
const pInnerD = "M333.05 64.58L277.63 96.58L333.05 128.58L388.48 96.58Z"
const pFace = `${pOuterD} ${pInnerD}`

// Visible front-facing side walls extruded down 32px (1 row):
// For O:
// 1. Right wall of O: from (333.05, 256.58) to (222.20, 320.58)
const oWall1 = "M333.05 256.58L222.20 320.58V352.58L333.05 288.58Z"
// 2. Bottom horizontal bevel of O: from (222.20, 320.58) to (111.35, 320.58)
const oWall2 = "M222.20 320.58L111.35 320.58V352.58L222.20 352.58Z"
// 3. Bottom-left wall of O: from (111.35, 320.58) to (0.50, 256.58)
const oWall3 = "M111.35 320.58L0.50 256.58V288.58L111.35 352.58Z"
// 4. Inside-top wall of O hole: from (111.35, 192.58) to (222.20, 256.58)
const oWallInner = "M111.35 192.58L222.20 256.58V288.58L111.35 224.58Z"

// For P:
// 1. Right outer wall of bowl: from (166.78, 96.58) to (277.63, 160.58)
const pWall1 = "M166.78 96.58L277.63 160.58V192.58L166.78 128.58Z"
// 2. Bottom outer wall of bowl: from (277.63, 160.58) to (443.90, 64.58)
const pWall2 = "M277.63 160.58L443.90 64.58V96.58L277.63 192.58Z"
// 3. Stem bottom-right wall: from (443.90, 64.58) to (554.76, 128.58)
const pWall3 = "M443.90 64.58L554.76 128.58V160.58L443.90 96.58Z"
// 4. Stem bottom cap: from (554.76, 128.58) to (554.76, 64.58)? Wait, at (554.76, 128.58) col 10 row 4, edge to (554.76, 64.58) col 10 row 2 is vertical on screen!
// 5. Inside-top wall of P hole: from (333.05, 64.58) to (388.48, 96.58) (or 277.63, 96.58 to 333.05, 128.58)
const pWallInner = "M277.63 96.58L333.05 128.58V160.58L277.63 128.58Z"

const svg = `<svg viewBox="0 0 556 354" fill="none" xmlns="http://www.w3.org/2000/svg" style="background:#09090b; width:100%; height:auto;">
  <defs>
    <pattern id="pat" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
      <path d="M-1 1l2 -2M0 10l10 -10M9 11l2 -2" stroke="#ffffff" stroke-opacity="0.15" stroke-width="1"/>
    </pattern>
  </defs>

  <!-- Side walls -->
  <g fill="#18181b" stroke="#3f3f46" stroke-width="1">
    <path d="${oWall1}" />
    <path d="${oWall2}" />
    <path d="${oWall3}" />
    <path d="${oWallInner}" />
    <path d="${pWall1}" />
    <path d="${pWall2}" />
    <path d="${pWall3}" />
    <path d="${pWallInner}" />
  </g>

  <!-- Top faces with hatch fill -->
  <g fill="#18181b" fill-rule="evenodd" clip-rule="evenodd">
    <path d="${oFace}" />
    <path d="${pFace}" />
  </g>
  <g fill="url(#pat)" fill-rule="evenodd" clip-rule="evenodd">
    <path d="${oFace}" />
    <path d="${pFace}" />
  </g>

  <!-- Outline strokes -->
  <g stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none">
    <path d="${oOuterD}" />
    <path d="${oInnerD}" />
    <path d="${pOuterD}" />
    <path d="${pInnerD}" />
    <!-- Vertical corner lines -->
    <path d="M333.05 256.58V288.58" />
    <path d="M222.20 320.58V352.58" />
    <path d="M111.35 320.58V352.58" />
    <path d="M0.50 256.58V288.58" />
    <path d="M277.63 160.58V192.58" />
    <path d="M554.76 128.58V160.58" />
  </g>
</svg>`

fs.writeFileSync("/Users/ompatil/Om/Projects/Portfolio/Portfolio/scratch-preview.html", `<!DOCTYPE html><html><body style="background:#000;display:flex;align-items:center;justify-content:center;height:100vh;margin:0;"><div style="width:556px;">${svg}</div></body></html>`)
console.log("Written scratch-preview.html");
