import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Pages} from "./pages/Pages";
import {TestSuperComponents} from "./common/components/superComponents/TestSuperComponents";

function App() {
    return (
        <div className="App">
            Project Cards
            <Pages/>
        </div>
    );
}

export default App;
