import Head from "next/head";
import Image from "next/image";

export default function Index() {
  return (
    <>
      <Head>
        <title>Simple Pricing For Your Business</title>
      </Head>
      <section className="absolute top-0 left-0 w-full bg-violet-500 h-96 lg:h-[50vh] -z-10"></section>
      <section className="relative z-10 w-full py-12">
        <div className="container px-3 mx-auto lg:mt-12">
          <h1 className="text-gray-50 text-3xl font-bold text-center lg:text-5xl">
            Simple pricing for your business
          </h1>
          <p className="text-gray-100 text-center mt-6 lg:text-2xl">
            Plans that are carefully crafted to suit your business.
          </p>
          <div className="mt-16 lg:mt-24 rounded-lg shadow-lg w-[95%] mx-auto overflow-hidden flex flex-col shadow-violet-200 max-w-[350px] lg:flex-row lg:max-w-full xl:max-w-[1280px]">
            <div className="aspect-square bg-violet-100 flex items-center justify-center flex-col p-10 lg:w-[450px]">
              <h2 className="font-bold text-2xl">Premium PRO</h2>
              <h1 className="font-bold text-5xl mt-3">$329</h1>
              <p className="mt-3 text-lg">billed just once</p>
              <button className="mt-10 rounded-lg bg-violet-500 text-white w-full py-3 font-bold">
                Get Started
              </button>
            </div>
            <div className="bg-white p-10 font-light w-full xl:p-16 text-lg lg:text-xl">
              <p>
                Access these features when you get this pricing package for your
                business.
              </p>
              <div className="flex flex-col gap-2 h-full justify-center">
                <span className="flex items-center">
                  <Image
                    src="./tick.svg"
                    alt="tick"
                    width={32}
                    height={32}
                    className="mr-2"
                  />
                  International calling and messaging API
                </span>
                <span className="flex items-center">
                  <Image
                    src="./tick.svg"
                    alt="tick"
                    width={32}
                    height={32}
                    className="mr-2"
                  />
                  Additional phone numbers
                </span>
                <span className="flex items-center">
                  <Image
                    src="./tick.svg"
                    alt="tick"
                    width={32}
                    height={32}
                    className="mr-2"
                  />
                  Automated messages via Zapier
                </span>
                <span className="flex items-center">
                  <Image
                    src="./tick.svg"
                    alt="tick"
                    width={32}
                    height={32}
                    className="mr-2"
                  />
                  24/7 support and consulting
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="container mx-auto px-10 lg:max-w-full xl:max-w-[1280px] mt-8 flex flex-col gap-5 mb-12 lg:flex-row justify-center items-center lg:gap-12">
          <span className="flex items-center">
            <Image
              src="./shield.svg"
              alt="Shield"
              width={48}
              height={48}
              className="mr-4"
            />
            30 days money back Guarantee
          </span>
          <span className="flex items-center">
            <Image
              src="./tag.svg"
              alt="Tag"
              width={48}
              height={48}
              className="mr-4"
            />
            No setup fees 100% hassle-free
          </span>
          <span className="flex items-center">
            <Image
              src="./reload.svg"
              alt="Reload"
              width={48}
              height={48}
              className="mr-4"
            />
            No monthly subscription Pay once and for all
          </span>
        </div>
      </footer>
    </>
  );
}
