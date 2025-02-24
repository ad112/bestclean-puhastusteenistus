
import { defineConfig } from "vite";
import { ConfigEnv, UserConfig } from 'vite';
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }: ConfigEnv): UserConfig => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' ? componentTagger() : null,
  ].filter((plugin): plugin is NonNullable<typeof plugin> => plugin !== null),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
