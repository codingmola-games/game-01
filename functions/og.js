// Cloudflare Pages Function: /og
// Generates a share card (SVG) from query params ?s=<seed>&t=<avg>.
// Week 0 skeleton — SVG only. Week 1 D4: upgrade to PNG via Satori/Resvg if needed
// for Twitter/Facebook crawler compatibility.

export async function onRequest(context) {
  const url = new URL(context.request.url);
  const seed = url.searchParams.get("s") || "default";
  const t = url.searchParams.get("t");

  const title = "EDGE OF ZERO";
  const subtitle = t && t !== "default"
    ? `평균 오차 ${t}초 — 따라잡을 수 있어?`
    : "0에 가장 가깝게 멈춰라";
  const seedLabel = seed === "default" ? "codingmola" : `seed · ${seed}`;

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="g" cx="50%" cy="50%" r="60%">
      <stop offset="0%" stop-color="#141432"/>
      <stop offset="100%" stop-color="#05050a"/>
    </radialGradient>
    <filter id="glow">
      <feGaussianBlur stdDeviation="12" result="b"/>
      <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="1200" height="630" fill="url(#g)"/>
  <g font-family="SF Pro Display, Inter, -apple-system, sans-serif" text-anchor="middle">
    <text x="600" y="200" font-size="48" font-weight="800" fill="#9aa8ff" letter-spacing="8">${escapeXml(title)}</text>
    <text x="600" y="360" font-size="200" font-weight="900" fill="#ffffff" filter="url(#glow)">0.${t && t !== "default" ? t.replace("0.","").padEnd(3,"0").slice(0,3) : "000"}</text>
    <text x="600" y="450" font-size="28" font-weight="500" fill="#cfcfe3">${escapeXml(subtitle)}</text>
    <text x="600" y="560" font-size="18" font-weight="600" fill="#6a6a88" letter-spacing="4">${escapeXml(seedLabel)}</text>
  </g>
</svg>`;

  return new Response(svg, {
    headers: {
      "content-type": "image/svg+xml; charset=utf-8",
      "cache-control": "public, max-age=3600, s-maxage=86400",
    },
  });
}

function escapeXml(s) {
  return String(s).replace(/[<>&"']/g, c => ({
    "<":"&lt;",">":"&gt;","&":"&amp;","\"":"&quot;","'":"&apos;"
  }[c]));
}
