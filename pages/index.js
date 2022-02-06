import Head from "next/head";
import {
  Projects,
  Article,
  Hero,
  Youtube,
  Footer,
  Navbar,
  Roadmap,
} from "../components/components";
import { request } from "../lib/datocms";
import { Logo } from "../components/logo";

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

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>{`austin w's blog`}</title>
      </Head>
      <div className="">
        <Navbar></Navbar>
        <main id="main" className="container mx-auto min-h-screen">
          <div className="pt-24">
            {" "}
            <Logo />
          </div>
          <Hero />
          <Article />
          <Projects data={data} />
          <Roadmap />
          <Youtube />
          <Footer />
        </main>

        <footer className=""></footer>
      </div>
    </>
  );
}
