import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/routes'
import AuthProvider from './provider/AuthProvider'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='bg-gray-50'>
      <AuthProvider>
        <RouterProvider router={router} />
        <ToastContainer position='center' />
      </AuthProvider>
    </div>
  </StrictMode>,
)
