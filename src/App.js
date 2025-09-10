import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import ToDoList from "./pages/ToDoList";
import GoodLookingPage from "./pages/GoodLookingPage";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/todo" element={<ToDoList/>}></Route>
                <Route path="/good" element={<GoodLookingPage/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
