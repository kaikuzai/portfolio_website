import { AboutPage } from "../pages/AboutPage"
import ContactPage from "../pages/ContactPage"
import HomePage from "../pages/HomePage"
import LoginPage from "../pages/LoginPage"
import RegisterPage from "../pages/RegisterPage"
import SkillsPage from "../pages/SkillsPage"
import IndividualProjectPage from "../pages/IndividualProjectPage"

interface RouteConfig {
    path: string, 
    element: React.FC, 
    isProtected: boolean 
}


export const routes: RouteConfig[] = [
    {path: '/', element: HomePage, isProtected: false},
    {path: '/login', element: LoginPage, isProtected: false},
    {path: '/register', element: RegisterPage, isProtected: false},
    {path: '/skills', element: SkillsPage, isProtected: false},
    {path: '/contact', element: ContactPage, isProtected: false},
    {path: '/about', element: AboutPage, isProtected: false},
    {path: '/projects/:projectName', element: IndividualProjectPage, isProtected: false},
]