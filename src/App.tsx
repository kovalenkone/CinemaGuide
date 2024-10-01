import '@/assets/styles/index.scss'
import { router } from './routes/routes'
import { RouterProvider } from 'react-router-dom'

const App = () => {
  return <RouterProvider router={router} />
}

export default App