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
import AllVolunteers from './Admin/AllVolunteers/AllVolunteers';
import CreateForm from './Admin/CreateForm/CreateForm';
import PostEvent from './Admin/PostEvent/PostEvent';
import Alumini from './Admin/Alumini/Alumini';
import UpdateWebsite from './Admin/UpdateWebsite/UpdateWebsite';
import AllEvents from './Admin/AllEvents/AllEvents';
import { useEffect } from 'react';
import Attendence from './Admin/Attendence/Attendence';
import AddEventDetails from './Admin/AddEventDetails/AddEventDetails';
import AdminYearEvent from './Admin/AdminYearEvent/AdminYearEvent';
import AdminNewEvent from './Admin/AdminYearEvent/AdminNewEvent';

function App() {
  const router = createBrowserRouter([
    {
      path:'',
      element:<Main/>
    },
    {
      path:'volunteer-login',
      element:<Login/>
    },
    {
      path:'sign-up',
      element:<SignUp/>
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
      element:<AdminMain/>,
      children:[
        {
          path:'',
          element:<h1>Admin Dashboard</h1>
        },
        {
          path:'all-volunteers',
          element:<AllVolunteers/>
        },
        {
          path:'create-form',
          element:<CreateForm/>
        },
        {
          path:'publish-event-details',
          element:<PostEvent/>
        },
        {
          path:'alumini',
          element:<Alumini/>
        },
        {
          path:'update-website',
          element:<UpdateWebsite/>
        },
        {
          path:'events',
          element:<AllEvents/>
        },
        {
          path:'Attendence',
          element:<Attendence/>
        },
        {
          path:'add-event-details',
          element:<AddEventDetails/>,
          children : [
            {
              path:'new-event',
              element:<AdminNewEvent/>
            },
            {
              path:'2024',
              element:<AdminYearEvent data="2024"/>
            },
            {
              path:'2023',
              element:<AdminYearEvent data="2023"/>
            },
            {
              path:'2022',
              element:<AdminYearEvent data="2022"/>
            }
          ]
        }
      ]
    },
    {
      path:'*',
      element:<h1>Its Error, 404 PATH NOT FOUND !</h1>
    }
  ])
  useEffect(()=>{
    try
    {
      fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/initialLoad`).then(data=>data.json()).then(data=>console.log(data)).catch(err=>console.log("no internet connection"))
    }
    catch(err)
    {
      alert("Unable to Load! \nNo Internet connection")
    }
  },[])
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
