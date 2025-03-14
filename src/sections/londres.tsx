import { Pencil } from "lucide-react";
import { Star } from "lucide-react";
import { positionContainer } from "../container";
import { cn } from "../utils";

type Props = {
    readonly activeContainer: positionContainer | null;
    readonly position: positionContainer;
}

export default function Londres({ activeContainer, position }: Props) {
    return (
        <div className={cn("absolute top-0 left-0 w-full h-full inset-0 flex flex-col delay-100 duration-500 opacity-0 mix-blend-normal py-8 space-y-8", activeContainer === position && "opacity-100 z-20")}   >
            <h1 className="text-white text-4xl font-bold font-heading sticky top-0 left-0 w-full z-30">LONDRES</h1>
            <div className="flex-1 px-8 overflow-auto space-y-2">
                <div className="p-4 bg-black/50 text-white text-left flex flex-row gap-x-4 justify-start items-center">
                    <Star className="h-8 w-8 flex-shrink-0" />
                    <div>
                        <p>Desarrolladora Frontend en <a href="https://www.hogarth.com/" target="_blank" className="italic underline text-magenta">Hogarth Worldwide Ltd</a> (Mar 2012 - Nov 2013)</p>
                        <p>Primera experiencia laboral como frontend developer en una multinacional en el centro de Londres desarrollando un proyecto interno de gestión de campañas de marketing.</p>
                    </div>
                </div>
                <div className="p-4 bg-black/50 text-white text-left flex flex-row gap-x-4 justify-start items-center">
                    <Star className="h-8 w-8 flex-shrink-0" />
                    <div>
                    <p>Desarrolladora Frontend en <a href="https://www.crunchbase.com/organization/yourvine/" target="_blank" className="italic underline text-magenta">Yourvine Ltd</a> (Nov 2013 - Jul 2014)</p>
                    <p>Primera experiencia en una startup enfocada a la gestión de tickets de festivales de música donde mejoré exponencialmente mis conocimientos de AngularJS. </p>
                    </div>
                </div>
                <div className="p-4 bg-black/50 text-white text-left flex flex-row gap-x-4 justify-start items-center">
                    <Star className="h-8 w-8 flex-shrink-0" />
                    <div>
                    <p>Desarrolladora Fronend & Apple en <a href="https://www.bynd.com/" target="_blank" className="italic underline text-magenta">Beyond Ltd</a> (Jul 2014 - Dic 2014)</p>
                    <p>Además de seguir con mi rol de frontend también me asignaron proyectos cortos de creación de anuncios y juegos en JS para la plataforma de Apple.</p>
                    </div>
                </div>
                <div className="p-4 bg-black/50 text-white text-left flex flex-row gap-x-4 justify-start items-center">
                    <Star className="h-8 w-8 flex-shrink-0" />
                    <div>
                    <p>Desarrolladora Frontend en <a href="https://p.ota.to/" target="_blank" className="italic underline text-magenta">Potato Ltd</a> (Ene 2015 - Mar 2017)</p>
                        <p>Trabajé como freelance en proyectos tanto clasificados como públicos de Google además de ser la principal frontend del proyecto
                            <a href="https://www.ttint.com/" target="_blank" className="italic underline text-magenta"> TT International</a>. </p>
                    </div>
                </div>

                <div className="p-4 bg-black/50 text-white text-left flex flex-row gap-x-4 justify-start items-center">
                    <Pencil className="h-8 w-8 flex-shrink-0" />
                    <div className="flex flex-row gap-x-2 flex-wrap">
                    <span className="text-md font-bold">AngularJS</span>
                    <span className="text-md font-bold">JQuery</span>
                    <span className="text-md font-bold">BackboneJS</span>
                    <span className="text-md font-bold">RequireJS</span>
                    <span className="text-md font-bold">SASS</span>
                    <span className="text-md font-bold">LESS</span>
                    <span className="text-md font-bold">Bootstrap</span>
                    <span className="text-md font-bold">Grunt/Gulp</span>
                    <span className="text-md font-bold">Git</span>
                    <span className="text-md font-bold">Python/Django</span>
                    <span className="text-md font-bold">ORM</span>
                    <span className="text-md font-bold">Postgres</span>
                </div>
            </div>

            <div className="p-4 text-white text-left space-y-2">
                <p>
                    Londres fue la etapa donde me formé laboralmente y donde construí toda mi carrera profesional como desarrolladora frontend. Siempre soñé con vivir una temporada allí y la vida
                    me dio la oportunidad en el mejor momento. Aquí pasé cinco años desafiantes y enriquecedores, trabajando en diferentes empresas y proyectos que moldearon mi identidad profesional:
                </p>
                <ul className="list-disc list-inside space-y-2">
                    <li>
                        <b>Hogarth Worldwide Ltd</b> Estando en Hogarth trabajé en su applicación web interna de gestión de campañas de marketing. Consistía en una zona de gestión
                        (usuarios, clientes, permisos, proyectos publicitarios con sus distintos descripciones, estados, etc.) que seguía un flujo de trabajo bastante complejo desde
                        la creación del proyecto de la campaña de márketing (con su brainstorming) hasta que se llega a una confirmación tangible, pasando por distintos grupos de
                        personas en cada parte del proceso (equipo de diseño, de comunicación, de traducción, direcciíon, resolución de erratas etc) donde la parte más sensible de la
                        aplicación web exclusivamente realizada en el frontend donde se mostraban los archivos multimedia en los cuales se realizaban comentarios y ediciones sobre
                        fotos y vídeos de las campañas on line. Todo ello estaba desarrollado utilizando BackboneJS, JQuery, y RequireJS, y se utilizaba Bootstrap para agilizar
                        el desarrollo del diseño.    
                    </li>
                    <li>
                        <b>Yourvine Ltd</b> fue una start-up donde desarrollábamos una plataforma para la venta de entradas de festivales. La aplicación estaba escrita en AngujarJS
                        con backend en Python/Django siguiendo un fuerte paradigma basado en objetos y utilizando patrones orientados en servicios. Estuve trabajando en un equipo
                        muy pequeño con metodologías ágiles por lo que mejoré exponencialmente en mis conocimientos de frontend. Como éramos pocos en el equipo al ser una start up
                        aproveché para investigar y mejorar mi conocimiento en backend con Python/Django.    
                    </li>
                    <li>
                        <b>Beyond Ltd</b> fue una empresa que se encargaba de crear anuncios y juegos para la plataforma de Apple. Estuve trabajando en un equipo de 3 personas
                        donde yo era la única frontend.
                        El tiempo que estuve trabajando en Byond fuí parte del equipo de publicidad en iAds donde desarrollaba pequeñas aplicaciones / juegos / mini web comerciales
                        en forma de anuncios para las plataformas de Apple. Todos se desarrollaban en HTML/CSS/JS utilizando múltiples tipos de animaciones, incluso Canvas en
                        javascript para los diversos juegos que desarrollé.    
                    </li>
                    <li>
                        <b>Potato Ltd</b> En Potato estuve trabajando en diferentes tipos de proyectos: desde unos con una gran arquitectura de backend para la gestión de datos y eventos
                        asíncronos añadiendo una arquitetucta en fronted de una única página (one single webpage) gestionando las actualiaciones en el momento. Otros proyectos más
                        comerciales estuvieron más enfocados en el diseño y experiencia de usuario buscando la originalidad en estilos, transiciones y animaciones. Un ejemplo de
                        proyecto donde participé en estos años como freelance fue <a href="https://www.ttint.com/" target="_blank" className="italic underline text-magenta">TT International</a>    
                        </li>
                    </ul>
                    <p>
                        Durante finales de 2016 y principios de 2017 hubo varios cambios en mi vida personal y familiar que hicieron que tomase la decisión de volver a España. Fue también en
                        este tiempo cuando tome la decisión de abandonar el mundo laboral tempralmente para dedicarme a mi familia y proyectos personales.
                    </p>
                </div>
            </div>
        </div>
    );
}