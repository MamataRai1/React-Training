import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter} from "react-router";
import AppRouters from "./routes";

createRoot(document.getElementById('namuna')).render(
  <StrictMode>
    <BrowserRouter>
    <AppRouters/>
    </BrowserRouter>
     
  </StrictMode>
);

