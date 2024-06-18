import react from "@vitejs/plugin-react";
import * as path from "path";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [react() ],
    server: {
        host: '0.0.0.0',
        port: 3000
    },

    resolve: {
        alias: {
            components: path.resolve(__dirname, "./src/components"),
            pages: path.resolve(__dirname, "./src/pages"),
            styles: path.resolve(__dirname, "./src/styles"),
            routes: path.resolve(__dirname, "./src/routes"),
            assets: path.resolve(__dirname, "./src/assets")
        },
    },
});
