export default function Home() {
  return (
    <main>
      <section className="flex flex-col items-center justify-center text-center  min-h-screen  p-12 md:p-24 gap-[24px] bg-secondary">
        <div className="flex flex-col gap-[24px] justify-center items-center">
          <h1 className="text-[56px] text-primary font-bold underline decoration-wavy decoration-primary">
            Envoyer
          </h1>
          <p className="text-white text-3xl">
            Unleash the Power of Email:{" "}
            <span className="italic text-gray-400">
              Scalable, Open-Source, and Secure{" "}
            </span>
          </p>
        </div>
        <p className="text-gray-400 md:w-1/2 text-xl">
          Enjoy the flexibility of our pay-as-you-go pricing model, allowing you
          to scale your email delivery needs without being bound by restrictive
          plans or fixed costs
        </p>
        <button className="px-[12px] py-[12px] bg-primary text-white rounded-xl hover:bg-[#50C4ED]">
          Comming soon...
        </button>
      </section>
      <section className="flex flex-col items-center min-h-screen text-gray-700 p-12 md:p-24 gap-[24px] bg-slate-50">
        <h1 className="text-[44px] md:text-[56px] font-bold text-gray-700">
          What we provide?
        </h1>
        <div>
          <div className="flex gap-[24px]">
            <div className="flex flex-col justify-center items-center">
              <div className="w-[12px] h-[12px] bg-gray-700 rounded-full" />
              <div className="w-[3px] flex-1 bg-gray-700" />
            </div>
            <span className="text-[32px] md:text-[44px]">
              Bulk{" "}
              <span className="italic underline decoration-wavy decoration-gray-800">
                email&aposs
              </span>
            </span>
          </div>
          <div className="flex gap-[24px]">
            <div className="flex flex-col justify-center items-center">
              <div className="w-[12px] h-[12px] bg-gray-700 rounded-full" />
              <div className="w-[3px] flex-1 bg-gray-700" />
            </div>
            <span className="text-[32px] md:text-[44px]">
              Pay as you go{" "}
              <span className="italic underline decoration-wavy decoration-gray-800">
                pricing
              </span>{" "}
              model
            </span>
          </div>
          <div className="flex gap-[24px]">
            <div className="flex flex-col justify-center items-center">
              <div className="w-[12px] h-[12px] bg-gray-700 rounded-full" />
              <div className="w-[3px] flex-1 bg-gray-700" />
            </div>
            <span className="text-[32px] md:text-[44px]">
              Real time{" "}
              <span className="italic underline decoration-wavy decoration-gray-800">
                Analytics
              </span>
            </span>
          </div>
          <div className="flex gap-[24px]">
            <div className="flex flex-col justify-center items-center">
              <div className="w-[12px] h-[12px] bg-gray-700 rounded-full" />
              <div className="w-[3px] flex-1 bg-gray-700" />
            </div>
            <span className="text-[32px] md:text-[44px]">
              AI Generated{" "}
              <span className="italic underline decoration-wavy decoration-gray-800">
                Templates
              </span>
            </span>
          </div>
          <div className="flex gap-[24px]">
            <div className="flex flex-col justify-center items-center">
              <div className="w-[12px] h-[12px] bg-gray-700 rounded-full" />
              <div className="w-[3px] flex-1 bg-gray-700" />
            </div>
            <span className="text-[32px] md:text-[44px]">
              Waitlist{" "}
              <span className="italic underline decoration-wavy decoration-gray-800">
                Forms
              </span>
            </span>
          </div>
          <div className="flex gap-[24px]">
            <div className="flex flex-col justify-center items-center">
              <div className="w-[12px] h-[12px] bg-gray-700 rounded-full" />
              <div className="w-[3px] flex-1 bg-gray-700" />
            </div>
            <span className="text-[32px] md:text-[44px]">
              Business{" "}
              <span className="italic underline decoration-wavy decoration-gray-800">
                API
              </span>
            </span>
          </div>
          <div className="flex gap-[24px]">
            <div className="flex flex-col justify-center items-center">
              <div className="w-[12px] h-[12px] bg-gray-700 rounded-full" />
              <div className="w-[3px] flex-1 bg-gray-700" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
/*
Primary Color: #2C3E50 (Dark Blue)
Secondary Color: #F39C12 (Orange)
Accent Color: #27AE60 (Green)
Neutral Colors: #FFFFFF (White), #ECF0F1 (Light Gray), #7F8C8D (Gray)
008DDA
*/
