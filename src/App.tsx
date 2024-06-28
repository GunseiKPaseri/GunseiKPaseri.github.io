import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { ErrorPage } from "./components/pages/ErrorPage"
import Home from "./components/pages/Home"
import Productions from "./components/pages/Productions"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/productions",
    element: <Productions />,
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
