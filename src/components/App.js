import { Route, Routes } from 'react-router-dom';
import Home from "../pages/home";
import About from "../pages/About";
import { Navbar } from "./Navbar";
import { Form } from "./Form";
import { Cities } from "./Cities";
import { Alert } from "./Alert";

function App() {
    return (
        <div className="page">
            <Navbar />
            <div className="container pt-5">
                <Alert />

                <Routes>
                    <Route path="/" exact element={ <Home/> }>
                    </Route>
                    <Route path="/about" element={ <About/> }>

                    </Route>
                </Routes>
            </div>
        </div>




    )

}

export default App;
