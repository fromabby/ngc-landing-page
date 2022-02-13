import { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './components/Home'
import Team from './components/Team'
import Marketplace from './components/Marketplace'
import Gallery from './components/Gallery'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                {/* {loading ? <h1>Loading...</h1> : ( */}
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/team' element={<Team />} />
                        <Route path='/marketplace' element={<Marketplace />} />
                        <Route path='/gallery' element={<Gallery />} />
                    </Routes>
                {/* )} */}
                <Footer />
            </div>
        </Router>
    );
}

export default App;
