import { ChevronDown } from "lucide-react";
import { cn } from "../utils"
import ReactMarkdown from "react-markdown";

export type CollapsibleProps = {
    readonly icon: React.ReactNode;
    readonly title: {
        position: string;
        where: string;
        url: string;
        start: string;
        end: string;
    };
    readonly description: string;
    readonly index: number;
    readonly showMore: number;
    readonly handleClick?: (e: React.MouseEvent<HTMLAnchorElement>, index: number) => void;
}

export const Collapsible = ({ icon, title, description, showMore, index, handleClick }: CollapsibleProps) => {
    return (
        <div className="p-4 bg-black/50 text-white text-left flex flex-row gap-x-4 justify-start items-start">
            {icon}
            <div>
                <div className="flex flex-row gap-x-2 justify-between">
                    <p className="space-x-2">
                        <i>{title.start}{' - '}{title.end}</i>{': '}<b>{title.position}</b>{' - '}{ title.url ? <a href={title.url} className="underline">{title.where}</a> : title.where}
                    </p>
                    {handleClick && <a className={cn("text-white text-sm font-bold underline cursor-pointer z-10")} onClick={(e) => handleClick(e, index)}>
                        <ChevronDown className={cn("h-6 w-6 transition-transform duration-500", showMore === index && "rotate-180")} />
                    </a>}
                </div>
                <div className={cn("h-6 z-5 transition-all duration-500 overflow-hidden mt-4 space-y-4 ", showMore === index && "opacity-100 block h-48 md:h-32 overflow-auto")}>
                    <ReactMarkdown>{description}</ReactMarkdown>
                </div>
                {/* <a className={cn("text-white text-sm font-bold underline cursor-pointer z-10")} onClick={(e) => handleClick(e, index)}>
                    {showMore === index ? 'Ocultar' : 'Mostrar más...'}
                </a> */}
            </div>
        </div>
    );
}