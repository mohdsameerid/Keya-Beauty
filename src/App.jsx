import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./Forms/Login";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar";
import Users from "./User/Users";

// const Route = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<NavBar />}>
//         <Route index element={<Users />} />
//         <Route path="about" element={<About />} />
//         <Route path="dashboard" element={<Dashboard />} />
//       </Route>
//     </Routes>
//   );
// };

function App() {
  return (
    <>
      {/* <Login /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<Users />} />
            {/* <Route path="about" element={<About />} />
            <Route path="dashboard" element={<Dashboard />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <Users /> */}
    </>
  );
}

export default App;
