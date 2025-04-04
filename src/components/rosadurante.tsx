import { Github, Linkedin, Mail, Phone, Sparkles, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { positionContainer } from "./container";
import { cn } from "../utils";
import { useMemo } from "react";

type Props = {
    readonly activeContainer: positionContainer | null;
    readonly position: positionContainer;
}

export default function RosaDurante({ activeContainer, position }: Props) {
    const lang = useMemo(() => localStorage.getItem("lang") ?? navigator.language.split("-")[0], [localStorage.getItem("lang")]);

    const toggleLanguage = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.stopPropagation();
        localStorage.setItem("lang", lang === 'es' ? 'en' : 'es');
        window.location.reload();
    }

    return (
        <div className={cn("absolute top-0 left-0 w-full h-full inset-0 flex flex-col delay-100 duration-500 opacity-0 mix-blend-normal py-8 space-y-8", activeContainer === position && "opacity-100 z-20")}   >
            <div className="text-white text-2xl md:text-4xl font-bold font-heading sticky top-0 left-0 w-full z-30 flex items-center justify-center"><h1>ROSA MARIA DURANTE LERATE</h1></div>
            <div className="flex-1 px-8 overflow-auto">
                <div className="p-4 bg-black/50 text-white text-left flex flex-row gap-x-4 justify-start items-start">
                    <Star className="h-8 w-8 flex-shrink-0" />
                    <div>
                        {lang === 'es' ? <p><b>Localidad actual:</b> Jerez de la Frontera, Cádiz, España</p> : <p><b>Current location:</b> Jerez de la Frontera, Cádiz, Spain</p>}
                        {lang === 'es' ? <p><b>Fecha y lugar de nacimiento:</b> 20 de diciembre de 1987, Cádiz, España</p> : <p><b>Date and place of birth:</b> 20th December 1987, Cádiz, Spain</p>}
                        {/* <p><b>Contacto:</b> <a className="underline italic text-turquoise" href="mailto:me@rosadurante.com">me@rosadurante.com</a> / <a className="underline italic text-turquoise" href="tel:+34654344743">+34 654 344 743</a></p> */}
                    <div className="flex flex-row gap-x-4 my-5">
                        <a href="mailto:me@rosadurante.com" target="_blank" className="underline italic flex border-0 rounded-full p-4 shadow-icon hover:shadow-icon-hover transition-all duration-500 text-turquoise hover:text-white" onClick={(e) => e.stopPropagation()}><Mail className="h-8 w-8 flex-shrink-0" /></a>
                        <a href="tel:+34654344743" target="_blank" className="underline italic flex border-0 rounded-full p-4 shadow-icon hover:shadow-icon-hover transition-all duration-500 text-turquoise hover:text-white" onClick={(e) => e.stopPropagation()}><Phone className="h-8 w-8 flex-shrink-0" /></a>
                        <a href="https://www.linkedin.com/in/rdurantelerate/" target="_blank" className="underline italic flex border-0 rounded-full p-4 shadow-icon hover:shadow-icon-hover transition-all duration-500 text-turquoise hover:text-white" onClick={(e) => e.stopPropagation()}><Linkedin className="h-8 w-8 flex-shrink-0" /></a>
                        <a href="https://github.com/rosadurante" target="_blank" className="underline italic flex border-0 rounded-full p-4 shadow-icon hover:shadow-icon-hover transition-all duration-500 text-turquoise hover:text-white" onClick={(e) => e.stopPropagation()}><Github className="h-8 w-8 flex-shrink-0" /></a>
                        <a href="#" target="_self" className="flex border-0 rounded-full p-4 shadow-icon hover:shadow-icon-hover transition-all duration-500 text-turquoise hover:text-white" onClick={toggleLanguage}><span className="h-8 w-8 flex-shrink-0 text-xl">{lang === 'es' ? 'EN' : 'ES'}</span></a>
                    </div>
                    </div>
                </div>

                <div className="p-4 bg-black/50 text-white text-left flex flex-row gap-x-4 justify-start items-center mt-2">
                    <Sparkles className="h-8 w-8 flex-shrink-0" />
                    <div>
                        <Link to="?cv=true" className="underline italic text-turquoise">Curriculum Vitae (versión para impresión)</Link>
                    </div>
                </div>

                <div className="p-8 text-white text-left space-y-2">
                    <p>Me considero una persona curiosa, inquieta y con muchas ganas de aprender. Me gusta afrontar pequeños retos e ir superándome cada día.</p>
                    <p>El deporte es esencial en mi vida, practico Crossfit desde hace 2 años y hace poco me introduje en el mundo del baile latino.</p>
                    <p>Últimamente estoy consumiendo muchos posdcast de interes, especialmente dentro del ámbito de la neurociencia y la psicología.</p>
                    <p>Las dos mayores prioridades en mi vida son mi salud y mi familia.</p>
                    <p>Me gusta viajar y conocer nuevos lugares. Soy mucho más de naturaleza y pueblos que de grandes ciudades.</p>
                </div>
            </div>
        </div>
    );
}