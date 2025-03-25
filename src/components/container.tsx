import { useMemo } from "react";
import { cn } from "../utils";

export type positionContainer = 'top' | 'left' | 'right' | 'bottom' | 'center';

export type ContainerProps = {
  readonly position: positionContainer;
  readonly activeContainer: positionContainer | null;
  readonly setActiveContainer: (position: positionContainer | null) => void;
  readonly children: React.ReactNode;
  readonly className?: string;
}

export function Container({position, activeContainer, setActiveContainer, children, className }: ContainerProps) {
  
  const _defaultStyles = useMemo(() => {
    const _blockStyles = {
      'top': 'w-full h-1/5 top-0 left-0 py-2 md:top-0 md:left-0 md:pr-2 md:pb-2 md:pt-0 md:w-2/3 md:h-1/3',
      'left': 'w-full h-1/5 max-md:top-3/5 left-0 bottom-1/5 py-2 md:left-0 md:bottom-0 md:pr-2 md:pt-2 md:pb-0 md:w-1/3 md:h-2/3',
      'right': 'w-full h-1/5 top-1/5 max-md:left-0 py-2 md:right-0 md:top-0 md:pl-2 md:pb-2 md:pt-0 md:w-1/3 md:h-2/3',
      'bottom': 'w-full h-1/5 bottom-0 max-md:left-0 max-md:top-4/5 py-2 md:bottom-0 md:right-0 md:pl-2 md:pt-2 md:pb-0 md:w-2/3 md:h-1/3',
      'center': 'w-full h-1/5 top-2/5 max-md:left-0 py-2 md:top-1/3 md:left-1/3 md:p-2 md:w-1/3 md:h-1/3',
    }
    return cn('absolute transition-all duration-1000 hover:cursor-pointer', className, _blockStyles[position]);
  }, [position]);

  const _activeStyles = useMemo(() => {
    const _active = 'h-4/5 max-md:top-0 max-md:left-0 max-md:bottom-4/5 md:w-[90%] md:h-[90%] md:z-10';
    const _centerActive = 'h-4/5 md:top-[10%] md:left-[10%] md:w-[80%] md:h-[80%]';

    return cn(_active, activeContainer === 'center' && _centerActive);
  }, [activeContainer]);

  const _unactiveStyles = useMemo(() => {

    const _setPosition = {
      'top': 'md:top-[90%] md:left-[10%] md:pb-0',
      'left': 'md:left-[90%] md:top-[80%] md:pr-0',
      'right': 'md:left-0 md:top-[10%] md:pl-0',
      'bottom': 'md:top-0 md:left-[80%] md:pt-0',
      'center': ''
    }

    const _unActiveBlockStyles = {
      'top': 'w-1/5 h-1/5 max-md:top-4/5 max-md:left-0 max-md:px-2 md:h-[10%] ' + (activeContainer === 'right' ? 'md:w-[10%]' : activeContainer === 'bottom' ? 'md:w-[80%]' : 'md:w-[90%]'),
      'left': 'w-1/5 h-1/5 max-md:top-4/5 max-md:left-3/5 max-md:px-2 md:w-[10%] ' + (activeContainer === 'top' ? 'md:h-[10%]' : activeContainer === 'right' ? 'md:h-[80%]' : 'md:h-[90%]'),
      'right': 'w-1/5 h-1/5 max-md:top-4/5 max-md:left-1/5 max-md:px-2 md:w-[10%] ' + (activeContainer === 'bottom' ? 'md:h-[10%]' : activeContainer === 'left' ? 'md:h-[80%]' : 'md:h-[90%]'),
      'bottom': 'w-1/5 h-1/5 max-md:top-4/5 max-md:left-4/5 max-md:px-2 md:h-[10%] ' + (activeContainer === 'left' ? 'md:w-[10%]' : activeContainer === 'top' ? 'md:w-[80%]' : 'md:w-[90%]'),
      'center': 'w-1/5 h-1/5 max-md:top-4/5 max-md:left-2/5 max-md:px-2 md:w-[10%] md:h-[10%] ' + (activeContainer && _setPosition[activeContainer]),
    }

    return cn(_unActiveBlockStyles[position]);
  }, [activeContainer]);
    
    return (
        <div className={cn('group', _defaultStyles, activeContainer === position ? _activeStyles : activeContainer !== null && activeContainer !== position && _unactiveStyles)} onClick={() => setActiveContainer(activeContainer === position ? null : position)}>
            <div className={cn(
              "w-full h-full rounded-md transition-all duration-1000 relative",
              activeContainer === position && 'opacity-100'
        )}>
          {children}
            </div>
        </div>
    );
}