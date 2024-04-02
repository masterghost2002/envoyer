export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-12 md:p-24 bg-secondary gap-[24px] text-center">
      <div className="flex flex-col gap-[24px] justify-center items-center">
        <h1 className="text-[56px] text-primary font-bold underline decoration-wavy decoration-primary">Envoyer</h1>
        <p className="text-white text-3xl">
          Unleash the Power of Email: <span className="italic text-gray-400">Scalable, Open-Source, and Secure </span>
        </p>
      </div>
      <p className="text-gray-400 md:w-1/2 text-xl">
        Enjoy the flexibility of our pay-as-you-go pricing model, allowing you to scale your email delivery needs without being bound by restrictive plans or fixed costs
      </p>
      <button className="px-[12px] py-[12px] bg-primary text-white rounded-xl hover:bg-[#50C4ED]">
        Comming soon...
      </button>

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