// author.jsx
import avloniy from "../assets/avloniy.svg";
import Rahmat from "../assets/rahmat.svg";
import Madazimov from "../assets/madazimov.svg";
import Niyoziy from "../assets/niyoziy.svg";
import cholpon from "../assets/cholpon.svg";
import Fitrat from "../assets/fitrat.svg";
import Qodiriy from "../assets/qodiriy.svg";
import Abdurashidxonov from "../assets/abdurashidxonov.svg";
import Abdulla from "../assets/abdulla.svg";
import Behbudiy from "../assets/behbudiy.svg";
import Muin from "../assets/muin.svg";
import hoshimov from "../assets/hoshimov.svg";
import { Link } from "react-router-dom";
import Hoshimov from "../pages/Hoshimov";
export const authorsData = {
  temuriylar: [
    {
      name: "Alisher Navoiy",
      years: "1441–1501",
      books: 28,
      audio: 9,
    },
    { name: "Zahiriddin Bobur", years: "1483–1530", books: 22, audio: 7 },
    { name: "Lutfiy", years: "1366–1465", books: 18, audio: 5 },
    { name: "Gadoiy", years: "XIV–XV asr", books: 14, audio: 4 },
    { name: "Sakkokiy", years: "XIV–XV asr", books: 11, audio: 3 },
    { name: "Atoiy", years: "XIV–XV asr", books: 9, audio: 2 },
  ],
  jadid: [
    {
      name: "Abdulla Avloniy",
      years: "1878–1934",
      books: 34,
      audio: 13,
      img: avloniy,
    },
    {
      name: "Nusrat Rahmat",
      years: "1878–1934",
      books: 34,
      audio: 13,
      img: Rahmat,
    },
    {
      name: "Rahmonberdi Madazimov",
      years: "1878–1934",
      books: 34,
      audio: 13,
      img: Madazimov,
    },
    {
      name: "Hamza Hakimzoda Niyoziy",
      years: "1889–1929",
      books: 34,
      audio: 13,
      img: Niyoziy,
    },
    {
      name: "Abdulhamid Cho'lpon",
      years: "1897–1938",
      books: 34,
      audio: 13,
      img: cholpon,
    },
    {
      name: "Abdurauf Fitrat",
      years: "1886–1938",
      books: 34,
      audio: 13,
      img: Fitrat,
    },
    {
      name: "Abdulmajid Qodiriy",
      years: "1878–1934",
      books: 34,
      audio: 13,
      img: Qodiriy,
    },
    {
      name: "Munavvarqori Abdurashidxonov",
      years: "1878–1934",
      books: 34,
      audio: 13,
      img: Abdurashidxonov,
    },
    {
      name: "Abdulla Qodiriy",
      years: "1894–1938",
      books: 34,
      audio: 13,
      img: Abdulla,
    },
    {
      name: "Mahmuxo'ja Behbudiy",
      years: "1875–1919",
      books: 34,
      audio: 13,
      img: Behbudiy,
    },
    { name: "Hoji Muin", years: "1878–1934", books: 34, audio: 13, img: Muin },
  ],
  sovet: [
    { name: "Oybek", years: "1905–1968", books: 41, audio: 17 },
    { name: "G'afur G'ulom", years: "1903–1966", books: 38, audio: 14 },
    { name: "Hamid Olimjon", years: "1909–1944", books: 29, audio: 11 },
    { name: "Zulfiya", years: "1915–1996", books: 26, audio: 8 },
    { name: "Mirtemir", years: "1910–1978", books: 22, audio: 7 },
    { name: "Asqad Muxtor", years: "1920–1997", books: 19, audio: 6 },
  ],
  mustaqillik: [
    { name: "Erkin Vohidov", years: "1936–2016", books: 31, audio: 12 },
    { name: "Abdulla Oripov", years: "1941–2016", books: 28, audio: 10 },
    { name: "Omon Matjon", years: "1948–", books: 24, audio: 8 },
    { name: "Shavkat Rahmon", years: "1950–2005", books: 19, audio: 6 },
    { name: "Xurshid Davron", years: "1952–", books: 17, audio: 5 },
    {
      id: "O'tkir_Hoshimov",
      name: "O'tkir Hoshimov",
      years: "1941-2013",
      books: 20,
      audio: 8,
      img: hoshimov,
    },
  ],
};
