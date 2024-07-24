import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'
import 'bootstrap/dist/css/bootstrap.css';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './app/store.ts'



const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Navigate to="/404" />,
    },
    // {
    //     path: '/404',
    //     element: <ErrorPage />,
    // },
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
)
