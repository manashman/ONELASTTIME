import express, { type Express } from "express";
import path from "path";

export function serveStatic(app: Express) {
  // IMPORTANT: use process.cwd() in Vercel
  const distPath = path.join(process.cwd(), "dist", "public");

  // Serve static assets (JS, CSS, images)
  app.use(
    express.static(distPath, {
      index: false, // prevent auto index.html handling
    }),
  );

  // SPA fallback — always return index.html
  app.get("*", (_req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.sendFile(path.join(distPath, "index.html"));
  });
}