import { useMemo } from "react";
import { positionContainer } from "./container";
import { cn } from "./utils";

export type CoverProps = {
    readonly bgImage: string;
    readonly bgColor: string;
    readonly position: positionContainer;
    readonly activeContainer: positionContainer | null;
    readonly heading: React.ReactNode;
}

export function Cover({ bgImage, bgColor,  position, activeContainer, heading }: CoverProps) {

    const _bgImage = useMemo(() => {
        return `bg-[url('/public/${bgImage}')]`;
    }, [bgImage]);

    const _hoverBgColor = useMemo(() => {
        return `group-hover:${bgColor}`;
    }, [bgColor]);

    return (
        <>
        <div className={cn("absolute top-0 left-0 w-full h-full bg-cover bg-center grayscale flex items-center justify-center", _bgImage)} style={{ backgroundImage: `url('/public/${bgImage}')` }}>
            <h1 className={cn("text-white text-4xl font-bold font-heading opacity-0 group-hover:opacity-100 transition-all duration-300", !activeContainer ? "group-hover:opacity-100" : "opacity-0 group-hover:opacity-0")}>{heading}</h1>
        </div>
        <div className={cn("absolute top-0 left-0 w-full h-full mix-blend-multiply transition-all duration-300 z-10 group-hover:bg-green group-hover:bg-orange group-hover:bg-yellow group-hover:bg-magenta group-hover:bg-turquoise", _hoverBgColor, activeContainer === position && bgColor)}></div>
        <div className={cn("absolute top-0 left-0 w-full h-full", activeContainer === position && " bg-black/50 delay-100 duration-500 opacity-100")}></div>
        </>
    );
}