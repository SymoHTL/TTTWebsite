// components/Section.tsx


export const Section = ({ id, title, children }: Readonly<{ id: string; title: string; children: React.ReactNode }>) => {
    return (
        <section id={id} className="py-4">
            <h2 className="text-3xl font-bold">{title}</h2>
            {children}
        </section>
    );
};
