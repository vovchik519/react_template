import {
  RouterProvider,
} from "react-router-dom";
import '@/app/styles/output.css'

import router from '@/app/providers/router'

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
