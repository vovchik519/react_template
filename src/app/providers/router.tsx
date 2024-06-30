import {
    createBrowserRouter,
} from "react-router-dom";
import { NotFound, HomePage } from "@/pages"

export default createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/*",
        element: <NotFound />
    },
]);