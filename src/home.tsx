import { useState } from "react";
import { Container, positionContainer } from "./components/container";
import { Cover } from "./components/cover";
import { Content } from "./components/content";
import { experience } from "./datas/experience";

import RosaDurante from "./components/rosadurante";

export function Home() {
    const [activeContainer, setActiveContainer] = useState<positionContainer | null>(null);

    return (
        <div className="h-screen bg-[repeating-linear-gradient(135deg,white_0px,white_50px,black_50px,black_100px)] bg-repeat p-6">
            <div className="w-full h-full md:max-w-screen-xl mx-auto animate-fadeInScale">
                <div className="relative h-full w-full flex flex-col items-center justify-center">
                    <Container position="top" activeContainer={activeContainer} setActiveContainer={setActiveContainer} >
                        <Cover bgImage="cadiz.jpg" bgColor="bg-green" position="top" activeContainer={activeContainer} heading={<><p>CÁDIZ</p> (1987 - 2010)</>} />
                        <Content activeContainer={activeContainer} position="top" key="cadiz" title="CÁDIZ" data={experience.cadiz} />
                    </Container>
                    <Container position="right" activeContainer={activeContainer} setActiveContainer={setActiveContainer}>
                        <Cover bgImage="sevilla.jpg" bgColor="bg-orange" position="right" activeContainer={activeContainer} heading={<><p>SEVILLA</p> (2010 - 2012)</>} />
                        <Content activeContainer={activeContainer} position="right" key="sevilla" title="SEVILLA" data={experience.sevilla} />
                    </Container>
                    <Container position="bottom" activeContainer={activeContainer} setActiveContainer={setActiveContainer}>
                        <Cover bgImage="jerez.jpg" bgColor="bg-yellow" position="bottom" activeContainer={activeContainer} heading={<><p>JEREZ</p> (2017 - HOY)</>}  />
                        <Content activeContainer={activeContainer} position="bottom" key="jerez" title="JEREZ" data={experience.jerez} />
                    </Container>
                    <Container position="left" activeContainer={activeContainer} setActiveContainer={setActiveContainer}>   
                        <Cover bgImage="londres.avif" bgColor="bg-magenta" position="left" activeContainer={activeContainer} heading={<><p>LONDRES</p> (2012 - 2017)</>} />
                        <Content activeContainer={activeContainer} position="left" key="londres" title="LONDRES" data={experience.londres} />
                    </Container>
                    <Container position="center" activeContainer={activeContainer} setActiveContainer={setActiveContainer}>
                        <Cover bgImage="profile.jpeg" bgColor="bg-turquoise" position="center" activeContainer={activeContainer} heading={<><p>ROSA</p> <p>DURANTE</p></>} />
                        <RosaDurante activeContainer={activeContainer} position="center" />
                    </Container>
                </div>
            </div>  
        </div>
    );
}