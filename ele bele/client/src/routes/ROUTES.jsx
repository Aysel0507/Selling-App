import Home from "../pages/Home";
import MainRoot from "../pages/MainRoot";
import AddPage from "../pages/AddPage"
import Detail from "../pages/Detail";

export const ROUTES=[
    {
        path:'/',
        element: <MainRoot />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'add-page',
                element: <AddPage />
            },
            {
                path: '/products/:id',
                element: <Detail />
            }
        ]
    }
]