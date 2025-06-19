import * as React from "react";
import * as DOM from "react-dom/client";

import App from "#/app";

const root: HTMLElement | null = document.getElementById("root");

if (!root) {
    throw new Error("root element not found");
}

DOM.createRoot(root).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
