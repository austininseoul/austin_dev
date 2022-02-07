import { request } from "../../lib/datocms";
import { StructuredText } from "react-datocms";
import { Cta, Footer } from "../../components/components";
import { Logo } from "../../components/logo";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/dracula";
import { CopyBlock, dracula } from "react-code-blocks";

const HOMEPAGE_QUERY = `query {
    allProjects {
        id
        title
        slug
        _status
        _firstPublishedAt
        body {
          ... on TextBlockRecord {
            __typename
            heading
            body {
              value
            }
          }
          ... on ImageBlockRecord {
            __typename
            image {
              url
            }
            caption
            link
          }
          ... on CodeBlockRecord {
            __typename
           markdown {
            value
          }
          }
        }
      }
      _allProjectsMeta {
        count
      }
  }`;

const SLUG_QUERY = `query {
    allProjects {
        slug
      }
  }`;

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
  const html = results.body.map((e, i) => {
    if (e.__typename === "TextBlockRecord") {
      return (
        <>
          {e.heading && <h3 className="pt-4 lg:pt-12">{e.heading}</h3>}
          <div
            key={i}
            className="text-xl  text-zinc-300 whitespace-pre-wrap leading-looser pb-6 lg:mt-2"
          >
            <StructuredText data={e.body} />
          </div>
        </>
      );
    }
    if (e.__typename === "ImageBlockRecord") {
      if (e.image.url.indexOf(".mp4") > 0) {
        return (
          <div className="pb-6">
            <a key={i} href={e.link}>
              <video
                className="mx-auto rounded-xl lg:w-80 w-2/3 shadow-xl"
                src={e.image.url}
                alt={e.caption}
                autoPlay={true}
                muted={true}
              ></video>
            </a>
          </div>
        );
      } else {
        return (
          <>
            <div
              key={i}
              className="relative mx-auto rounded-xl h-80 lg:w-1/2 overflow-hidden shadow-xl"
            >
              <Image
                layout="fill"
                src={e.image.url}
                alt={e.caption}
                objectFit="cover"
              />
            </div>
            <div className="text-center  tracking-tighter text-zinc-300 lg:pt-4 pb-12">
              {e.caption}
            </div>
          </>
        );
      }
    }
    if (e.__typename === "CodeBlockRecord") {
      return (
        <div className="font-mono">
          <CopyBlock
            text={e.markdown.value.document.children[0].code}
            theme={dracula}
            language={e.markdown.value.document.children[0].language}
            codeBlock
            wrapLines
          />
        </div>
      );
    }
  });

  return (
    <>
      <Head>
        <title>{results.title}</title>
      </Head>
      <main id="main" className="container mx-auto min-h-screen">
        <div className="pt-6 lg:pt-24">
          {" "}
          <Logo />
        </div>

        <div id="article" className="container px-6 lg:w-3/5 mx-auto ">
          <h1 className="text-center  tracking-tighter text-zinc-50 pt-12 lg:pt-24 pb-12">
            <Link href="/projects">
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
