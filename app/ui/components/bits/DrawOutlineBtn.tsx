import { ReactNode } from "react";

type OutlineType = 'BOTTOM' | 'ALL'

type Props = {
    outline: OutlineType
    children: ReactNode
}

const DrawOutlineBtn = ({ outline, children }: Props) => {
    return (
        <button
            className="group relative px-4 py-2 font-medium text-slate-100 transition-colors duration-[400ms] hover:text-indigo-300"
        >
            <span>{children}</span>

            {outline === 'ALL' && <span className="absolute left-0 top-0 h-[2px] w-0 bg-indigo-300 transition-all duration-100 group-hover:w-full" />}

            {outline === 'ALL' && <span className="absolute right-0 top-0 h-0 w-[2px] bg-indigo-300 transition-all delay-100 duration-100 group-hover:h-full" />}

            {(outline === 'ALL' || outline === 'BOTTOM') && <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-indigo-300 transition-all delay-200 duration-100 group-hover:w-full" />}

            {(outline === 'ALL') && <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-indigo-300 transition-all delay-300 duration-100 group-hover:h-full" />}
        </button>
    );
};

export default DrawOutlineBtn