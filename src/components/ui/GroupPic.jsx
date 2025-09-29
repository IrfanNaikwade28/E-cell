import group_pic from "../../assets/images/Team_pic.jpg";
import { IconChevronDown } from "@tabler/icons-react";

export const GroupPic = () => {
    return (
            <div className="w-full h-full flex items-center justify-center p-3 sm:p-4 md:p-6">
                <div className="w-full max-w-[1600px] lg:max-w-[1400px] xl:max-w-[1600px] lg:h-[80vh] flex flex-col items-center">
                    <img
                        src={group_pic}
                        alt="E-Cell Team group photo"
                        loading="lazy"
                        draggable="false"
                        className="select-none pointer-events-none w-full h-auto lg:h-full object-contain lg:object-cover rounded-xl shadow-2xl ring-1 ring-white/10 bg-neutral-900"
                    />
                    {/* Mobile scroll hint */}
                    <div className="mt-2 md:hidden flex items-end gap-1 text-neutral-300/80 animate-bounce pointer-events-none select-none">
                        <IconChevronDown size={18} stroke={1.75} />
                        <span className="text-xs tracking-wide">Scroll</span>
                    </div>
                </div>
        </div>
    );
};