import { Route, Routes, useLocation, useNavigate } from "react-router-dom"
import Layout from "./components/layout"
import HomePage from "./pages/home"
import ProjectPage from "./pages/project"
import AboutPage from "./pages/about"
import { useEffect } from "react"

function App() {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    useEffect(() => {
        if (pathname === "/") {
            navigate("/home");
        }
    }, [])

    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/project" element={<ProjectPage />} />
                <Route path="/*" element={<HomePage />} />
            </Route>
        </Routes>
    )
}

export default App
