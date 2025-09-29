import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";
import { cn } from "@/lib/utils";
import x from "../assets/icons/x.svg";
import insta from "../assets/icons/instagram.svg";
import yt from "../assets/icons/youtube.svg";
export const Contact = () => {
  const placeholders = ["Enter Your Email"];

  const handleChange = (e) => {
    console.log(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <>
      <div className="relative flex h-screen w-full items-center justify-center bg-black">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
          )}
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="flex flex-col justify-center items-center gap-7 bg-black px-2">
          <div className="size-80 bg-[#7828f9] blur-[200px] absolute rounded-full"></div>
          <h1 className="text-4xl lg:text-6xl font-bold text-center text-white z-10">
            Lets Build Something Together
          </h1>
          <PlaceholdersAndVanishInput
            placeholders={placeholders}
            onChange={handleChange}
            onSubmit={onSubmit}
          />
          <p className="text-center text-white/70 z-10">
            Got an idea, question, or just want to collaborate? Our team would
            love to hear from you.
          </p>

          <div className="social-accounts flex gap-3 z-10">
            <div className="size-10">
              <img className="w-full h-full" src={x} alt="" />
            </div>
            <div className="size-10">
              <img className="w-full h-full" src={insta} alt="" />
            </div>
            <div className="size-10">
              <img className="w-full h-full" src={yt} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
