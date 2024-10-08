import 'bootstrap/dist/css/bootstrap.css'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import App from './app/App.tsx'
import { store } from './app/store.ts'
import ErrorPage from './pages/error/ErrorPage.tsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Navigate to="/404" />,
    },
    {
        path: '/404',
        element: <ErrorPage />,
    },
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
)
