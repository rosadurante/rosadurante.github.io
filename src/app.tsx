import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Container, positionContainer } from "./container";
import { cn } from "./utils";
import { Cover } from "./cover";
import Cadiz from "./sections/cadiz";
import Sevilla from "./sections/sevilla";

function App() {
    const [activeContainer, setActiveContainer] = useState<positionContainer | null>(null);

    return (
        <div className="h-screen bg-[repeating-linear-gradient(135deg,white_0px,white_50px,black_50px,black_100px)] bg-repeat p-6">
            <div className="w-full h-full md:max-w-screen-xl mx-auto animate-fadeInScale">
                <div className="relative h-full w-full flex flex-col items-center justify-center">
                    <Container position="top" activeContainer={activeContainer} setActiveContainer={setActiveContainer} >
                        <Cover bgImage="cadiz.jpg" bgColor="bg-green" position="top" activeContainer={activeContainer} heading={<><p>CÁDIZ</p> (1987 - 2010)</>} />
                        {/* <Cadiz activeContainer={activeContainer} position="top" /> */}
                    </Container>
                    <Container position="right" activeContainer={activeContainer} setActiveContainer={setActiveContainer}>
                        <Cover bgImage="sevilla.jpg" bgColor="bg-orange" position="right" activeContainer={activeContainer} heading={<><p>SEVILLA</p> (2010 - 2012)</>} />
                        {/* <Sevilla activeContainer={activeContainer} position="right" /> */}
                    </Container>
                    <Container position="bottom" activeContainer={activeContainer} setActiveContainer={setActiveContainer}>
                        <Cover bgImage="jerez.jpg" bgColor="bg-yellow" position="bottom" activeContainer={activeContainer} heading={<><p>JEREZ</p> (2017 - HOY)</>}  />
                    </Container>
                    <Container position="left" activeContainer={activeContainer} setActiveContainer={setActiveContainer}>   
                        <Cover bgImage="londres.avif" bgColor="bg-magenta" position="left" activeContainer={activeContainer} heading={<><p>LONDRES</p> (2012 - 2017)</>} />
                    </Container>
                    <Container position="center" activeContainer={activeContainer} setActiveContainer={setActiveContainer}>
                        <Cover bgImage="profile.jpeg" bgColor="bg-turquoise" position="center" activeContainer={activeContainer} heading={<><p>ROSA</p> <p>DURANTE</p></>} />
                    </Container>
                </div>
            </div>  
        </div>
    );
}

// Mount the App into <div id="app"></div>
const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(<App />);

export default App;