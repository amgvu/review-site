import Image from "next/image";
import ReviewCard from "./components/ReviewCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="w-6/12 text-center">
        <h1 className="font-bold font-mono lg:flex justify-center text-4xl mb-8">
          AIMG
        </h1>
        <p className="mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </p>
      </div>
      <div className="z-10 w-full max-w-5xl items-center font-mono text-sm lg:flex justify-center">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center lg:flex-row">
            <a className="text-3xl mb-4 mr-8 transition-all duration-200 hover:underline hover:cursor-pointer">
              Mice Reviews
            </a>
            <a className="text-3xl mb-4 transition-all duration-200 hover:underline hover:cursor-pointer">
              Mousepad Reviews
            </a>
          </div>
          <ReviewCard mouseName="Ninjutso Sora v2" 
                      description="A sub-40g claw optimized demon."
                      imageUrl="/SoraV2.jpg" />
          <ReviewCard mouseName="Sprime PM1"
                      description="An ultra-light implementation of a widely loved shape, the Logitech G403/703."
                      imageUrl="/SprimePM1.jpg" />
          <ReviewCard mouseName="Vaxee NP-01 4K" 
                      description="One of the best 4K implementations on a unique ambi-sym shape."
                      imageUrl="/NP014K.jpg" />
          <ReviewCard mouseName="Razer Viper v3 Pro" 
                      description="Razer's latest flagship release with a deviation of shape."
                      imageUrl="/ViperV3Pro.jpg" />
        </div>
      </div>
    </main>
  );
}


