import { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './components/Home'
import Header from './components/layout/Header'

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                {/* {loading ? <h1>Loading...</h1> : ( */}
                    <Routes>
                        <Route path='/' element={<Home />} />
                    </Routes>
                {/* )} */}
                {/* <Footer /> */}
            </div>
        </Router>
    );
}

export default App;
