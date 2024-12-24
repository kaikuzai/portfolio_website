import HomePage from "../pages/HomePage"

interface RouteConfig {
    path: string, 
    element: React.FC, 
    isProtected: boolean 
}


export const routes: RouteConfig[] = [
    {path: '/', element: HomePage, isProtected: false},
]