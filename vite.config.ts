import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import fs from "node:fs";
import path from "path";
import { componentTagger } from "lovable-tagger";

const serveContentAssets = () => ({
  name: "serve-content-assets",
  configureServer(server: { middlewares: { use: (path: string, handler: (request: any, response: any, next: () => void) => void) => void } }) {
    server.middlewares.use("/content", (request, response, next) => {
      const requestPath = decodeURIComponent(request.url ?? "").replace(/^\/+/, "");
      const contentRoot = path.resolve(__dirname, "public/content");
      const filePath = path.resolve(contentRoot, requestPath);

      if (!filePath.startsWith(`${contentRoot}${path.sep}`) || !fs.existsSync(filePath)) {
        next();
        return;
      }

      const contentTypes: Record<string, string> = {
        ".jpeg": "image/jpeg",
        ".jpg": "image/jpeg",
        ".png": "image/png",
        ".webp": "image/webp",
      };
      const extension = path.extname(filePath).toLowerCase();
      response.statusCode = 200;
      response.setHeader("Content-Type", contentTypes[extension] ?? "application/octet-stream");
      fs.createReadStream(filePath).pipe(response);
    });
  },
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  publicDir: path.resolve(__dirname, "public"),
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), serveContentAssets(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
