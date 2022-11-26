import Main from "../../Layouts/Main";
import Blog from "../../Pages/Blog/Blog";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/', 
        element: <Main></Main>,
        children: [
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }
])

export default router ;