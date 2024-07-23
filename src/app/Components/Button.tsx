type ButtonProps = {
    text: string;
    isBordered: boolean | null;
}

export default function Button({ text, isBordered }: ButtonProps) {
    const baseStyles = "rounded px-4 py-1 duration-500";
    const borderedStyles = "border-2 border-white text-white hover:bg-light-orange mt-6";
    const filledStyles = "bg-orange text-white hover:bg-light-orange";

    return (
        <button className={`${baseStyles} ${isBordered ? borderedStyles : filledStyles}`}>
            {text}
        </button>
    );
}
