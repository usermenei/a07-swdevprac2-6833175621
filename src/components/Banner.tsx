'use client'
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Banner() {
    const covers = ['/img/cover.jpg', '/img/cover2.jpg', '/img/cover3.jpg', '/img/cover4.jpg']
    const [index, setIndex] = useState(0)
    const router = useRouter()

    return (
        <div className="block p-[5px] m-0 w-screen h-[80vh] relative" onClick={() => { setIndex(index + 1) }}>
            <Image
                src={covers[index % 4]}
                alt="cover"
                fill
                priority
                className="object-cover"
            />
            <div className="absolute top-[400px] left-0 right-0 z-20 text-center text-white">
                <h1 className="text-4xl font-medium">where every event finds its venue</h1>
                <h3 className="text-xl font-serif">
                    Find Your Space, Create Your Story. From weddings to workshops, we have the perfect spot for you.
                </h3>
            </div>
            <button
                className="bg-white text-cyan-600 border border-cyan-600 font-semibold py-2 px-2 m-2 rounded z-30 absolute bottom-0 right-0 hover:bg-cyan-600 hover:text-white hover:border-transparent"
                onClick={(e) => { e.stopPropagation(); router.push('/venue') }}
            >
                Select Venue
            </button>
        </div>
    );
}