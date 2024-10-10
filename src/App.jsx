import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import HomePage from './Pages/HomePage'
import MainLayout from './Layouts/MainLayout';
import JobsPage from './Pages/JobsPage';
import NotFoundPage from './Pages/NotFoundPage';

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<MainLayout />}>
  <Route index element={<HomePage/> } />
  <Route path='/jobs' element={<JobsPage/> } />
  <Route path='*' element={<NotFoundPage/> } />

  </Route>
)
);
const App = () => {
  return (
    <RouterProvider router={router} />
      );
};

export default App




// <Navbar />
// <Hero />
// <HomeCards />
// <JobListings />
// <ViewAllJobs />




// import Navbar from "./Component/Navbar"
// import Hero from "./Component/Hero"
// import HomeCards from "./Component/HomeCards"
// import JobListings from "./Component/JobListings"
// import ViewAllJobs from "./Component/ViewAllJobs"




















// const App = () => {
// const name = "John"
//   let x = 10;
//   let y = 20;
//   let z = x + y
//   var names = ["Dahmie", "Desmond", "Destiny", "David"]
//   var loggedIn = true;
//   var styles = {
//     color : 'blue',
//     fontSize : '55px',
//     margin : '20px'
//   };

//   return (
//     <div>
//     <div className='text-5xl'>App</div>
//     <p style={styles}> Hi my name is {name} </p>
//     <p> The sum of {x} + {y} is {z} </p>
//     <ul>
//       {names.map((name, index) => (
//         <li key={index}>{name}</li>
//       ))}
//     </ul>
//     {loggedIn ? <h1> Hello World </h1> : <h2> Hello Guest </h2>}
//     {/* or */}
//     {/* {loggedIn && <h1> Hello Member</h1>} */}
//     </div>
//   )
// }

// export default App

