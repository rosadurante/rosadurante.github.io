import { Pencil } from "lucide-react";
import { positionContainer } from "./container";
import { cn } from "../utils";
import { useContext, useState } from "react";
import { Collapsible } from "./collapsible";
import { Experience } from "../datas/experience";
import { LanguageContext } from "../app";

type Props = {
    readonly activeContainer: positionContainer | null;
    readonly position: positionContainer;
    readonly key: string;
    readonly title: string;
    readonly data: Experience;
}

export function Content({ activeContainer, position, key, title, data }: Props) {
    const [showMore, setShowMore] = useState(0);
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, index: number) => {
        e.stopPropagation();
        setShowMore(showMore === index ? -1 : index);
    }

    const { lang } = useContext(LanguageContext);

    return (
        <div className={cn("absolute top-0 left-0 w-full h-full inset-0 flex flex-col delay-100 duration-500 opacity-0 mix-blend-normal py-8 space-y-8", activeContainer === position && "opacity-100 z-20")}>
            <div className="text-white text-2xl md:text-4xl font-bold font-heading sticky top-0 left-0 w-full z-30 flex items-center justify-center uppercase"><h1>{title}</h1></div>
            <div className="flex-1 px-8 overflow-auto space-y-2">
                <div className="p-4 bg-black/50 text-white text-left flex flex-row gap-x-4 justify-start items-center">
                    <Pencil className="h-8 w-8 flex-shrink-0" />
                    <div className="flex flex-row gap-x-2 flex-wrap">

                        {/* <p>En esta etapa ha afianzado/adquirido los conocimientos de: </p> */}
                        {(data.skills[lang] as string[]).map((skill) => (
                            <span key={`${key}-skill-${skill}`} className="text-md font-bold">{skill}</span>
                        ))}
                    </div>
                </div>

                {data.jobs.map((job, index) => (
                    <Collapsible
                        key={`${key}-job-${job.key}`}
                        icon={<job.icon className="h-8 w-8 flex-shrink-0" />}
                        title={job.title}
                        description={job.description}
                        showMore={showMore} index={index} handleClick={handleClick} />
                ))}

            </div>
        </div>
    );
}