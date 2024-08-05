import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BudgeteProvider } from "./context/BudgetContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BudgeteProvider>
      <App />
    </BudgeteProvider>
  </React.StrictMode>
);
