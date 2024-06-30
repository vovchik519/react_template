import {
    ScrollRestoration,
} from "react-router-dom";

export default function WithScrollRestoration(routes: any) {
    return routes.map((route: any) => ({
        ...route,
        element: (
            <div>
                <ScrollRestoration />
                {route.element}
            </div>
        )
    }));
}