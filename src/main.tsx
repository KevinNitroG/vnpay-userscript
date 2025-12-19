// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./home/App";
// import { automate } from "./automate/automate";
// import { homeUrl } from "./constant/route";

import { automate } from "./automate/automate";

// function renderHome() {
//   ReactDOM.createRoot(
//     (() => {
//       const app = document.createElement("div");
//       document.body.append(app);
//       return app;
//     })(),
//   ).render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>,
//   );
// }

function main() {
  // const current = window.location.href;
  // if (current.startsWith(homeUrl)) {
  //   renderHome();
  // } else {
  //   automate();
  // }
  automate();
}

main();
