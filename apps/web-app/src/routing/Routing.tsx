import EmailVerification from '@/pages/EmailVerification/EmailVerification'
import Home from '@/pages/Home/Home'
import SignIn from '@/pages/SignIn/SignIn'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/sign-in',
    element: <SignIn />
  },
  {
    path: '/sign-up',
    element: <SignIn />
  },
  {
    path: '/email-verification/:verificationToken',
    element: <EmailVerification />
  }
])

export const Routing = () => <RouterProvider router={router} />