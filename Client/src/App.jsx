import { useState } from "react";
  import { Button } from "@/components/ui/button";
import Signup from "./components/Signup";
import { BrowserRouter , Routes , Route } from "react-router";
import Login from "./components/Login";
import MainPage from "./Pages/MainPage";
  
  export default function App() {
   
    return (
     <>
     <BrowserRouter>
      <Routes>

    <Route path='/' element = {<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path="/main" element={<MainPage/>}/>
      </Routes>
     
     </BrowserRouter>
     </>
    );
  }
  