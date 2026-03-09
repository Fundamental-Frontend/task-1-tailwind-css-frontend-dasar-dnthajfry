import ButtonComponents from "../../../components/ButtonComponents";

export default function Footer() {
    return (

        <footer className="bg-brand-primary text-brand-background text-center py-10 mt-16">

            <h3 className="text-xl font-semibold mb-4">
                Siap Belajar Bersama EduSmart?
            </h3>

            <p className="text-sm md:text-base max-w-xl text-center mx-auto mb-6">
                Bergabunglah dengan EduSmart dan mulai perjalanan belajarmu
                dengan materi yang interaktif, mentor yang profesional, dan dapatkan sertifikat
                resminya.
            </p>

            <ButtonComponents
                label="Daftar Sekarang"
                variant="secondary" />

            <p className="mt-6 text-brand-background text-sm opacity-80">
                &copy; 2026 EduSmart
            </p>

        </footer>
    )
}