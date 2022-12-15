import { Link } from "react-router-dom";
import clsxm from "~/libs/clsxm";

const UnderlineLink = ({ className, to, icon, children, multiline = false, ...rest }) => {
    return (
        <Link to={to} className={clsxm("group flex items-center space-x-1", className)} {...rest}>
            {icon && <span className="text-2xl">{icon}</span>}
            <a
                className={clsxm(
                    !multiline &&
                        "relative flex py-1 after:absolute after:bottom-1 after:left-0 after:right-0 after:h-[3px] after:w-0 after:bg-primary-500 after:transition-all after:duration-300 group-hover:after:w-full",
                    // // "after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[3px] after:w-full after:rounded-sm after:bg-white after:transition-all after:duration-300 after:content-[''] hover:text-white hover:after:w-full"
                    className
                )}
            >
                <span className={clsxm(multiline && "underline-animate ")}>{children}</span>
            </a>
        </Link>
    );
};

export default UnderlineLink;
