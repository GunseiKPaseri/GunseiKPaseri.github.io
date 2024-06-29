import CssBaseline from "@mui/material/CssBaseline"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import React from "react"
import ReactDOM from "react-dom/client"
import { IconContext } from "react-icons"
import App from "./App.tsx"
import { AppContextProvider } from "./state/AppContextProvider.tsx"

const theme = createTheme()

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <IconContext.Provider value={{ size: "24" }}>
        <AppContextProvider>
          <CssBaseline />
          <App />
        </AppContextProvider>
      </IconContext.Provider>
    </ThemeProvider>
  </React.StrictMode>,
)
