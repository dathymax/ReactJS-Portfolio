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
        if (pathname === "/ReactJS-Portfolio/" || pathname === "/ReactJS-Portfolio") {
            navigate("/ReactJS-Portfolio/home");
        }
    }, [])

    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/ReactJS-Portfolio/home" element={<HomePage />} />
                <Route path="/ReactJS-Portfolio/about" element={<AboutPage />} />
                <Route path="/ReactJS-Portfolio/project" element={<ProjectPage />} />
                <Route path="/ReactJS-Portfolio/*" element={<HomePage />} />
            </Route>
        </Routes>
    )
}

export default App
