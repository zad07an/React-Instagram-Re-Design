import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <div>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Route>
      </Routes>
    </div>
  );
}
