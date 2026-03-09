type ButtonProps = {
    label: string
    variant?: "primary" | "secondary"
}

export default function ButtonComponents({
    label,
    variant = "primary",
}: ButtonProps) {

    const base =
        "px-6 py-3 rounded-lg font-semibold transition cursor-pointer"

    const style = {
        primary:
            "bg-brand-primary text-white hover:bg-brand-primary/70",

        secondary:
            "border-2 border-brand-background text-brand-background hover:bg-brand-background hover:text-brand-primary hover:border-brand-primary"
    }

    return (
        <button className={`${base} ${style[variant]}`}>
            {label}
        </button>
    )
}











