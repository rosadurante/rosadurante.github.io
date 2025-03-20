import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, useSearchParams } from "react-router-dom";
import { CurriculumVitae } from "./cv";
import { Home } from "./home";

function App() {
    const [params, setParams] = useSearchParams();
    const cv = params.get("cv");
    console.log(cv);

    return cv ? <CurriculumVitae /> : <Home />;
}

// Mount the App into <div id="app"></div>
const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(<BrowserRouter><App /></BrowserRouter>);

export default App;