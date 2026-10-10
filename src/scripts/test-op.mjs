import fs from "fs"

const cols = [0.50, 55.93, 111.35, 166.78, 222.20, 277.63, 333.05, 388.48, 443.90, 499.33, 554.76]
const rows = [0.58, 32.58, 64.58, 96.58, 128.58, 160.58, 192.58, 224.58, 256.58, 288.58, 320.58, 352.58]

function ptStr(c, r, dy = 0) {
  const x = cols[c].toFixed(2)
  const y = (rows[r] + dy).toFixed(2)
  return `${x} ${y}`
}

function uvPt(u, v, dy = 0) {
  const c = u - v
  const r = u + v
  if (c < 0 || c >= cols.length || r < 0 || r >= rows.length) {
    throw new Error(`Out of bounds: u=${u}, v=${v} -> c=${c}, r=${r}`)
  }
  return ptStr(c, r, dy)
}

function uvPtObj(u, v) {
  const c = u - v
  const r = u + v
  return { c, r, x: cols[c], y: rows[r] }
}

// Build SVG paths for a candidate design
function buildCandidate(name, oRings, pRings, sideEdges) {
  // oRings: array of rings for O (outer ring, inner holes)
  // pRings: array of rings for P (outer ring, inner holes)
  // sideEdges: array of front-facing edges [[u1, v1], [u2, v2]] that extrude down

  // Top face path (normal dy=0)
  const oFacePath = oRings.map(ring => "M" + ring.map(([u, v]) => uvPt(u, v, 0)).join("L") + "Z").join(" ")
  const pFacePath = pRings.map(ring => "M" + ring.map(([u, v]) => uvPt(u, v, 0)).join("L") + "Z").join(" ")

  // Walls (normal and pressed)
  const wallsNormal = []
  const wallsPressed = []
  for (const [p1, p2] of sideEdges) {
    const pt1 = uvPtObj(p1[0], p1[1])
    const pt2 = uvPtObj(p2[0], p2[1])
    // normal: top at y, bottom at y + 32
    wallsNormal.push(`M${pt1.x} ${pt1.y} L${pt2.x} ${pt2.y} L${pt2.x} ${pt2.y + 32} L${pt1.x} ${pt1.y + 32} Z`)
    // pressed: top at y + 16, bottom at y + 32
    wallsPressed.push(`M${pt1.x} ${pt1.y + 16} L${pt2.x} ${pt2.y + 16} L${pt2.x} ${pt2.y + 32} L${pt1.x} ${pt1.y + 32} Z`)
  }

  // Stroke lines:
  // 1. Top face outline loops
  // 2. Visible vertical drop lines from vertices
  // 3. Visible bottom edges
  return {
    name,
    oFacePath,
    pFacePath,
    wallsNormal,
    wallsPressed,
    sideEdges
  }
}

// Let's create candidate designs!

// Candidate A:
// Letter O:
// Symmetrical diamond ring at left:
// Outer: [3, 1] -> [7, 1] -> [7, 3] -> [6, 4] -> [4, 4] -> [3, 3] -> [3, 1]
// Wait, is [3, 1] to [7, 1] a straight isometric edge?
// Yes! Along u from 3 to 7 with v=1!
// And from [7, 1] to [7, 3] is along v from 1 to 3 with u=7!
// And [7, 3] to [6, 4] is (c=4, r=10) to (c=2, r=10) - a horizontal bevel!
// And [6, 4] to [4, 4] is along u from 6 to 4 with v=4!
// And [4, 4] to [3, 3] is (c=0, r=8) to (c=0, r=6) - a vertical edge!
// And [3, 3] to [3, 1] is along v from 3 to 1 with u=3!
// Look at the inner hole:
// [4, 2] -> [6, 2] -> [6, 3] -> [4, 3] -> [4, 2]
// Inner hole is a 2x1 rectangle!

// What are the front-facing (bottom silhouette) edges of O?
// Looking from front-bottom:
// Edges that face the viewer are those on the bottom and right:
// Edge 1: [7, 1] to [7, 3] (along v: c goes 6->4, r goes 8->10)
// Edge 2: [7, 3] to [6, 4] (c goes 4->2, r stays 10)
// Edge 3: [6, 4] to [4, 4] (along -u: c goes 2->0, r goes 10->8)
// Also inner hole: the top-inside wall is visible looking in from front!
// Specifically, edge [4, 2] to [6, 2] (inner wall facing viewer)!

// Now Letter P:
// Outer stem & bowl:
// Left spine of P: u in [3, 7], v in [-4, -3]
// Bowl of P:
// Top bar: u in [3, 4], v in [-3, -1]
// Right cap: u in [4, 5], v in [-1, -1] -> wait, if v is -1, right cap is at v=-1!
// Middle bar: u in [5, 6], v in [-3, -1]
// Stem bottom: u in [6, 7], v in [-4, -3]
// Let's check coordinates:
// Outer loop of P:
// [3, -4] -> [3, -1] -> [5, -1] -> [5, -3] -> [7, -3] -> [7, -4] -> [3, -4]!
// Wait! Let's check c and r for each vertex:
// [3, -4]: c = 3 - (-4) = 7, r = 3 + (-4) = -1 ???
// r = -1 is out of bounds! Rows are 0 to 11!
// Ah! At u=3, v=-4: r = 3 + (-4) = -1 < 0!
// That's why in the original D, at u=3, v was -3 (r = 3 + (-3) = 0)!
// And at v=-4, u was 4, 5, 6 (r = 4 - 4 = 0, 5 - 4 = 1, 6 - 4 = 2)!
// Let's verify: In original D, P4 had vertices:
// [10, 2] (c=10, r=2 -> u=6, v=-4)
// [9, 3] (c=9, r=3 -> u=6, v=-3)
// [7, 1] (c=7, r=1 -> u=4, v=-3)
// [8, 0] (c=8, r=0 -> u=4, v=-4)
// So v=-4 only existed for u in [4, 6]!
// At u=3, the top corner was beveled: [3, -3]! (c = 3 - (-3) = 6, r = 3 + (-3) = 0)!

console.log("Found row constraint! u + v >= 0 for all points!");

// Let's write an exhaustive search script to test valid layouts!
