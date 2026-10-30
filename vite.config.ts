import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // 'assets' (default) colide com public/Assets em filesystem case-insensitive (macOS).
  build: { assetsDir: "bundle" },
});
