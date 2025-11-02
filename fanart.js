/* fanart.js
 *
 * Add as many artworks as you like.
 * Each object needs:
 *  – src  : path to the image (local file or URL)
 *  – title: artwork title
 *  – artist : artist name
 *
 * The script builds the gallery automatically.
 */

const fanartData = [
  {
    src: "https://pbs.twimg.com/media/G1NcTokWYAADiPx?format=jpg&name=large",
    title: "Moonlight Warrior",
    artist: "LunaStar",
  },
  {
    src: "https://pbs.twimg.com/media/G1w9uWWX0AA36YW?format=jpg&name=large",
    title: "Neon Dreams",
    artist: "Pix3l",
  },
  {
    src: "https://pbs.twimg.com/media/G3dZJ2QXUAANT3h?format=jpg&name=large",
    title: "Golden Hour",
    artist: "Solstice",
  },
  {
    src: "https://pbs.twimg.com/media/G4BoZ_RX0AAIoku?format=jpg&name=large",
    title: "Crystal Caves",
    artist: "GeoGem",
  },
  {
    src: "https://pbs.twimg.com/media/G4lOwYKXkAASPVd?format=jpg&name=large",
    title: "Sky Sailor",
    artist: "Zephyr",
  },
];

/* ---------- build gallery ---------- */
const gallery = document.getElementById("gallery");

fanartData.forEach((item) => {
  const div = document.createElement("div");
  div.className = "artwork";

  div.innerHTML = `
    <img src="${item.src}" alt="${item.title}">
    <div class="artwork-info">
      <div class="artwork-title">${item.title}</div>
      <div class="artwork-artist">by ${item.artist}</div>
    </div>
  `;

  gallery.appendChild(div);
});
