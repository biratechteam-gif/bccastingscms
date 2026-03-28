import Image from "next/image";

export default function Logo() {
  return (
    <div className="px-4 py-2 rounded-full border border-[#B8962E] flex items-center justify-center font-bold text-lg">
      <Image src={"/Logo.svg"} alt="logo" width={60} height={60} />{" "}
    </div>
  );
}
