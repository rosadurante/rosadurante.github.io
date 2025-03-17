import { useState } from "react";
import { Collapsible } from "../collapsible";
import { positionContainer } from "../container";
import { cn } from "../utils";
import { Pencil, Star } from "lucide-react";

type Props = {
    readonly activeContainer: positionContainer | null;
    readonly position: positionContainer;
}

export default function Cadiz({ activeContainer, position }: Props) {
    return (
        <div className={cn("absolute top-0 left-0 w-full h-full inset-0 flex flex-col delay-100 duration-500 opacity-0 mix-blend-normal py-8 space-y-8", activeContainer === position && "opacity-100 z-20")}   >
            <div className="text-white text-4xl font-bold font-heading sticky top-0 left-0 w-full z-30 flex items-center justify-center"><h1>CADIZ</h1></div>
            <div className="flex-1 px-8 overflow-auto space-y-2">
                <div className="p-4 bg-black/50 text-white text-left flex flex-row gap-x-4 justify-start items-center">
                    <Pencil className="h-8 w-8 flex-shrink-0" />
                    <div className="flex flex-row gap-x-2 flex-wrap">
                    <span className="text-md font-bold">Responsabilidad</span>
                    <span className="text-md font-bold">Esfuerzo</span>
                    <span className="text-md font-bold">Pragmatismo</span>
                    <span className="text-md font-bold">Conocimientos</span>
                    <span className="text-md font-bold">Compromiso</span>
                    <span className="text-md font-bold">Aprendizaje</span>
                    <span className="text-md font-bold">Adaptación</span>
                    </div>
                </div>

                <Collapsible 
                    icon={<Star className="h-8 w-8 flex-shrink-0" />}
                    title={<p>Titulada en Ingeniería Técnica en Informática de Sistemas por la Universidad de Cádiz (2005-2010)</p>}
                    description={<><p>Desde pequeña he destacado en matemáticas y resolución de problemas y encontré en la informática una pasión por la programación.</p>
                    <p>
                        Aunque sabía que no iba a ser un camino fácil, la pasión que surgió al probar la programación en el instituto me llevó a elegir este camino.
                        Durante esos años adquirí con mucho esfuerzo toda la base de mis conocimientos en programación e informática los cuales han ido forjándose, evolucionando y mejorando con mi carrera profesional.</p></>} 
                    index={0}
                    showMore={0} />
            </div>
        </div>
    );
}