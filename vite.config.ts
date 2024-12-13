import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          decolation: ["motion/react", "@mui/lab", "@mui/material"],
        },
      },
    },
  },
})
