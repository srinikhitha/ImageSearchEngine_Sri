import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

// import Login from "./Components/Login";
// import Signup from "./Components/Signup";
import MainLayout from "./Components/MainLayout";
// import Search from "./pages/Search";
// import AdvancedSearch from "./Components/AdvancedSearch";
// import Forgot from "./pages/forgot";

// const Login = lazy(() => import("./pages/Login"));
// const Signup = lazy(() => import("./pages/Signup"));
// const Search = lazy(() => import("./pages/Search"));
// const AdvancedSearch = lazy(() => import("./pages/AdvancedSearch"));
// const Forgot = lazy(() => import("./pages/forgot"));

// function App() {
//   return (
//     <>
//       <Router>
//         {/* <MainLayout /> */}
//         <Switch>
//           <Route path="/" exact>
//             <MainLayout />
//             <Login />
//           </Route>
//           <Route path="/Login" exact>
//             <MainLayout />
//             <Login />
//           </Route>
//           <Route
//             path="/SignUp"
//             exact
//             render={(props) => (
//               <>
//                 {" "}
//                 <MainLayout />
//                 <Signup {...props} />
//               </>
//             )}
//           />

//           <Route path="/Search" exact>
//             <MainLayout />
//             <Search />
//           </Route>
//           <Route path="/AdvancedSearch" exact>
//             <MainLayout />
//             <AdvancedSearch />
//           </Route>
//           <Route path="/forgot" exact>
//             <MainLayout />
//             <Forgot />
//           </Route>
//         </Switch>
//       </Router>
//     </>
//   );
// }

import AppRouter from "./routes";

const App = () => {
  return <AppRouter />;
};

export default App;
