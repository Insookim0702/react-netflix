import React from 'react';
import Router from './Router';
import Header from './Header';
import GlobalStyles from './GlobalStyles';
// import ComponentRouter from './ComponentRouter';
import { BrowserRouter } from 'react-router-dom';

function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Router />
            </BrowserRouter>
            <GlobalStyles />
        </>
    );
}

export default App;
