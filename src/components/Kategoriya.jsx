// Kategoriya.jsx
import { useState } from "react";
import headphones from "../assets/headphones.svg";
import books from "../assets/book.svg";
import { authorsData } from "./Authors.jsx";
import { Link } from "react-router-dom";
const categories = [
  { id: "temuriylar", label: "Temuriylar davri" },
  { id: "jadid", label: "Jadid adabiyoti" },
  { id: "sovet", label: "Sovet davri" },
  { id: "mustaqillik", label: "Mustaqillik davri" },
];

function AuthorCard({ author }) {
  const card = (
    <div
      className="rounded-xl overflow-hidden cursor-pointer group transition-transform duration-200 hover:-translate-y-1"
      style={{ background: "#1e1f22" }}
    >
      <div
        className="w-full relative overflow-hidden"
        style={{ height: "160px", background: "#2a2b2e" }}
      >
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ color: "#444", fontSize: "3rem", fontFamily: "serif" }}
        >
          {author.img ? (
            <img src={author.img} className="w-full h-full object-cover" />
          ) : (
            <span
              style={{ color: "#444", fontSize: "3rem", fontFamily: "serif" }}
            >
              {author.name.charAt(0)}
            </span>
          )}
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-12"
          style={{
            background: "linear-gradient(to bottom, transparent, #1e1f22)",
          }}
        />
        <div />
      </div>
      <div className="px-3 pb-3 pt-1">
        <p
          className="text-center leading-tight mb-1 text-[#C9AC8C]"
          style={{
            fontFamily: "'Crimson Text', Georgia, serif",
          }}
        >
          {author.name}
        </p>
        <p
          className="text-center mb-2"
          style={{
            color: "#7a7060",
            fontSize: "0.78rem",
          }}
        >
          {author.years}
        </p>
        <div className="flex justify-center gap-4">
          <span
            className="flex items-center gap-1"
            style={{ color: "#9a9080", fontSize: "0.8rem" }}
          >
            <img src={books} alt="" /> {author.books}
          </span>
          <span
            className="flex items-center gap-1"
            style={{ color: "#9a9080", fontSize: "0.8rem" }}
          >
            <img src={headphones} alt="" /> {author.audio}
          </span>
        </div>
      </div>
    </div>
  );
  return author.id ? (
    <Link to={`/adiblar/${author.id}`}>{card}</Link>
  ) : (
    <div>{card}</div>
  );
}

export default function AsosiyKategoriyalar() {
  const [active, setActive] = useState("jadid");

  return (
    <>
      <section
        style={{
          minHeight: "100vh",
          padding: "3rem 2rem",
        }}
      >
        <h2 className="text-center mb-6 text-[31px] text-[#C9AC8C]">
          Asosiy Kategoriyalar
        </h2>

        <div className="flex justify-center gap-2 flex-wrap mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              style={{
                fontFamily: "'Crimson Text', Georgia, serif",
                fontSize: "1rem",
                padding: "6px 20px",
                borderRadius: "999px",
                border: "none",
                cursor: "pointer",
                transition: "all 0.2s",
                background: active === cat.id ? "transparent" : "transparent",
                color: active === cat.id ? "#c9a96e" : "#6b6456",
                borderBottom:
                  active === cat.id
                    ? "2px solid #c9a96e"
                    : "2px solid transparent",
                borderRadius: 0,
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div
          className="mx-auto"
          style={{
            maxWidth: "1100px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
            gap: "16px",
          }}
        >
          {authorsData[active].map((author) => (
            <AuthorCard key={author.name} author={author} />
          ))}
        </div>
      </section>
    </>
  );
}
