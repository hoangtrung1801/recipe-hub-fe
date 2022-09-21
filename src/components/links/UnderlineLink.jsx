import { Link } from "react-router-dom";
import clsxm from "~/libs/clsxm";

const UnderlineLink = ({ className, to, icon, children }) => {
    return (
        <Link
            to={to}
            className={clsxm(
                "group group flex items-center space-x-1",
                className
            )}
        >
            <span className="text-2xl">{icon && icon}</span>
            <span
                className={clsxm(
                    "relative flex py-1",
                    "after:absolute after:bottom-1 after:left-0 after:right-0 after:h-[3px] after:w-0 after:bg-primary-500 after:transition-all after:duration-300 group-hover:after:w-full"
                    // "after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[3px] after:w-full after:rounded-sm after:bg-white after:transition-all after:duration-300 after:content-[''] hover:text-white hover:after:w-full"
                )}
            >
                {children}
            </span>
        </Link>
    );
};

export default UnderlineLink;
