import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import monkey from "vite-plugin-monkey";
import pkg from "./package.json" assert { type: "json" };

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    monkey({
      entry: "src/main.tsx",
      userscript: {
        author: "Kevin Nitro",
        namespace: "kevinnitrog/vnpay-userscript",
        iconURL: "https://sandbox.vnpayment.vn/merchantv2/favicon.ico",
        downloadURL:
          "https://github.com/KevinNitroG/vnpay-userscript/releases/latest/download/vnpay-userscript.user.js",
        defaulticon: "https://sandbox.vnpayment.vn/merchantv2/favicon.ico",
        name: "VNPay Auto Fill Userscript",
        match: ["https://sandbox.vnpayment.vn/*"],
        "run-at": "document-idle",
        version: pkg.version,
      },
    }),
  ],
});
