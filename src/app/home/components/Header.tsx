import ButtonComponents from "../../../components/ButtonComponents";

export default function Header() {
    return (
        <section className="bg-brand-primary text-brand-background text-center py-20 px-6">

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Belajar Mudah Dengan EduSmart
            </h1>

            <p className="text-lg mb-8 max-w-2xl mx-auto">
                Platform pembelajaran digital yang membantu kamu belajar
                lebih cepat, fleksibel, dan interaktif.
            </p>

            <ButtonComponents
                label="Mulai Belajar"
                variant="secondary"
            />

        </section>
    )
}