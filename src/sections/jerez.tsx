import { ListTodo, Pencil, Sparkles, Star } from "lucide-react";
import { positionContainer } from "../container";
import { cn } from "../utils";
import { useState } from "react";
import { Collapsible } from "../collapsible";

type Props = {
    readonly activeContainer: positionContainer | null;
    readonly position: positionContainer;
}

export default function Jerez({ activeContainer, position }: Props) {
    const [showMore, setShowMore] = useState(0);
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, index: number) => {
        e.stopPropagation();
        setShowMore(showMore === index ? -1 : index);
    }

    return (
        <div className={cn("absolute top-0 left-0 w-full h-full inset-0 flex flex-col delay-100 duration-500 opacity-0 mix-blend-normal py-8 space-y-8", activeContainer === position && "opacity-100 z-20")}>
            <div className="text-white text-2xl md:text-4xl font-bold font-heading sticky top-0 left-0 w-full z-30 flex items-center justify-center"><h1>JEREZ DE LA FRONTERA</h1></div>
            <div className="flex-1 px-8 overflow-auto space-y-2">
                <div className="p-4 bg-black/50 text-white text-left flex flex-row gap-x-4 justify-start items-center">
                    <Pencil className="h-8 w-8 flex-shrink-0" />
                    <div className="flex flex-row gap-x-2 flex-wrap">

                    <p>En esta etapa ha afianzado/adquirido los conocimientos de: </p>
                    <span className="text-md font-bold">ReactJS</span>
                    <span className="text-md font-bold">Redux</span>
                    <span className="text-md font-bold">Axios</span>
                    <span className="text-md font-bold">TailwindCSS</span>
                    <span className="text-md font-bold">MaterialUI</span>
                    <span className="text-md font-bold">ShadCN</span>
                    <span className="text-md font-bold">NextJS</span>
                    <span className="text-md font-bold">Figma</span>
                    <span className="text-md font-bold">Adaptación</span>    
                    <span className="text-md font-bold">Artesanía</span>
                    <span className="text-md font-bold">Creatividad</span>
                    <span className="text-md font-bold">Redes sociales</span>
                    <span className="text-md font-bold">Atención al cliente</span>
                    <span className="text-md font-bold">Organización de eventos</span>
                    </div>
                </div>

                <Collapsible
                    icon={<Sparkles className="h-8 w-8 flex-shrink-0" />}
                    title={<p>Creadora de la marca de ropa infantil <a href="https://www.instagram.com/one_little_lemon/" target="_blank" className="italic underline text-yellow">One Little Lemon</a> (2017 - 2023)</p>}
                    description={<p>Durante este periodo de mi vida decidí emprender y estuve dada de alta como trabajadora autónoma dentro del ámbito de la artesanía y diseño textil. Creadora de marca, diseñadora y artesana, 
                        gestora de redes sociales y con impecable atención al cliente, confeccionaba a mano prendas de ropa para bebés y niñ@s con un estilo único y personalizado, utilizando materias primas de
                        gran calidad sostenible y con certificación de origen orgánico.</p>}
                    showMore={showMore} index={0} handleClick={handleClick} />

                <Collapsible 
                    icon={<Star className="h-8 w-8 flex-shrink-0" />}
                    title={<p>Colaboradora en <a href=" https://www.you-shift.com/" target="_blank" className="italic underline text-yellow">You Shift</a> (Oct 2023 - Abr 2024)</p>}
                    description={<p>Proyecto de empresa que desarrolla una aplicación web enfocado a la resolución de los cambios y rotaciones del personal de los hospitales,
                        contemplando distintas secciones, personal que trabaja en distintas secciones, puntuaciones de los trabajadores, vacaciones, etc. Todo el frontend está
                        desarrollado en ReactJS y MaterialUI.</p>}
                    showMore={showMore} index={1} handleClick={handleClick} />
                
                <Collapsible 
                    icon={<Star className="h-8 w-8 flex-shrink-0" />}
                    title={<p>Desarrolladora Frontend en  <a href="https://theseedsquad.com/" target="_blank" className="italic underline text-yellow">The Seed Squad</a> (Abr 2024 - Dic 2024)</p>}
                    description={<p>En esta agencia estuve desarrollando una nueva y pionera aplicación web dentro el ámbito de las energías renovables, <a href="https://nteaser.com/es" target="_blank" className="italic underline text-yellow">NTeaser</a>,
                        que recoje projectos de energías renovables en oferta en el mercado, para que los inversores puedan encontrar el proyecto que mejor se adapte a sus necesidades e invertir en ellos.
                        Tanto en la aplicación web como en la página comercial fui la desarrolladora principal (con soporte de mi compañero Senior) y está desarrollado en TypeScript, con ReactJS, NodeJS, TailwindCSS.</p>}
                    showMore={showMore} index={3} handleClick={handleClick} />

                <Collapsible
                    icon={<Star className="h-8 w-8 flex-shrink-0" />}
                    title={<p>Desarrolladora Frontend en  <a href="https://tifin.com/" target="_blank" className="italic underline text-yellow">Tifin</a> (Dic 2024 - Actualmente)</p>}
                    description={<p>Tifin Spain es una sede de Tifin, una empresa americana que desarrolla proyectos utilizando Inteligencia Artifical para servicios financieros. Al fusionar The Seed Squad en Tifin,
                        pasé a formar parte de esta empresa como desarrolladora Frontend. En este tiempo he participado en el desarrollo de varios portales web utilizando principalmente ReactJS, TailwindCSS, MaterialUI y ShadCN.</p>}
                    showMore={showMore} index={4} handleClick={handleClick} />

            </div>
        </div>
    );
}