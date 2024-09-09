import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './components/Main/Main';
import Description from './components/Description/Description';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Profile from './components/Profile/Profile';
import AdminMain from './Admin/Main/AdminMain';
import Events from './components/Events/Events';
import Team from './components/Team/Team';
import YearEvent from './components/YearEvent/YearEvent';
import YearTeam from './components/Team/YearTeam';
import Gallery from './components/Gallery/Gallery';

function App() {
  const router = createBrowserRouter([
    {
      path:'',
      element:<Main/>,
      children:[
        {
          path:'',
          element:<Description/>
        },
        {
          path:'volunteer-login',
          element:<Login/>
        },
        {
          path:'sign-up',
          element:<SignUp/>
        }
      ]
    },
    {
      path:'events',
      element:<Events/>,
      children:[
        {
          path:'',
          element:<YearEvent year="2024"></YearEvent>
        },
        {
          path:'year-2024',
          element:<YearEvent year="2024"></YearEvent>
        },
        {
          path:'year-2023',
          element:<YearEvent year="2023"></YearEvent>
        },
        {
          path:'year-2022',
          element:<YearEvent year="2022"></YearEvent>
        },
        {
          path:'year-2021',
          element:<YearEvent year="2021"></YearEvent>
        },
        {
          path:'year-2020',
          element:<YearEvent year="2020"></YearEvent>
        },
        {
          path:'year-2019',
          element:<YearEvent year="2019"></YearEvent>
        }
      ]
    },
    {
      path:'team',
      element:<Team/>,
      children:[
        {
          path:'',
          element:<YearTeam year='2024'/>
        },
        {
          path:'year-2024',
          element:<YearTeam year="2024"/>
        },
        {
          path:'year-2023',
          element:<YearTeam year="2023"/>
        },
        {
          path:'year-2022',
          element:<YearTeam year="2022"/>
        },
        {
          path:'year-2021',
          element:<YearTeam year="2021"/>
        },
        {
          path:'year-2020',
          element:<YearTeam year="2020"/>
        }
      ]
    },
    {
      path:'gallery',
      element:<Gallery/>
    },
    {
      path:'volunteer',
      element:<Profile/>
    },
    {
      path:'admin',
      element:<AdminMain/>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
