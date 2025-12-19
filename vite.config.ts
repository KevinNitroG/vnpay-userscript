import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import monkey from "vite-plugin-monkey";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    monkey({
      entry: "src/main.tsx",
      userscript: {
        icon: "https://vitejs.dev/logo.svg",
        namespace: "kevinnitrog/vnpay-userscript",
        match: ["https://sandbox.vnpayment.vn/*"],
        "run-at": "document-idle",
        grant: "*",
        version: "0.1.0",
      },
    }),
  ],
});
