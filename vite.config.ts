import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    build: {
        // sourcemap: true,
        minify: false,
        terserOptions: {
            compress: false,
            mangle: false,
        },
    },
});
