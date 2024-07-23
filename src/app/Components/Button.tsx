type ButtonProps = {
    text: string;
    isBordered: boolean | null;
    onClick?: () => void;  // Adiciona a prop onClick
};

export default function Button({ text, isBordered, onClick }: ButtonProps) {
    const baseStyles = "rounded px-4 py-1 duration-500";
    const borderedStyles = "border-2 border-white text-white hover:bg-light-orange mt-6";
    const filledStyles = "bg-orange text-white hover:bg-light-orange";

    return (
        <button onClick={onClick} className={`${baseStyles} ${isBordered ? borderedStyles : filledStyles}`}>
            {text}
        </button>
    );
}
