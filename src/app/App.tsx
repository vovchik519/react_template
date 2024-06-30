import {
  RouterProvider
} from "react-router-dom";
import router from '@/app/providers/router'
import '@/app/styles/output.css'

const App = () => {
  return <RouterProvider router={router} />
}

export default App
