import Home from "./pages/Home";
import {Routes, Route} from "react-router-dom"
import ExplorePage from "./pages/Explore";
import WritePage from "./pages/WritePage";

export default function  App(){
  return(
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/explore" element={<ExplorePage />} />
      <Route path="/write" element={<WritePage/>} />
    </Routes>
  )
}