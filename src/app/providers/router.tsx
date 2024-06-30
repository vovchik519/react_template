import {
    createBrowserRouter,
} from "react-router-dom";
import { NotFound, HomePage } from "@/pages"
import WithScrollRestoration from "@/features/WithScrollRestoration";

export default createBrowserRouter(WithScrollRestoration([
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "/*",
        element: <NotFound />
    },
]));