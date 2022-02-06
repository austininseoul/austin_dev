import { request } from "../../lib/datocms";
import { StructuredText } from "react-datocms";
import { Cta, Footer } from "../../components/components";
import { Logo } from "../../components/logo";
import Link from "next/link";

const HOMEPAGE_QUERY = `query {
    allArticles {
        thumbnail {
          url
        }
        title
        slug
      }
  }`;

export async function getServerSideProps(req, res) {
  const data = await request({
    query: HOMEPAGE_QUERY,
    variables: { limit: 10 },
  });

  return {
    props: { data },
  };
}

export default function Posts({ data }) {
  return (
    <>
      <main id="main" className="container mx-auto min-h-screen">
        <div className="pt-6 lg:pt-24">
          {" "}
          <Logo />
        </div>

        <div id="article" className="container px-6 lg:w-3/5 mx-auto ">
          <h1 className="text-center  tracking-tighter text-zinc-900 pt-12 lg:pt-24 pb-12">
            Blog
          </h1>
          <div className="relative w-full max-w-lg mx-auto">
            <div className="absolute -bottom-8 left-12 w-48 h-48 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob z-0"></div>
            <div className="absolute -bottom-8 -right-4 w-48 h-48 bg-pink-500/20 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob  z-0"></div>
            <div className="absolute -bottom-8 left-48 w-48 h-48 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob  z-0"></div>
          </div>
        </div>
        <div className="px-6 lg:px-0 grid md:grid-cols-3 lg:grid-cols-5 mb-24 gap-6">
          {data.allArticles.map((e, i) => {
            return (
              <>
                <Link href={`/posts/${e.slug}`}>
                  <div
                    key={i}
                    className="flex flex-col justify-between  shadow-xl rounded-xl p-4 cursor-pointer transition duration-300 ease-out hover:ease-in hover:scale-105"
                  >
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
        <Footer />
      </main>
    </>
  );
}
