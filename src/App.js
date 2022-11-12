import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import Home from './components/Home/Home';
import Main from './components/Layout/Main';
import QuizTopics from './components/QuizTopics/QuizTopics';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/quizTopics',
          element: <QuizTopics></QuizTopics>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/blogs',
          element: <Blogs></Blogs>
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
