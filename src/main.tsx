import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Analytics } from "@vercel/analytics/react";
import App from "./App.tsx";
import "./styles/Global.css";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Analytics />
        <App />
    </StrictMode>
);
