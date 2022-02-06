import Link from "next/link";
import { useRouter } from "next/router";

export const Article = () => {
  return (
    <>
      <div className="container px-6 lg:w-1/2 mx-auto">
        <p className="text-center  tracking-tighter text-zinc-400 pt-24">
          A little about me
        </p>
        <div id="article" className="prose pt-6">
          <h2>
            Working on fun projects{" "}
            <a
              href="https://oiaskin.co"
              target="_blank"
              rel="noopener noreferrer"
              className="decoration-4 underline underline-offset-2 decoration-orange-500"
            >
              for a living
            </a>
          </h2>
          <img
            src="/images/profile_img.jpg"
            alt="blog_main"
            className="float-left rounded-xl lg:h-80 w-full lg:w-auto lg:px-0 overflow-hidden my-6 lg:my-0 lg:mr-4 lg:mt-4"
          />
          <p className="text-xl   text-zinc-400 leading-looser pb-6 lg:mt-2">
            Oia started out as a small dropshipping brand in 2020, but saw
            overnight success by going viral on facebook. The brand scaled very
            quickly to 8 figures. This was larely due in part to{" "}
            <span className=" text-orange-300">UGC ads.</span> We consistently
            tested new UGC ads for Oia to achieve the best results.
          </p>
          <h3>No wasting time</h3>
          <p className="text-xl   text-zinc-400 leading-looser py-6 lg:py-0 lg:mt-2">
            One thing that was unique to Oia was how aggressive of a UGC
            campaign we led.{" "}
            <span className=" text-orange-300">Over 100 micro-influencers</span>{" "}
            {`from Youtube and 100's`}
            more from Instagram were found to provide content for the brand.
            This two for one strategy allowed us to scale on both evergreen
            channels and short-term social media driven ones.
          </p>
        </div>
      </div>
    </>
  );
};

export const Youtube = () => {
  return (
    <>
      <div className="lg:w-2/3 mx-auto lg:mt-24 mt-12 mb-6">
        <h2 className=" text-center pb-6">Recent Videos📸</h2>
        <p className="text-xl  px-6 text-zinc-400 leading-looser py-6 lg:py-0 lg:mt-2 ">
          {`In 2020 I started a small YouTube channel about cameras and more specifically, film cameras. This is one of my creative outlets to `}
          <span className=" text-orange-300">just let go and have fun.</span>
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:w-2/3 mx-auto gap-6 px-6 lg:mb-24 mb-12">
        <div id="testimonial">
          <iframe
            className="w-full"
            src="https://www.youtube.com/embed/A88CI9ijMeI"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>

        <div id="testimonial">
          <iframe
            className="w-full"
            src="https://www.youtube.com/embed/w_5HCEIW3a8"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export const Hero = () => {
  const router = useRouter();

  return (
    <div className="mt-12 lg:mt-24 ">
      <h1 className="text-center lg:mt-24 mt-12 z-20 relative">
        Blogging about dev, marketing, and video making
      </h1>
      <div className="relative w-full max-w-lg mx-auto">
        <div className="absolute lg:-bottom-8  -bottom-14 left-12 w-48 h-48 bg-blue-500 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob z-50"></div>
        <div className="absolute lg:-bottom-8 -bottom-14 -right-4 w-48 h-48 bg-orange-500 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob  z-50"></div>
        <div className="absolute lg:-bottom-8 -bottom-14 left-48 w-48 h-48 bg-purple-500 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob  z-50"></div>
      </div>
    </div>
  );
};

export const About = ({ data }) => {
  return (
    <div className="relative w-full  mx-auto px-6 lg:px-0 lg:mb-48  mb-24">
      <h1 className="text-center  tracking-tighter text-zinc-50 pt-24 lg:pt-48 pb-12 z-50">
        My Projects
      </h1>
      <div className="relative w-full max-w-lg mx-auto ">
        <div className="absolute -bottom-8 left-12 w-48 lg:h-48 h-36 bg-green-500/70 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob z-0"></div>
        <div className="absolute -bottom-8 -right-4 w-48 lg:h-48 h-36 bg-emerald-500/70 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob  z-0"></div>
        <div className="absolute -bottom-8 left-48 w-48 lg:h-48 h-36 bg-sky-500/70 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob  z-0"></div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 lg:mx-12">
        {data.allArticles.map((e, i) => {
          return (
            <>
              <Link key={i} href={`/posts/${e.slug}`}>
                <div className="flex flex-col justify-between  shadow-xl rounded-xl p-4 cursor-pointer transition duration-300 ease-out hover:ease-in hover:scale-105">
                  <p className="m-2 text-center">{e.title}</p>

                  <div className="relative rounded-xl m-2 mt-4 h-40 overflow-hidden">
                    <img
                      className="absolute inset-0  w-full"
                      src={e.thumbnail.url}
                    ></img>
                  </div>
                </div>
              </Link>
            </>
          );
        })}
      </div>
    </div>
  );
};

export const Cta = () => {
  return (
    <div className="container relative w-full  mx-auto px-6  lg:mt-48 mb-24">
      <h1 className="text-center pt-24 pb-6">{`Want more ideas?`}</h1>
      <div className="flex space-x-4 justify-center items-center z-10">
        <div
          id="cta_details"
          className=" z-10 text-zinc-200 text-xs lg:text-xl flex justify-center items-center font-semibold"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="md:mx-2 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Over 143 ads launched.
        </div>
        <div
          id="cta_details"
          className=" z-10 text-zinc-200 text-xs lg:text-xl flex justify-center items-center font-semibold"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="md:mx-2 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Global team.
        </div>
        <div
          id="cta_details"
          className=" z-10 text-zinc-200 text-xs lg:text-xl flex justify-center items-center font-semibold"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="md:mx-2 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Honest marketing.
        </div>
      </div>

      <button
        disabled={true}
        className="mt-6 mx-auto relative flex justify-center items-center pt-4"
      >
        <a
          href="https://calendly.com/sell-on-social"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold transition duration-300 ease-out hover:ease-in text-xl cursor-pointer z-10 rounded-xl text-zinc-50 p-4 hover:bg-zinc-500 bg-zinc-900  tracking-tight"
        >
          Sure!
        </a>
        <div className="absolute inset-0  w-24 h-4 bg-green-500 rounded-full  filter blur-xl z-0"></div>
        <div className="absolute right-0 w-24 h-4 bg-emerald-500 rounded-full  filter blur-xl  z-0"></div>
        <div className="absolute left-5  w-24 h-4 bg-sky-500 rounded-full  filter blur-xl  z-0"></div>
      </button>

      <p className="text-center  tracking-tighter text-zinc-400 pt-6"></p>
    </div>
  );
};

export const Footer = () => {
  return (
    <>
      <Cta />

      <div className="flex justify-center text-orange-500 items-start space-x-4">
        <a
          href="https://instagram.com/sellonsocial"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-105 "
        >
          <svg
            className="h-6 w-6 text-slate-300"
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            stroke="currentColor"
            fill="currentColor"
          >
            <path d="M17.34,5.46h0a1.2,1.2,0,1,0,1.2,1.2A1.2,1.2,0,0,0,17.34,5.46Zm4.6,2.42a7.59,7.59,0,0,0-.46-2.43,4.94,4.94,0,0,0-1.16-1.77,4.7,4.7,0,0,0-1.77-1.15,7.3,7.3,0,0,0-2.43-.47C15.06,2,14.72,2,12,2s-3.06,0-4.12.06a7.3,7.3,0,0,0-2.43.47A4.78,4.78,0,0,0,3.68,3.68,4.7,4.7,0,0,0,2.53,5.45a7.3,7.3,0,0,0-.47,2.43C2,8.94,2,9.28,2,12s0,3.06.06,4.12a7.3,7.3,0,0,0,.47,2.43,4.7,4.7,0,0,0,1.15,1.77,4.78,4.78,0,0,0,1.77,1.15,7.3,7.3,0,0,0,2.43.47C8.94,22,9.28,22,12,22s3.06,0,4.12-.06a7.3,7.3,0,0,0,2.43-.47,4.7,4.7,0,0,0,1.77-1.15,4.85,4.85,0,0,0,1.16-1.77,7.59,7.59,0,0,0,.46-2.43c0-1.06.06-1.4.06-4.12S22,8.94,21.94,7.88ZM20.14,16a5.61,5.61,0,0,1-.34,1.86,3.06,3.06,0,0,1-.75,1.15,3.19,3.19,0,0,1-1.15.75,5.61,5.61,0,0,1-1.86.34c-1,.05-1.37.06-4,.06s-3,0-4-.06A5.73,5.73,0,0,1,6.1,19.8,3.27,3.27,0,0,1,5,19.05a3,3,0,0,1-.74-1.15A5.54,5.54,0,0,1,3.86,16c0-1-.06-1.37-.06-4s0-3,.06-4A5.54,5.54,0,0,1,4.21,6.1,3,3,0,0,1,5,5,3.14,3.14,0,0,1,6.1,4.2,5.73,5.73,0,0,1,8,3.86c1,0,1.37-.06,4-.06s3,0,4,.06a5.61,5.61,0,0,1,1.86.34A3.06,3.06,0,0,1,19.05,5,3.06,3.06,0,0,1,19.8,6.1,5.61,5.61,0,0,1,20.14,8c.05,1,.06,1.37.06,4S20.19,15,20.14,16ZM12,6.87A5.13,5.13,0,1,0,17.14,12,5.12,5.12,0,0,0,12,6.87Zm0,8.46A3.33,3.33,0,1,1,15.33,12,3.33,3.33,0,0,1,12,15.33Z" />
          </svg>
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-105"
        >
          <svg
            className="h-6 w-6 text-slate-300"
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            stroke="currentColor"
            fill="currentColor"
          >
            <path d="M22.99121,3.9502a.99942.99942,0,0,0-1.51074-.85938,7.47956,7.47956,0,0,1-1.873.793,5.15234,5.15234,0,0,0-3.374-1.24219,5.23238,5.23238,0,0,0-5.22363,5.06348A11.03194,11.03194,0,0,1,4.19629,3.78125,1.01154,1.01154,0,0,0,3.33887,3.416a.99852.99852,0,0,0-.78516.5,5.2755,5.2755,0,0,0-.24219,4.76855l-.00195.00195a1.0411,1.0411,0,0,0-.49512.88868,3.04174,3.04174,0,0,0,.02637.43945,5.1854,5.1854,0,0,0,1.56836,3.3125.99813.99813,0,0,0-.06641.76953,5.20436,5.20436,0,0,0,2.36231,2.92187,7.46464,7.46464,0,0,1-3.58985.44825.99975.99975,0,0,0-.665,1.833A12.94248,12.94248,0,0,0,8.46,21.36133,12.7878,12.7878,0,0,0,20.9248,11.998,12.82166,12.82166,0,0,0,21.46,8.35156c0-.06543,0-.13281-.001-.20019A5.76963,5.76963,0,0,0,22.99121,3.9502ZM19.68457,7.16211a.995.995,0,0,0-.2334.70215c.00977.165.00879.331.00879.4873a10.82371,10.82371,0,0,1-.4541,3.08106A10.68457,10.68457,0,0,1,8.46,19.36133a10.93791,10.93791,0,0,1-2.55078-.30078,9.47951,9.47951,0,0,0,2.94238-1.56348A1.00033,1.00033,0,0,0,8.25,15.71094a3.208,3.208,0,0,1-2.21387-.93457q.22413-.04248.44532-.10547a1.00026,1.00026,0,0,0-.08008-1.94336,3.19824,3.19824,0,0,1-2.25-1.72559,5.29929,5.29929,0,0,0,.54492.0459,1.02093,1.02093,0,0,0,.9834-.69629A.9998.9998,0,0,0,5.2793,9.21484,3.19559,3.19559,0,0,1,3.85547,6.542c0-.0664.00195-.13281.00586-.19824a13.01365,13.01365,0,0,0,8.209,3.47949,1.02046,1.02046,0,0,0,.81739-.3584,1.00037,1.00037,0,0,0,.206-.86816,3.15653,3.15653,0,0,1-.08691-.72852A3.23,3.23,0,0,1,16.2334,4.6416a3.18428,3.18428,0,0,1,2.34472,1.02051A.993.993,0,0,0,19.499,5.96a9.27073,9.27073,0,0,0,1.21192-.32226A6.68126,6.68126,0,0,1,19.68457,7.16211Z" />
          </svg>
        </a>
        <a
          href="https://youtube.com/sellonsocial"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-105"
        >
          <svg
            className="h-6 w-6 text-slate-300"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
            fill="currentColor"
          >
            <path d="M10 2.3C.172 2.3 0 3.174 0 10s.172 7.7 10 7.7 10-.874 10-7.7-.172-7.7-10-7.7zm3.205 8.034l-4.49 2.096c-.393.182-.715-.022-.715-.456V8.026c0-.433.322-.638.715-.456l4.49 2.096c.393.184.393.484 0 .668z" />
          </svg>
        </a>
      </div>
      <div
        id="footer_links"
        className="flex justify-between items-center space-x-4 text-sm"
      >
        <p className="pt-24 pb-12 text-center text-zinc-400">
          austin w © Copyright 2022. All Rights Reserved.
        </p>
        <div className="text-zinc-400 flex space-x-4 ">
          <Link href="/terms">
            <span className="hover:text-zinc-300 cursor-pointer">{`Terms & Conditions`}</span>
          </Link>
          <Link href="/privacy">
            <span className="hover:text-zinc-300 cursor-pointer">{`Privacy Policy`}</span>
          </Link>
        </div>
      </div>
    </>
  );
};
