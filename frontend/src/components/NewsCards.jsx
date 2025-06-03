import React, { useEffect, useState } from "react";
import axios from "axios";

const NewsCards = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get("https://newsdata.io/api/1/latest?apikey=pub_2eacda44ce6f42f1bbed7efae20ed228&q=criminals")
      .then((res) => {
        setArticles(res.data.results); // Changed from res.data.articles to res.data.results
      })
      .catch((err) => {
        console.error("Error fetching news:", err);
      });
  }, []);

  return (
    <div style={{ padding: "20px", backgroundColor: "#f4f4f4" }}>
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>📰 Crime News</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
        {articles.map((article, index) => (
          <div
            key={article.article_id || index}
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
            {article.image_url && (
              <img 
                src={article.image_url} 
                alt={article.title} 
                style={{ 
                  width: "100%", 
                  height: "180px", 
                  objectFit: "cover" 
                }} 
                onError={(e) => {
                  e.target.style.display = 'none'; // Hide image if it fails to load
                }}
              />
            )}
            <div style={{ padding: "15px", flex: 1 }}>
              <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>{article.title}</h3>
              <p style={{ fontSize: "14px", color: "#555" }}>
                {article.description || "No description available"}
              </p>
              <p style={{ fontSize: "12px", color: "#888", marginTop: "10px" }}>
                <strong>Source:</strong> {article.source_name} <br />
                <strong>Author:</strong> {article.creator ? article.creator.join(", ") : "Unknown"} <br />
                <strong>Published:</strong> {new Date(article.pubDate).toLocaleString()}
              </p>
              <a
                href={article.link}
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