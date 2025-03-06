import {BrowserRouter as
        Router,
    Routes,
    Route} from 'react-router-dom';
import App from "./App.jsx";
import Display from "./components/Display.jsx";

const Index = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path="/" element={<App/>}></Route>
                    <Route exact path="/details/:id" element={<Display/>}></Route>
                </Routes>
            </Router>
        </div>
    );
};

export default Index;