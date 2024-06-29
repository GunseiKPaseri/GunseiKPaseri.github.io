import {
  Outlet,
  RouterProvider,
  ScrollRestoration,
  createBrowserRouter,
} from "react-router-dom"
import { ErrorPage } from "./components/pages/ErrorPage"
import Home from "./components/pages/Home"
import Productions from "./components/pages/Productions"
import TimelinePage from "./components/pages/TimelinePage"

const Layout = () => {
  return (
    <>
      <Outlet />
      <ScrollRestoration />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "/timeline", element: <TimelinePage /> },
      { path: "/productions", element: <Productions /> },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
