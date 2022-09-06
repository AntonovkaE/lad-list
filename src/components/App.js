import { Route, Routes } from 'react-router-dom';
import Home from "../pages/Home";
import About from "../pages/About";
import { Navbar } from "./Navbar/Navbar";
import  Form  from "./Form/Form";
import { Cities } from "./List/Cities";
import { WeatherView } from "../redux/weather/WeatherView";


function App() {
    return (
        <div className="page">

            <Navbar />
            <div className="container pt-5">
                <Routes>

                    <Route path="/about" element={ <About/> }>

                    </Route>
                    <Route path="/" element={ <Home/> }>
                    </Route>
                </Routes>
            </div>
        </div>




    )

}

export default App;
