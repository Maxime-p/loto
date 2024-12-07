import { forwardRef, PropsWithChildren } from "react";

interface IProps {
    className?: string;
    onClick?: () => void;
}

export const Button = forwardRef<HTMLButtonElement, PropsWithChildren<IProps>>(
    ({ className, onClick, children }, ref) => {
        return (
            <button
                type="button"
                className={`bg-[var(--selected)] hover:opacity-90 text-sm text-white font-bold py-2 px-4 rounded ${className}`}
                onClick={onClick}
                ref={ref}
            >
                {children}
            </button>
        );
    }
);
