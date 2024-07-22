type ButtonProps = {
    text: string
}

export default function Button({ text } : ButtonProps) {
    return(
        <button className="bg-orange text-white rounded px-4 py-1 hover:bg-light-orange duration-500">
            {text}
        </button>
    )
}