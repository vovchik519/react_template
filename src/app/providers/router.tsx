import {
    createBrowserRouter,
} from "react-router-dom";
import { NotFound, HomePage } from "@/pages"
import ChangedPage from "@/features/ChangedPage";

export default createBrowserRouter(ChangedPage([
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "/*",
        element: <NotFound />
    },
]));