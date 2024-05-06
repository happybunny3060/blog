import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Header from'./components/Header';
import Home from './pages/Home';
import Footer from'./components/Footer';

const App = () =>{
    return(
        <React.Fragment>
            <Header />

            <main>
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
            </main>
            <Footer />
        </React.Fragment>
    )
}

export default App
