import Home from "./pages/Home";
import {Routes, Route} from "react-router-dom"
import ExplorePage from "./pages/Explore";
import WritePage from "./pages/WritePage";
import ProfilePage from "./pages/ProfilePage";
import ReadPage from "./pages/ReadPage"
export default function  App(){
  return(
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/explore" element={<ExplorePage />} />
      <Route path="/write" element={<WritePage/>} />
      <Route path="/profile" element={<ProfilePage/>} />
      <Route path="/read/:id" element={<ReadPage />} />
      <Route path="/read" element={<ReadPage />} />
    </Routes>
  )
}