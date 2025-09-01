import express from "express";
import cors from "cors";
import fetch from "node-fetch"; // Node 18+ ise global fetch kullanılabilir

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/translate", async (req, res) => {
  const { q, source, target, format } = req.body;

  try {
    const response = await fetch("https://libretranslate.de/translate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "User-Agent": "Node.js"
        },
        body: JSON.stringify({ q, source, target, format })
      });

    if (!response.ok) {
      throw new Error("LibreTranslate returned an error");
    }
    const text = await response.text();
    console.log("LibreTranslate response:", text);


    const data = await response.json();

    res.json(data);

  } catch (err) {
    console.error("Backend translation error:", err);
    res.status(500).json({ error: "Translation service failed" });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
