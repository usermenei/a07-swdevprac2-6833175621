'use client'
import Image from 'next/image';
import InteractiveCard from './InteractiveCard';
import Rating from '@mui/material/Rating';

export default function ProductCard({ venueName, imgSrc, ratingValue, onRatingChange }: {
    venueName: string,
    imgSrc: string,
    ratingValue: number,
    onRatingChange?: (venue: string, rating: number) => void,
    onCompare?: (venue: string) => void
}) {
    return (
        <InteractiveCard contentName={venueName}>
            <div className='w-full h-[60%] relative rounded-t-lg'>
                <Image src={imgSrc}
                    alt='Product Picture'
                    fill={true}
                    className='object-cover rounded-t-lg'
                />
            </div>
            <div className='w-full p-[10px]'>{venueName}</div>
            <div className='w-full px-[10px] pb-[10px]'>
                <Rating
                    id={`${venueName} Rating`}
                    name={`${venueName} Rating`}
                    data-testid={`${venueName} Rating`}
                    value={ratingValue}
                    onChange={(event, newValue) => {
                        onRatingChange?.(venueName, newValue ?? 0);
                    }}
                />
            </div>
        </InteractiveCard>
    );
}