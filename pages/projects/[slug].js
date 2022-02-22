import { request } from "../../lib/datocms";
import { Cta, Footer, Navbar } from "../../components/components";
import { Logo } from "../../components/logo";
import Link from "next/link";
import Head from "next/head";
import useDatoCms from "../../hooks/useDatoCms";
import { HOMEPAGE_QUERY, SLUG_QUERY } from "../../consts/queries";

export async function getStaticProps(ctx) {
  const data = await request({
    query: HOMEPAGE_QUERY,
    variables: { limit: 10 },
  });

  const [results] = data.allProjects.filter((e) => {
    if (e.slug === ctx.params.slug) return e;
  });
  return {
    props: { results },
  };
}

export async function getStaticPaths() {
  const data = await request({
    query: SLUG_QUERY,
    variables: { limit: 10 },
  });

  const paths = data.allProjects.map((e) => {
    return { params: { slug: e.slug } };
  });

  return {
    paths: paths,
    fallback: false,
  };
}

export default function Slug({ results }) {
  const html = useDatoCms(results);

  return (
    <>
      <Head>
        <title>{results.title}</title>
      </Head>
      <Navbar />
      <main id="main" className="container mx-auto min-h-screen">
        <div className="pt-24">
          {" "}
          <Logo />
        </div>

        <div id="article" className="container px-6 lg:w-3/5 mx-auto ">
          <h1 className="text-center  tracking-tighter text-zinc-50 pt-12 lg:pt-24 pb-12">
            <Link passHref={true} href="/projects">
              <p className="text-center text-2xl tracking-normal text-zinc-300 cursor-pointer pb-4 decoration-4 underline underline-offset-2 decoration-orange-500">
                projects
              </p>
            </Link>
            {results.title}
          </h1>
          {html.map((e) => {
            return e;
          })}
        </div>

        <Footer />
      </main>
    </>
  );
}
