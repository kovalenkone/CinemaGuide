import '@/assets/styles/index.scss'
import { router } from './routes/routes'
import { RouterProvider } from 'react-router-dom'
import Modals from './components/Modals/Modals'
import { useEffect } from 'react'
import { authRequests } from './api/requests'

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <Modals />
    </>
  )
}

export default App