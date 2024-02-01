import Image from "next/image";
import { DM_Serif_Display } from "next/font/google";

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Home() {
  const heroTextFontClass = dmSerifDisplay.className;

  return (
    <div className="my-44">
        <div className={`${heroTextFontClass} mb-7  text-white text-7xl flex flex-col gap-2`}>
          <p>
            <span className=" text-red-500">Klové, </span>A New home
          </p>
          <p>for all your food-code</p>
        </div>
      <button className=" text-black py-2 px-4 bg-[#F6EAFA] rounded-xl">Sign Up</button>
    </div>
  );
}
