import { Pencil, Star } from "lucide-react";
import { positionContainer } from "../container";
import { cn } from "../utils";

type Props = {
    readonly activeContainer: positionContainer | null;
    readonly position: positionContainer;
}

export default function Sevilla({ activeContainer, position }: Props) {
    return (
        <div className={cn("absolute top-0 left-0 w-full h-full inset-0 flex flex-col delay-100 duration-500 opacity-0 mix-blend-normal py-8 space-y-8", activeContainer === position && "opacity-100 z-20")}   >
            <h1 className="text-white text-4xl font-bold font-heading sticky top-0 left-0 w-full z-30">SEVILLA</h1>
            <div className="flex-1 px-16 overflow-auto space-y-2">
                <div className="p-4 bg-black/50 text-white text-left flex flex-row gap-x-4 justify-start items-center">
                    <Star className="h-8 w-8 flex-shrink-0" />
                    <div>
                    <p>Técnica de calidad en la empresa de desarrollo de software, Yaco Sistemas en Sevilla (2010 - 2011)</p>
                    <p>Trabajé en el departamento de calidad de la empresa, realizando pruebas de software manuales, automatizadas y documentación de procesos.</p>
                    </div>
                </div>

                <div className="p-4 bg-black/50 text-white text-left flex flex-row gap-x-4 justify-start items-center">
                    <Pencil className="h-8 w-8 flex-shrink-0" />
                    <div className="flex flex-row gap-x-2 flex-wrap">
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

                <div className="p-4 text-white text-left space-y-2">
                    <p>
                        En 2010 me contrataron en la empresa Yaco Sistemas en Sevilla como técnica de pruebas dentro del departamento de calidad. Ahí aprendí 
                        sobre calidad de software, metodologías ágiles ya que seguíamos SCRUM, gestión de proyectos y tareas y, sobre todo, pruebas de software y documentación.
                        Fue mi primer contacto laboral con herramientas como Selenium, Jasmine.
                    </p>
                    <p>
                        A medida que pasaba el tiempo, me fui desempeñando cada vez mejor en mi puesto y, poco a poco, fui adquiriendo más responsabilidades. Ya no solo me limitaba a realizar
                        pruebas de software, sino que también participaba en la planificación de nuevas pruebas y en la mejora de los procesos de calidad. Además, comencé a hacer trabajos de 
                        desarrollo de frontend con tecnologías como HTML, CSS y JavaScript / JQuery y, posteriormente, con tecnologías de backend con Python/Django. Fue aquí donde decidí
                        dar un pequeño giro a mi carrera profesional especializándome en el desarrollo frontend.
                    </p>
                    <p>
                        En 2011, por baja nivel de trabajo, tuvieron que prescindir de mis servicios y no llegaron a renovar el contrato. Tomé esta decisión como una oportunidad para
                        mejorar en herramientas y tecnologías frontend y, junto con unos compañeros de Universidad, decidimos formar un proyecto de empresa de desarrollo de aplicaciones web/móvil
                        llamado Zocolab. Presentamos un plan empresarial y nos ofrecieron <a href="https://www.diariodecadiz.es/noticias-provincia-cadiz/Ingenios_0_518048818.html" target="_blank" className="italic underline">particiar
                        en un programa de incubadora de empresas de la Junta de Andalucía (CADE)</a>. Durante estos 6 meses nos formamos en aspectos más de negocio que tecnológicos (marketing, ventas, contabilidad, etc)
                        y, una vez finalizado el programa decidimos que no era el momento personal de cada uno para emprender y, por lo tanto, no seguimos con el proyecto.
                    </p>
                </div>
            </div>
        </div>
    );
}