import cafeQueryLogo from "../assets/cafequeryLogo.png";
import vaultLogo from "../assets/vaultLogo.png";
import d3nodataLogoDark from "../assets/d3nodataLogoDark.png";
// import d3nodataLogo from "../assets/d3nodata.png";

const portfolio = [
  {
    title: "D3no Data",
    imgUrl: d3nodataLogoDark,
    stack: ["Preact", "Deno", "TypeScript", "D3.js"],
    workUrl: "https://d3nodata.deno.dev/",
  },
  {
    title: "Vault",
    imgUrl: vaultLogo,
    stack: ["React", "Node.js", "JavaScript"],
    workUrl: "https://github.com",
  },
  {
    title: "Cafe Query",
    imgUrl: cafeQueryLogo,
    stack: ["Express", "Node.js", "MongoDB", "JavaScript"],
    workUrl: "https://github.com",
  },
];

export default portfolio;
