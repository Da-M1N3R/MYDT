/*  fanart.js  – grouped by artist
    ├─ group = []  → one row, any number of works
    └─ solo  = {}  → one centred work (landscape or portrait)
    A blank line (empty string) creates a visible gap in the gallery.
------------------------------------------------------------------- */
const galleryData = [
  // ==========  Eiichiro Oda  (one landscape) ==========
  {
    src: "https://pbs.twimg.com/media/G1YNHKhXcAENziR?format=jpg&name=4096x4096",
    title: "Egghead Incident",
    artist: "Eiichiro Oda",
  },
  "",

  // ==========  Eiichiro Oda  ==========
  [
    {
      src: "https://pbs.twimg.com/media/G1NcTokWYAADiPx?format=jpg&name=large",
      title: "Gyuki",
      artist: "St. Jaygarcia Saturn",
    },
    {
      src: "https://pbs.twimg.com/media/G1w9uWWX0AA36YW?format=jpg&name=large",
      title: "Itsumade",
      artist: "St. Marcus Mars",
    },
    {
      src: "https://pbs.twimg.com/media/G3dZJ2QXUAANT3h?format=jpg&name=large",
      title: "FengXi",
      artist: "St. Topman Warcurystice",
    },
    {
      src: "https://pbs.twimg.com/media/G4BoZ_RX0AAIoku?format=jpg&name=large",
      title: "Bakkotsu",
      artist: "St. Ethanbaron V. Nusjuro",
    },
    {
      src: "https://pbs.twimg.com/media/G4lOwYKXkAASPVd?format=jpg&name=large",
      title: "Sandworm",
      artist: "St. Shepherd Ju Peter",
    },
  ],
  "", //  << blank string = visual gap
  // ==========  Wafalo (Fan Art) ==========
  {
    src: "https://pbs.twimg.com/media/G2lrIKwXYAA7dlh?format=jpg&name=4096x4096",
    title: "Imu's Dominion",
    artist: "Wafalo",
    heading: "The One Piece Story", // ← put any text here (or delete key for no heading)
  },
  {
    src: "https://pbs.twimg.com/media/GxRBai9XoAEkHPK?format=jpg&name=large",
    title: "Big Mom & Kaido",
    artist: "Wafalo",
  },
  {
    src: "https://pbs.twimg.com/media/Gm-i5ewXgAAeo7P?format=jpg&name=large",
    title: "",
    artist: "Wafalo",
  },
  {
    src: "https://pbs.twimg.com/media/GqMvbsbXgAA-L0W?format=jpg&name=medium",
    title: "Egghead Incident",
    artist: "Wafalo",
  },
  {
    src: "https://pbs.twimg.com/media/Gns_4fXWAAAFUex?format=jpg&name=large",
    title: "",
    artist: "Wafalo",
  },
  {
    src: "https://pbs.twimg.com/media/GmVZw3TXMAACPn_?format=jpg&name=large",
    title: "Luffy vs Katakuri",
    artist: "Wafalo",
  },
  {
    src: "https://pbs.twimg.com/media/Glc4RGGWQAAaTDf?format=jpg&name=large",
    title: "",
    artist: "Wafalo",
  },
  {
    src: "https://pbs.twimg.com/media/GehKxPtXwAAYHXT?format=jpg&name=large",
    title: "",
    artist: "Wafalo",
  },
  {
    src: "https://pbs.twimg.com/media/GIQ7kLCXMAAerhb?format=jpg&name=large",
    title: "x",
    artist: "Wafalo",
  },
  {
    src: "https://pbs.twimg.com/media/F2scE2rXoAAp0cq?format=jpg&name=large",
    title: "y",
    artist: "Wafalo",
  },
  {
    src: "https://pbs.twimg.com/media/F2xQfcXXEAAIzh4?format=jpg&name=large",
    title: "y",
    artist: "Wafalo",
  },
  {
    src: "https://pbs.twimg.com/media/F1gdC-uXsAArVr5?format=jpg&name=large",
    title: "y",
    artist: "Wafalo",
  },
  {
    src: "https://pbs.twimg.com/media/Fst7mubWIAENVkN?format=jpg&name=medium",
    title: "y",
    artist: "Wafalo",
  },
  {
    src: "https://pbs.twimg.com/media/FqTjOsUXgAY4laX?format=jpg&name=4096x4096",
    title: "y",
    artist: "Wafalo",
  },
  {
    src: "https://pbs.twimg.com/media/FoYqBPoWcAApGE_?format=jpg&name=large",
    title: "y",
    artist: "Wafalo",
  },
  {
    src: "https://pbs.twimg.com/media/FioAv1XWQAIk12x?format=jpg&name=large",
    title: "y",
    artist: "Wafalo",
  },
  {
    src: "https://pbs.twimg.com/media/FeVxqGTWYAMH5cf?format=jpg&name=large",
    title: "y",
    artist: "Wafalo",
  },
  {
    src: "https://pbs.twimg.com/media/FUU5qYWX0AA_8K-?format=jpg&name=large",
    title: "y",
    artist: "Wafalo",
  },
  {
    src: "https://pbs.twimg.com/media/GalU3gtXoAAgXOe?format=jpg&name=large",
    title: "y",
    artist: "Wafalo",
  },
  [
    {
      src: "https://pbs.twimg.com/media/FbqUsp1XEAEzskp?format=jpg&name=4096x4096",
      title: "Cross Guild Poster",
      artist: "Wafalo",
    },
    {
      src: "https://pbs.twimg.com/media/Fe4e2lDXkAEyI-Q?format=jpg&name=large",
      title: "Mother Carmel",
      artist: "Wafalo",
    },
    {
      src: "https://pbs.twimg.com/media/FezYsd8WIAAljfb?format=jpg&name=4096x4096",
      title: "Big Mom",
      artist: "Wafalo",
    },
  ],
  [
    {
      src: "https://pbs.twimg.com/media/FUnyoPsWAAA76DW?format=jpg&name=4096x4096",
      title: "yx",
      artist: "Wafalo",
    },
  ],
];

/* ----------  build the gallery  ---------- */
const gallery = document.getElementById("gallery");

galleryData.forEach((block) => {
  if (block === "") {
    const spacer = document.createElement("div");
    spacer.style.width = "100%";
    spacer.style.height = "40px";
    gallery.appendChild(spacer);
    return;
  }

  if (Array.isArray(block)) {
    block.forEach((item) => gallery.appendChild(makeCard(item)));
  } else {
    const wrap = document.createElement("div");
    wrap.style.width = "100%";
    wrap.style.display = "flex";
    wrap.style.flexDirection = "column";
    wrap.style.alignItems = "center";
    wrap.style.gap = "10px";

    /*  ➜  heading only if block.heading exists  */
    if (block.heading) {
      const heading = document.createElement("h2");
      heading.textContent = block.heading; // ← your custom text
      heading.style.color = "#fff";
      heading.style.fontFamily = "Georgia, serif";
      heading.style.fontSize = "2rem";
      heading.style.margin = "0";
      heading.style.letterSpacing = "2px";
      wrap.appendChild(heading);
    }

    wrap.appendChild(makeCard(block, true, true));
    gallery.appendChild(wrap);
  }
});

/* helper – create one .artwork element */
function makeCard({ src, title, artist }, isLandscape = false, isXL = false) {
  const div = document.createElement("div");
  div.className =
    "artwork" + (isLandscape ? " landscape" : "") + (isXL ? " xl" : "");

  div.innerHTML = `
    <img src="${src}" alt="${title}">
    <div class="artwork-info">
      <div class="artwork-title">${title}</div>
      <div class="artwork-artist">by ${artist}</div>
    </div>`;
  return div;
}
