import React from 'react';
import Header from "./components/Header";
import "./App.scss"
import ToDoProvider from "./context";
import RootRouter from "./routers";


const App = () => {

    return (
        <ToDoProvider>
            <div className="wrapper" data-testid="home-page">
                <Header />
                <main className="main__content">
                    <RootRouter/>
                </main>
            </div>
        </ToDoProvider>
    );
};

export default App;