import { useParams, Link } from "react-router-dom";
import { authorsData } from "../components/authors.jsx";

const allAuthors = Object.values(authorsData).flat();

export default function AdibPage() {
  const { id } = useParams();
  const author = allAuthors.find((a) => a.id === id);

  if (!author) {
    return (
      <div className="text-center text-[#C9AC8C] mt-20 text-2xl">
        Adib topilmadi
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#141416",
        padding: "3rem 2rem",
      }}
    >
      <Link
        to="/"
        style={{
          color: "#7a7060",
          fontSize: "0.9rem",
          display: "inline-block",
          marginBottom: "2rem",
        }}
      >
        ← Orqaga
      </Link>

      <div
        className="mx-auto"
        style={{
          maxWidth: "800px",
          display: "flex",
          gap: "2.5rem",
          flexWrap: "wrap",
        }}
      >
        {/* Rasm */}
        <div
          style={{
            width: "240px",
            height: "300px",
            borderRadius: "12px",
            overflow: "hidden",
            background: "#2a2b2e",
            flexShrink: 0,
          }}
        >
          {author.img ? (
            <img
              src={author.img}
              alt={author.name}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          ) : (
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#444",
                fontSize: "5rem",
                fontFamily: "serif",
              }}
            >
              {author.name.charAt(0)}
            </div>
          )}
        </div>

        {/* Ma'lumotlar */}
        <div style={{ flex: 1, minWidth: "260px" }}>
          <h1
            style={{
              fontFamily: "'Crimson Text', Georgia, serif",
              color: "#C9AC8C",
              fontSize: "2rem",
              marginBottom: "0.25rem",
            }}
          >
            {author.name}
          </h1>
          <p style={{ color: "#7a7060", marginBottom: "1.5rem" }}>
            {author.years}
          </p>

          <div style={{ display: "flex", gap: "2rem", marginBottom: "2rem" }}>
            <div style={{ textAlign: "center" }}>
              <p
                style={{
                  color: "#C9AC8C",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                }}
              >
                {author.books}
              </p>
              <p style={{ color: "#7a7060", fontSize: "0.85rem" }}>Kitoblar</p>
            </div>
            <div style={{ textAlign: "center" }}>
              <p
                style={{
                  color: "#C9AC8C",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                }}
              >
                {author.audio}
              </p>
              <p style={{ color: "#7a7060", fontSize: "0.85rem" }}>Audio</p>
            </div>
          </div>

          <p
            style={{
              color: "#9a9080",
              lineHeight: "1.8",
              fontFamily: "'Crimson Text', Georgia, serif",
              fontSize: "1.05rem",
            }}
          >
            {author.bio || "Bu adib haqida ma'lumot tez orada qo'shiladi."}
          </p>
        </div>
      </div>
    </div>
  );
}
