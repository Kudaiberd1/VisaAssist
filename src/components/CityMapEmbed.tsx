export function CityMapEmbed({ city }: { city: string }) {
    const src = `https://www.google.com/maps?q=${city}&z=10&output=embed&controls=0`;

    return (
        <div className="w-65 h-50 rounded-xl overflow-hidden">
            <iframe
                src={src}
                className="w-full h-full"
                loading="lazy"
                style={{ border: 0 }}
            />
        </div>

    );
}
