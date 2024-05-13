import Image from "next/image";
import ReviewCard from "./components/ReviewCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="w-6/12 text-center">
        <h1 className="font-bold lg:flex justify-center text-4xl mb-8">
          AIMG
        </h1>
        <p className="mb-8">
          I&apos;m Kevin &ldquo;amg&ldquo; Vu, and I&apos;ve been playing FPS games for over 15 years, with over 4000 combined hours in the Counter-Strike series, competing in level 10 on Faceit and Rank G on ESEA between 2016-2019.
          Over my years of playing FPS, I&apos;ve used dozens of different peripherals on the market out of my enthusiasm for trying new tech products and giving my opinions on them (and my consumerist habits).
        </p>
        <p className="mb-8">
          I created this website to post my thoroughly-tested, unbiased opinion on all of the gaming peripherals I use.
        </p>
      </div>
      <div className="z-10 w-full max-w-5xl items-center text-sm lg:flex justify-center">
        <div className="flex flex-col items-center">
          <div className="flex flex-col font-semibold items-center lg:flex-row mb-2">
            <a className="text-3xl mb-4 mr-8 transition-all duration-200 hover:underline hover:cursor-pointer">
              Mice Reviews
            </a>
            <a className="text-3xl mb-4 transition-all duration-200 hover:underline hover:cursor-pointer">
              Mousepad Reviews
            </a>
          </div>
          <ReviewCard mouseName="Ninjutso Sora v2" 
                      description="A sub-40g claw optimized demon."
                      imageUrl="/SoraV2.png" />
          <ReviewCard mouseName="Sprime PM1"
                      description="An ultra-light implementation of a widely loved shape, the Logitech G403/703."
                      imageUrl="/SprimePM1.png" />
          <ReviewCard mouseName="Vaxee NP-01 4K" 
                      description="One of the best 4K implementations on a unique ambi-sym shape."
                      imageUrl="/NP014K.png" />
          <ReviewCard mouseName="Razer Viper v3 Pro" 
                      description="Razer's latest flagship release with a revised shape from the original"
                      imageUrl="/ViperV3Pro.png" />
        </div>
      </div>
    </main>
  );
}


