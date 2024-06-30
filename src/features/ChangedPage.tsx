import {
    ScrollRestoration,
} from "react-router-dom";
import Header from "@/widgets/Header/Header";

export default function ChangedPage(routes: any) {
    return routes.map((route: any) => ({
        ...route,
        element: (
            <div>
                <ScrollRestoration />
                <Header />
                {route.element}
            </div>
        )
    }));
}