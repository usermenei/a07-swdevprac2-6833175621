import Image from "next/image";
import TopMenuItem from "./TopMenuItem";

export default function TopMenu() {
  return (
    <div className="h-[50px] bg-white fixed top-0 left-0 right-0 z-30 border-t border-b border-gray-200 flex flex-row-reverse items-center px-4">
      <Image
        src={"/img/logo.png"}
        className="h-full w-auto"
        alt="logo"
        width={0}
        height={0}
        sizes="100vh"
      />
      <TopMenuItem title="Booking" pageRef="/booking" />
    </div>
  );
}