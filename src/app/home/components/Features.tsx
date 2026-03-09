import CardComponents from "../../../components/CardComponents";

export default function Features (){
    return (
        <section className="py-16 px-6">
            
            <h2 className="text-3xl font-bold text-center mb-12">
                Fitur EduSmart
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                <CardComponents 
                    icon="📚"
                    title="Materi Interaktif"
                    description="Belajar dengan materi multimedia yang menarik."
                />

                <CardComponents
                    icon="👨‍🏫"
                    title="Mentor Profesional"
                    description="Belajar langsung dari mentor berpengalaman."
                />
          
                <CardComponents
                    icon="🎓"
                    title="Sertifikat Resmi"
                    description="Dapatkan sertifikat setelah menyelesaikan kursus."
                />

            </div>
            
        </section>
    )
}