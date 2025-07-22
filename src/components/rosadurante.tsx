import { Github, Linkedin, Mail, Phone, Sparkles, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { positionContainer } from "./container";
import { cn } from "../utils";
import { useContext, useEffect } from "react";
import { LanguageContext } from "../app";

type Props = {
    readonly activeContainer: positionContainer | null;
    readonly position: positionContainer;
}

export default function RosaDurante({ activeContainer, position }: Props) {
    const { lang, setLang } = useContext(LanguageContext);

    const toggleLanguage = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.stopPropagation();
        setLang(lang === 'es' ? 'en' : 'es');
    }

    useEffect(() => {
        console.log(lang);
    }, [lang]);

    return (
        <div className={cn("absolute top-0 left-0 w-full h-full inset-0 flex flex-col delay-100 duration-500 opacity-0 mix-blend-normal py-8 space-y-8", activeContainer === position && "opacity-100 z-20")}   >
            <div className="text-white text-2xl md:text-4xl font-bold font-heading sticky top-0 left-0 w-full z-30 flex items-center justify-center"><h1>ROSA MARIA DURANTE LERATE</h1></div>
            <div className="flex-1 px-8 overflow-auto">
                <div className="p-4 bg-black/50 text-white text-left flex flex-row gap-x-4 justify-start items-start">
                    <Star className="h-8 w-8 flex-shrink-0" />
                    <div className="flex flex-col gap-y-2">
                        {lang === 'es' ? <p><b>Localidad actual:</b> Jerez de la Frontera, Cádiz, España</p> : <p><b>Current location:</b> Jerez de la Frontera, Cádiz, Spain</p>}
                        {lang === 'es' ? <p><b>Fecha y lugar de nacimiento:</b> 20 de diciembre de 1987, Cádiz, España</p> : <p><b>Date and place of birth:</b> 20th December 1987, Cádiz, Spain</p>}
                        {/* <p><b>Contacto:</b> <a className="underline italic text-turquoise" href="mailto:me@rosadurante.com">me@rosadurante.com</a> / <a className="underline italic text-turquoise" href="tel:+34654344743">+34 654 344 743</a></p> */}
                    <div className="flex flex-row gap-x-4 my-2 flex-wrap">
                        <a href="mailto:me@rosadurante.com" target="_blank" className="underline italic fl§ex my-2 border-0 rounded-full p-4 shadow-icon hover:shadow-icon-hover transition-all duration-500 text-turquoise hover:text-white" onClick={(e) => e.stopPropagation()}><Mail className="h-8 w-8 flex-shrink-0" /></a>
                        <a href="tel:+34654344743" target="_blank" className="underline italic flex my-2 border-0 rounded-full p-4 shadow-icon hover:shadow-icon-hover transition-all duration-500 text-turquoise hover:text-white" onClick={(e) => e.stopPropagation()}><Phone className="h-8 w-8 flex-shrink-0" /></a>
                        <a href="https://www.linkedin.com/in/rdurantelerate/" target="_blank" className="underline italic flex my-2 border-0 rounded-full p-4 shadow-icon hover:shadow-icon-hover transition-all duration-500 text-turquoise hover:text-white" onClick={(e) => e.stopPropagation()}><Linkedin className="h-8 w-8 flex-shrink-0" /></a>
                        <a href="https://github.com/rosadurante" target="_blank" className="underline italic flex my-2 border-0 rounded-full p-4 shadow-icon hover:shadow-icon-hover transition-all duration-500 text-turquoise hover:text-white" onClick={(e) => e.stopPropagation()}><Github className="h-8 w-8 flex-shrink-0" /></a>
                        <a href="#" target="_self" className="flex flex-shrink-0 border-0 rounded-full my-2 p-4 shadow-icon hover:shadow-icon-hover transition-all duration-500 text-turquoise hover:text-white" onClick={toggleLanguage}><p className="h-8 w-8 text-xl">{lang === 'es' ? 'EN' : 'ES'}</p></a>
                    </div>
                    </div>
                </div>

                <div className="p-4 bg-black/50 text-white text-left flex flex-row gap-x-4 justify-start items-center mt-2">
                    <Sparkles className="h-8 w-8 flex-shrink-0" />
                    <div>
                        <Link to="?cv=true" className="underline italic text-turquoise">
                            {lang === 'es' ? "Curriculum Vitae (versión para impresión)" : "Curriculum Vitae (print version)"}
                        </Link>
                    </div>
                </div>

                {lang === 'es' ? (
                <div className="p-8 text-white text-left space-y-2">
                    <p>Me considero una persona curiosa, inquieta y con muchas ganas de aprender. Me gusta afrontar pequeños retos e ir superándome cada día.</p>
                    <p>El deporte es esencial en mi vida, practico Crossfit desde hace 2 años y hace poco me introduje en el mundo del baile latino.</p>
                    <p>Últimamente estoy consumiendo muchos posdcast de interes, especialmente dentro del ámbito de la neurociencia y la psicología.</p>
                    <p>Las dos mayores prioridades en mi vida son mi salud y mi familia.</p>
                    <p>Me gusta viajar y conocer nuevos lugares. Soy mucho más de naturaleza y pueblos que de grandes ciudades.</p>
                </div>
                ) : (
                    <div className="p-8 text-white text-left space-y-2">
                        <p>I consider myself a curious, restless and very motivated person. I like to face small challenges and overcome them every day.</p>
                        <p>The sport is essential in my life, I practice Crossfit for 2 years and recently I got into the latin dance world.</p>
                        <p>Lately I'm consuming many podcasts of interest, especially in the field of neuroscience and psychology.</p>
                        <p>The two biggest priorities in my life are my health and my family.</p>
                        <p>I like to travel and discover new places. I'm more of a nature and small towns person than big cities.</p>
                    </div>
                )}
            </div>
        </div>
    );
}