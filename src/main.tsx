import CssBaseline from "@mui/material/CssBaseline"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import { AppContextProvider } from "./state/AppContextProvider.tsx"

const theme = createTheme()

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AppContextProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </AppContextProvider>
  </React.StrictMode>,
)
