import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import 'remixicon/fonts/remixicon.css'
import { BrowserRouter } from "react-router-dom";
import StoreContext from "./context/StoreContext.jsx";

createRoot(document.getElementById("root")).render(
  <StoreContext>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StoreContext>
);
