import { BookOpen, Pencil, User } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { experience, Job } from "./datas/experience";
import { useContext } from "react";
import { LanguageContext } from "./app";

export function CurriculumVitae() {
    const keys = Object.keys(experience);
    const carreer = keys.map(key => experience[key].jobs.find(obj => obj.key === 'studies')).filter(Boolean);
    const experiences = keys.map(key => experience[key].jobs.filter(obj => obj.key !== 'studies')).flatMap(obj => obj).reverse() as Job[];

    const { lang } = useContext(LanguageContext);

    return (
        <div className="max-w-screen-lg mx-auto h-full overflow-y-auto">
            <div className="m-20 space-y-6">
                <div className="flex flex-col gap-y-2 font-heading">
                    <h1 className="text-2xl font-bold border-b-1 border-black pb-2 uppercase">Rosa Maria Durante Lerate</h1>
                    <div className="flex flex-row gap-x-4 justify-end text-md">
                        <a href="mailto:me@rosadurante.com" className="underline">me@rosadurante.com</a>
                        <a href="tel:+34654344743" className="underline">+34 654 344 743</a>
                    </div>
                </div>
                <div className="flex flex-col gap-y-2">
                    <h2 className="text-xl font-heading font-bold pb-2 uppercase w-2/3">
                        <BookOpen className="w-5 h-5 inline-block mr-2" />
                        {lang === 'es' ? <span>Formación</span> : <span>Studies</span>}
                    </h2>
                    {carreer.map(study => (
                        <div key={study?.key} className="flex flex-row gap-y-2">
                            <h5 className="w-1/8 text-md italic text-right mr-6"><p>{study?.title.start[lang]}</p><p>{study?.title.end[lang]}</p></h5>
                            <div className="flex flex-col gap-y-2 w-7/8">
                                <h3 className="text-md font-bold"><b>{study?.title.position[lang]}{' '}</b>{study?.title.url ? <a href={study?.title.url} className="underline">{study?.title.where[lang]}</a> : study?.title.where[lang]}</h3>
                                <div className="text-sm"><ReactMarkdown>{study?.description[lang] as string}</ReactMarkdown></div>
                            </div>
                        </div>
                           
                    ))}
                </div>
                <div className="flex flex-col gap-y-2">
                    <h2 className="text-xl font-heading font-bold pb-2 uppercase w-2/3">
                        <Pencil className="w-5 h-5 inline-block mr-2" />
                        {lang === 'es' ? <span>Experiencia</span> : <span>Experience</span>}
                    </h2>
                    <div className="space-y-4">
                    {experiences.slice(0, 4).map(experience => (
                        <div key={experience?.key} className="flex flex-row break-inside-avoid">
                            <h5 className="w-1/8 text-md italic text-right mr-6"><p>{experience.title.start[lang]}</p><p>{experience.title.end[lang]}</p></h5>
                            <div className="flex flex-col gap-y-2 w-7/8">
                                <h3 className="text-md font-bold"><b>{experience.title.position[lang]}{' '}</b>{experience.title.url ? <a href={experience.title.url} className="underline">{experience.title.where[lang]}</a> : experience.title.where[lang]}</h3>
                                <p className="text-sm italic">{experience.skills[lang]}</p>
                                <div className="text-sm"><ReactMarkdown>{experience.description[lang] as string}</ReactMarkdown></div>
                            </div>
                        </div>
                    ))}
                    </div>
                    <div className="space-y-4 print:py-10">
                    {experiences.slice(4).map(experience => (
                        <div key={experience?.key} className="flex flex-row break-inside-avoid">
                            <h5 className="w-1/8 text-md italic text-right mr-6"><p>{experience.title.start[lang]}</p><p>{experience.title.end[lang]}</p></h5>
                            <div className="flex flex-col gap-y-2 w-7/8">
                                <h3 className="text-md font-bold"><b>{experience.title.position[lang]}{' '}</b>{experience.title.url ? <a href={experience.title.url} className="underline">{experience.title.where[lang]}</a> : experience.title.where[lang]}</h3>
                                <p className="text-sm italic">{experience.skills[lang]}</p>
                                <div className="text-sm"><ReactMarkdown>{experience.description[lang] as string}</ReactMarkdown></div>
                            </div>
                        </div>
                    ))}
                        </div>
                </div>
                <div className="flex flex-col gap-y-2 print:break-before-page print:py-10">
                    <h2 className="text-xl font-heading font-bold pb-2 uppercase w-2/3">
                        <User className="w-5 h-5 inline-block mr-2" />
                        {lang === 'es' ? <span>Sobre mí</span> : <span>About me</span>}
                    </h2>
                    <div className="text-sm space-y-2">
                        {lang === 'es' ? (
                            <><p>Me considero una persona curiosa, inquieta y con muchas ganas de aprender. Me gusta afrontar pequeños retos e ir superándome cada día.
                    El deporte es esencial en mi vida, practico Crossfit desde hace 2 años y hace poco me introduje en el mundo del baile latino.
                    Últimamente estoy consumiendo muchos posdcast de interes, especialmente dentro del ámbito de la neurociencia y la psicología.
                            Las dos mayores prioridades en mi vida son mi salud y mi familia.</p>
                            
                        <p>Para ver más sobre mi, puedes visitar mi <a href="https://rosadurante.github.io" className="underline">página web</a>.</p>
                        </>
                        ) : (
                            <><p>I consider myself a curious, restless and very eager to learn person. I like to face small challenges and overcome myself every day.
                            The sport is essential in my life, I practice Crossfit for 2 years and recently I got into the world of Latin dance.
                            Lately I'm consuming many podcasts of interest, especially in the field of neuroscience and psychology.
                            The two biggest priorities in my life are my health and my family.</p>
                            <p>To see more about me, you can visit my <a href="https://rosadurante.github.io" className="underline">website</a>.</p>
                            </>
                        )}
                </div>
                </div>
            </div>
        </div>
    )
}