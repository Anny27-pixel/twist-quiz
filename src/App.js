import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import Home from './components/Home/Home';
import Main from './components/Layout/Main';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import Quiz from './components/Quiz/Quiz';
import Statistics from './components/Statistics/Statistics';
import Topics from './components/Topics/Topics';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>

        },
        {
          path: '/topics',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Topics></Topics>

        },
        {
          path: '/topic/:topicId',
          loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicId}`),
          element: <Quiz></Quiz>
        },

        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/statistics',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Statistics></Statistics>
        },
        {
          path: '/blogs',
          element: <Blogs></Blogs>
        },
        {
          path: '*',
          element: <NotFoundPage></NotFoundPage>
        }
      ]
    }
  ]);
  return (
    <div data-theme="cupcake" >
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
