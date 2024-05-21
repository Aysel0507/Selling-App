import AddPage from "../pages/AddPage";
import Basket from "../pages/Basket";
import Detail from "../pages/Detail";
import Home from "../pages/Home";
import MainRoot from "../pages/MainRoot";

export const ROUTES=[
    {
        path:'/',
        element: <MainRoot />,
        children:[
            {
                index:true,
                element: <Home />
            },
            {
                path:'add-page',
                element: <AddPage />
            },
            {
                path: 'basket',
                element: <Basket />
            },
            {
                path :'/products/:id',
                element: <Detail />

            }
        ]
    }
]