'use client'
import { useReducer } from "react";
import ProductCard from "./Card";
import Link from "next/link";

export default function CardPanel() {

    /**
     * Mock Data for Demonstration Only
     */
    const mockVenueRepo = [
        { vid: "001", venueName: "The Bloom Pavilion", imgSrc: "/img/bloom.jpg" },
        { vid: "002", venueName: "Spark Space", imgSrc: "/img/sparkspace.jpg" },
        { vid: "003", venueName: "The Grand Table", imgSrc: "/img/grandtable.jpg" },
    ]

    const ratingReducer = (ratingMap: Map<string, number>, action: { type: string, venueName: string, rating?: number }) => {
        switch (action.type) {
            case 'update': {
                const newMap = new Map(ratingMap);
                newMap.set(action.venueName, action.rating ?? 0);
                return newMap;
            }
            case 'remove': {
                const newMap = new Map(ratingMap);
                newMap.delete(action.venueName);
                return newMap;
            }
            default: return ratingMap;
        }
    }

    const [ratingMap, dispatchRating] = useReducer(ratingReducer, (() => {
        const m = new Map<string, number>();
        mockVenueRepo.forEach(v => m.set(v.venueName, 0));
        return m;
    })());

    return (
        <div>
            <div style={{ margin: "20px", display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around", alignContent: "space-around" }}>
                {
                    mockVenueRepo.map((venueItem) => (
                        <Link key={venueItem.vid} href={`/venue/${venueItem.vid}`} className="w-1/5">
                            <ProductCard
                                venueName={venueItem.venueName}
                                imgSrc={venueItem.imgSrc}
                                ratingValue={ratingMap.get(venueItem.venueName) ?? 0}
                                onRatingChange={(venue, rating) =>
                                    dispatchRating({ type: 'update', venueName: venue, rating })
                                }
                            />
                        </Link>
                    ))
                }
            </div>

            <div className="w-full text-xl font-medium p-4">
                Venue List with Ratings: {ratingMap.size}
            </div>
            {Array.from(ratingMap.entries()).map(([venue, rating]) => (
                <div
                    key={venue}
                    onClick={() => dispatchRating({ type: 'remove', venueName: venue })}
                    style={{ cursor: 'pointer', padding: '4px 16px' }}
                >
                    {venue} : {rating}
                </div>
            ))}
        </div>
    );
}