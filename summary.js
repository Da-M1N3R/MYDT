/*  summary.js  – add / change arcs here */
const summaryData = {
  onePiece: [
    {
      arc: "East Blue Saga",
      story:
        "<strong>Romance Dawn Arc.</strong><br>The journey begins. Luffy leaves his village, gathers his first crew-mates—Zoro, Nami, Usopp, Sanji—and defeats the fish-man Arlong, setting sail toward the Grand Line. <br><br><strong>Orange Town Arc.</strong> <br><br><strong>Syrup Village Arc.</strong> <br><br><strong>Baratie Arc.</strong> <br><br><strong>Arlong Park Arc.</strong> <br><br><strong>Loguetown Arc.</strong> <br><br>",
    },
    {
      arc: "Arabasta Saga",
      story:
        "<strong>Reverse Mountain Arc.</strong><br>The crew reaches a desert kingdom torn by civil war. Crocodile, a Shichibukai, manipulates both sides. Luffy's victory here earns him a 100 million berry bounty. <br><br><strong>Whisky Peak Arc.</strong> <br><br><strong>Diary of Koby & Helmeppo Arc.</strong> <br><br><strong>Little Garden Arc.</strong> <br><br><strong>Drum Island Arc.</strong> <br><br><strong>Arabasta Arc.</strong> <br><br>",
    },
    {
      arc: "Sky Island Saga",
      story:
        "<strong>Jaya Arc.</strong><br> Riding a Knock-Up Stream, the Straw Hats discover an island in the sky. They unravel the legend of the 'City of Gold' and ring the golden bell to end a 400-year war. <br><br><strong>Skypiea Arc.</strong> <br>",
    },
    {
      arc: "Water 7 Saga",
      story:
        "<strong>Long Ring Long Land Arc.</strong><br><br> <strong>Water 7 Arc.</strong><br> Robin is taken by CP9. The crew declares war on the World Government, burns the flag, and escapes on the Merry's final voyage—cementing their bond forever. <br><br><strong>Enies Lobby Arc.</strong><br>",
    },
    {
      arc: "East Blue Saga",
      story:
        "The journey begins. Luffy leaves his village, gathers his first crew-mates—Zoro, Nami, Usopp, Sanji—and defeats the fish-man Arlong, setting sail toward the Grand Line.",
    },
    {
      arc: "Thriller Bark Saga",
      story:
        "The crew reaches a desert kingdom torn by civil war. Crocodile, a Shichibukai, manipulates both sides. Luffy's victory here earns him a 100 million berry bounty.",
    },
    {
      arc: "Summit War Saga",
      story:
        "Riding a Knock-Up Stream, the Straw Hats discover an island in the sky. They unravel the legend of the 'City of Gold' and ring the golden bell to end a 400-year war.Royals gather every four years. Beneath polished diplomacy, ancient weapons, the Void Century, and the true seat of Imu are whispered among encrypted Transponder Snails.Royals gather every four years. Beneath polished diplomacy, ancient weapons, the Void Century, and the true seat of Imu are whispered among encrypted Transponder Snails.Royals gather every four years. Beneath polished diplomacy, ancient weapons, the Void Century, and the true seat of Imu are whispered among encrypted Transponder Snails.Royals gather every four years. Beneath polished diplomacy, ancient weapons, the Void Century, and the true seat of Imu are whispered among encrypted Transponder Snails.Royals gather every four years. Beneath polished diplomacy, ancient weapons, the Void Century, and the true seat of Imu are whispered among encrypted Transponder Snails.Royals gather every four years. Beneath polished diplomacy, ancient weapons, the Void Century, and the true seat of Imu are whispered among encrypted Transponder Snails.",
    },
    {
      arc: "Fish-Man Island Saga",
      story:
        "Robin is taken by CP9. The crew declares war on the World Government, burns the flag, and escapes on the Merry's final voyage—cementing their bond forever.",
    },
    {
      arc: "Dressrosa Saga",
      story:
        "Robin is taken by CP9. The crew declares war on the World Government, burns the flag, and escapes on the Merry's final voyage—cementing their bond forever.",
    },
    {
      arc: "Whole Cake Island Saga",
      story:
        "Robin is taken by CP9. The crew declares war on the World Government, burns the flag, and escapes on the Merry's final voyage—cementing their bond forever.",
    },
    {
      arc: "Wano Country Saga",
      story:
        "Robin is taken by CP9. The crew declares war on the World Government, burns the flag, and escapes on the Merry's final voyage—cementing their bond forever.",
    },
    {
      arc: "Final Saga",
      story:
        "<strong>Egghead Arc.</strong> <br><br><strong>Elbaf Arc.</strong>",
    },
  ],
  redLine: [
    {
      arc: "International Abduction arc. - Part 1",
      story:
        "Revolutionary commanders infiltrate the Holy Land, exposing the slave trade and clashing with admirals. Saban's flames light the sky as the Tenryūbito tremble.",
    },
    {
      arc: "Color Kingdoms Saga",
      story:
        "<strong>RGB Kingdom Arc.</strong> <br><br><strong>Dark Kingdom Arc.</strong>",
    },
    {
      arc: "Dagger Phenomenon Arc",
      story:
        "Revolutionary commanders infiltrate the Holy Land, exposing the slave trade and clashing with admirals. Saban's flames light the sky as the Tenryūbito tremble.",
    },
    {
      arc: "International Abduction arc. - Part 2",
      story:
        "Revolutionary commanders infiltrate the Holy Land, exposing the slave trade and clashing with admirals. Saban's flames light the sky as the Tenryūbito tremble.",
    },
    {
      arc: "Super 8 Tag Team Fight arc.",
      story:
        "Revolutionary commanders infiltrate the Holy Land, exposing the slave trade and clashing with admirals. Saban's flames light the sky as the Tenryūbito tremble.",
    },
    {
      arc: "God Competition arc.",
      story:
        "Revolutionary commanders infiltrate the Holy Land, exposing the slave trade and clashing with admirals. Saban's flames light the sky as the Tenryūbito tremble.",
    },
    {
      arc: "Battle Planet arc.",
      story:
        "Revolutionary commanders infiltrate the Holy Land, exposing the slave trade and clashing with admirals. Saban's flames light the sky as the Tenryūbito tremble.",
    },
    {
      arc: "Santa Claus Hunting arc.",
      story:
        "Revolutionary commanders infiltrate the Holy Land, exposing the slave trade and clashing with admirals. Saban's flames light the sky as the Tenryūbito tremble.",
    },
  ],
};

/* ----------  inject into columns ---------- */
function inject(list, targetId) {
  const box = document.getElementById(targetId);
  list.forEach(({ arc, story }) => {
    const details = document.createElement("details");
    details.innerHTML = `
      <summary>${arc}</summary>
      <p>${story}</p>
    `;
    box.appendChild(details);
  });
}
inject(summaryData.onePiece, "opContent");
inject(summaryData.redLine, "rlContent");
