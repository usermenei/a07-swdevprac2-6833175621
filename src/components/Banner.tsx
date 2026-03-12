import Image from 'next/image';

export default function Banner() {
  return (
    <div className="block p-[5px] m-0 w-screen h-[80vh] relative">
      <Image
        src={'/img/cover.jpg'}
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
    </div>
  );
}