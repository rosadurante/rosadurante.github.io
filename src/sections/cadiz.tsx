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
            <h1 className="text-white text-4xl font-bold font-heading sticky top-0 left-0 w-full z-30">CÁDIZ</h1>
            <div className="flex-1 px-8 overflow-auto space-y-2">
                <div className="p-4 bg-black/50 text-white text-left flex flex-row gap-x-4 justify-start items-center">
                    <Star className="h-8 w-8 flex-shrink-0" />
                    <div>
                        <p>Titulada en Ingeniería Técnica en Informática de Sistemas por la Universidad de Cádiz (2005-2010)</p>
                        <p>Desde pequeña he destacado en matemáticas y resolución de problemas y encontré en la informática una pasión por la programación.</p>
                    </div>
                </div>

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
                    <span className="text-md font-bold">Diversión</span>
                    </div>
                </div>

                <div className="p-4 text-white text-left space-y-2">
                    <p>
                        Nací en la ciudad de Cádiz donde viví una infancia tranquila y sin demasiadas preocupaciones.
                        Durante toda mi época escolar he sido una estudiante trabajadora, responsable y práctica.
                        Desde temprana edad mis educadores vieron que destacaba por mis aptitudes matemáticas y resolución de problemas.
                        Compaginaba mis estudios con el deporte, construyendo así un pilar imprescindible en mi vida.
                    </p>
                    <p>
                        En 2005, una vez terminada selectividad con una calificación en matemáticas de 9.75, decidí estudiar ingeniería informática.
                        Aunque sabía que no iba a ser un camino fácil, la pasión que surgió al probar la programación en el instituto me llevó a elegir este camino.
                        Durante esos años adquirí con mucho esfuerzo toda la base de mis conocimientos en programación e informática los cuales han ido forjándose, evolucionando y mejorando con mi carrera profesional.
                    </p>
                    <p>
                        En 2010 y tras superar todas las asignaturas de la titulación me llegó una oferta de una vacante en una empresa de desarrollo de software en Sevilla, a la cual apliqué y conseguí.
                        Desde entonces, estuve compaginando el trabajo con la realización del proyecto final de carrera para obtener la titulación completa. Fueron meses de mucha dedicación y esfuerzo.
                        Basé mi proyecto final en un sistema de gestión de metadatas de ficheros multimedia donde, centraba especialmente, las metodologías aplicadas al desarrollo de dicho software.
                        Hice incapié en realizar y documentar una metodología ágil, con enfoque TDD, evolutivo, con un sistema de gestión de tareas y utilizando sistema de gestión de versiones.
                        Este projecto fue entregado y presentado en el mes de octubre de 2010 y tuvo una calificación de Notable.
                    </p>
                </div>
            </div>
        </div>
    );
}