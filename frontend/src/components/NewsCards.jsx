import React, { useEffect, useState } from "react";
import axios from "axios";

const NewsCards = () => {
  const [articles, setArticles] = useState([]);

//   useEffect(() => {
//     axios
//       .get("https://newsapi.org/v2/everything?q=crime+india&apiKey=759a00a3600b4583b5b227a65a214295")
//       .then((res) => {
//         setArticles(res.data.articles);
//       })
//       .catch((err) => {
//         console.error("Error fetching news:", err);
//       });
//   }, []);

  return (
    <div style={{ padding: "20px", backgroundColor: "#f4f4f4" }}>
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>📰 Crime News from India</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
        {articles.map((article, index) => (
          <div
            key={index}
            style={{
              width: "300px",
              backgroundColor: "#fff",
              border: "1px solid #ccc",
              borderRadius: "8px",
              overflow: "hidden",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              display: "flex",
              flexDirection: "column"
            }}
          >
            {article.urlToImage && (
              <img src={article.urlToImage} alt={article.title} style={{ width: "100%", height: "180px", objectFit: "cover" }} />
            )}
            <div style={{ padding: "15px", flex: 1 }}>
              <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>{article.title}</h3>
              <p style={{ fontSize: "14px", color: "#555" }}>{article.description}</p>
              <p style={{ fontSize: "12px", color: "#888", marginTop: "10px" }}>
                <strong>Source:</strong> {article.source.name} <br />
                <strong>Author:</strong> {article.author || "Unknown"}
              </p>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  marginTop: "10px",
                  padding: "8px 12px",
                  backgroundColor: "#007BFF",
                  color: "#fff",
                  textDecoration: "none",
                  borderRadius: "4px",
                  textAlign: "center"
                }}
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsCards;
