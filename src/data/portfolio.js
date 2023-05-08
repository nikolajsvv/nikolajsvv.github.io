import cafeQueryLogo from "../assets/cafequeryLogo.png";
import vaultLogo from "../assets/vaultLogo.png";
import d3nodataLogoDark from "../assets/d3nodataLogoDark.png";
import twitchChatSpotifyBot from "../assets/twitchChatSpotifyBotLogo.png";
// import d3nodataLogo from "../assets/d3nodata.png";

const portfolio = [
  {
    title: "D3no Data",
    imgUrl: d3nodataLogoDark,
    stack: ["Preact", "Deno", "TypeScript", "D3.js", "Fresh Framework"],
    workUrl: "https://d3nodata.deno.dev/",
  },
  {
    title: "Vault",
    imgUrl: vaultLogo,
    stack: ["React", "Node.js", "JavaScript", "Express"],
    workUrl: "https://github.com/stabbin-rabbits/vault",
  },
  {
    title: "Twitch Spotify Integration",
    imgUrl: twitchChatSpotifyBot,
    stack: [
      "JavaScript",
      "Express",
      "Node.js",
      "Passport",
      "Spotfiy API",
      "Twitch API",
    ],
    workUrl: "https://github.com/nikolajsvv/TwitchSpotifyIntegration",
  },
  {
    title: "Cafe Query",
    imgUrl: cafeQueryLogo,
    stack: ["Express", "Node.js", "MongoDB", "JavaScript"],
    workUrl: "https://github.com/PinkFairyArmadillos34/CafeQuery",
  },
];

export default portfolio;
