import ButtonComponents from "./ButtonComponents";

type CardProps = {
    icon: string
    title: string
    description: string
}

export default function CardComponents({
    icon,
    title,
    description,
}: CardProps) {
    return (
        <div className="border border-brand-secondary bg-brand-background shadow-md rounded-lg p-6 text-center">
            <div className="text-4xl mb-4">
                {icon}
            </div>

            <h3 className="text-xl font-semibold mb-2">
                {title}
            </h3>

            <p className="text-sm mb-4 md:text-base">
                {description}
            </p>

            <ButtonComponents
                label="Pelajari"
                variant="primary" />

        </div>
    )
}