import React from "react";
import List from "./components/List";
import Form from "./components/form";
import './css/App.css'

const App = () => (
    <div>
        <div>
            <h2>Articles</h2>
            <List/>
        </div>
        <div>
            <h2>Add an Article</h2>
            <Form/>
        </div>
    </div>
);

export default App;