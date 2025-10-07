import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Performance optimization: Preload critical components
const root = createRoot(document.getElementById("root")!);
root.render(<App />);
