import { Pencil, Star } from "lucide-react";
import { positionContainer } from "../container";
import { cn } from "../utils";
import { Collapsible } from "../collapsible";

type Props = {
    readonly activeContainer: positionContainer | null;
    readonly position: positionContainer;
}

export default function Sevilla({ activeContainer, position }: Props) {
    
    return (
        <div className={cn("absolute top-0 left-0 w-full h-full inset-0 flex flex-col delay-100 duration-500 opacity-0 mix-blend-normal py-8 space-y-8", activeContainer === position && "opacity-100 z-20")}   >
            <div className="text-white text-2xl md:text-4xl font-bold font-heading sticky top-0 left-0 w-full z-30 flex items-center justify-center"><h1>SEVILLA</h1></div>
            <div className="flex-1 px-8 overflow-auto space-y-2">

                <div className="p-4 bg-black/50 text-white text-left flex flex-row gap-x-4 justify-start items-center">
                    <Pencil className="h-8 w-8 flex-shrink-0" />
                    <div className="flex flex-row gap-x-2 flex-wrap">
                    <p>En esta etapa he adquirido los siguientes conocimientos:</p>
                    <span className="text-md font-bold">Test unitarios</span>
                    <span className="text-md font-bold">Test de integración</span>
                    <span className="text-md font-bold">Test e2e</span>
                    <span className="text-md font-bold">Historias de usuario</span>
                    <span className="text-md font-bold">Sistema de gestión de tareas</span>
                    <span className="text-md font-bold">Sistema de gestión de versiones</span>
                    <span className="text-md font-bold">Metodología ágil</span>
                    <span className="text-md font-bold">SCRUM</span>
                    <span className="text-md font-bold">JUnit</span>
                    <span className="text-md font-bold">Selenium</span>
                    <span className="text-md font-bold">Jasmine</span>
                    </div>
                </div>

                <Collapsible
                    icon={<Star className="h-8 w-8 flex-shrink-0" />}
                    title={<p>Técnica de calidad en la empresa de desarrollo de software, Yaco Sistemas en Sevilla (2010 - 2011)</p>}
                    description={<><p>Trabajé en el departamento de calidad de la empresa, realizando pruebas de software manuales, automatizadas y documentación de procesos.</p>
                        <p>Fue aquí donde apliqué los conocimientos adquiridos en el desarrollo del proyecto final de carrera  
                        sobre calidad de software, metodologías ágiles -ya que seguíamos SCRUM-, gestión de proyectos y tareas y, sobre todo, pruebas de software con Selenium IDE y Jasmine.
                        </p></>}
                    showMore={0} index={0} />
            </div>
        </div>
    );
}