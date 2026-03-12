import Image from "next/image"

export default async function VenueDetailPage({ params }: { params: Promise<{ vid: string }> }) {
    
    const { vid } = await params;

    const mockVenueRepo = new Map();
    mockVenueRepo.set("001", { venueName: "The Bloom Pavilion", image: "/img/bloom.jpg" });
    mockVenueRepo.set("002", { venueName: "Spark Space", image: "/img/sparkspace.jpg" });
    mockVenueRepo.set("003", { venueName: "The Grand Table", image: "/img/grandtable.jpg" });

    const venue = mockVenueRepo.get(vid);
    if (!venue) return <main className="p-5">Venue not found!</main>;

    return (
        <main className="text-center p-5">
            <h1 className="text-lg font-medium">Venue ID {vid}</h1>
            <div className="flex flex-row my-5 items-center justify-center">
                <Image 
                    src={venue.image}
                    alt={venue.venueName}
                    width={0} 
                    height={0} 
                    sizes="100vw"
                    className="rounded-lg w-[30%] h-auto"
                />
                <div className="text-md mx-5">{venue.venueName}</div>
            </div>
        </main>
    );
}

export async function generateStaticParams() {
    return [{ vid: '001' }, { vid: '002' }, { vid: '003' }]
}