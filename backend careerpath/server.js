import express from "express";
import cors from "cors";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

import authRoutes from "./backend/routes/auth.js";
import counselorRoutes from "./backend/routes/counselors.js";
import sessionRoutes from "./backend/routes/sessions.js";
import aiRoutes from "./backend/routes/ai.js";
import { getSession } from "./backend/middleware/auth.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();

  const PORT = process.env.PORT || 4000;

  app.use(cors());
  app.use(express.json());
  app.use(getSession);

  // Health check route
  app.get("/api/health", (req, res) => {
    res.json({
      status: "ok",
      message: "Career Counseling API is running",
    });
  });

  // API Routes
  app.use("/api/auth", authRoutes);
  app.use("/api/counselors", counselorRoutes);
  app.use("/api/sessions", sessionRoutes);
  app.use("/api/ai", aiRoutes);

  // Development Vite middleware
  if (process.env.NODE_ENV !== "production") {
    try {
      const vite = await createViteServer({
        server: { middlewareMode: true },
        appType: "spa",
      });

      app.use(vite.middlewares);
    } catch (err) {
      console.error("Vite middleware error:", err.message);
    }
  } else {
    app.use(express.static(path.join(__dirname, "dist")));

    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "dist", "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`✅ Server running at http://localhost:${PORT}`);
  });
}

startServer();