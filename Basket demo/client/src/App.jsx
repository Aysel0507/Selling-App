import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import { ROUTES } from './routes/ROUTES'
import BasketProvider from './context/BasketContext'

const router=createBrowserRouter(ROUTES)

function App() {

  return (
    <>
    <BasketProvider >
    <RouterProvider router={router} />
    </BasketProvider> 
    </>
  )
}

export default App
