import { Route, Routes } from "react-router-dom"
import Layout from "./components/layout"
import HomePage from "./pages/home"
import ProjectPage from "./pages/project"
import AboutPage from "./pages/about"
import ContactPage from "./pages/contact"

function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/project" element={<ProjectPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/*" element={<HomePage />} />
            </Route>
        </Routes>
    )
}

export default App
