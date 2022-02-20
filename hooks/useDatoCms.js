import { StructuredText } from "react-datocms";
import { CopyBlock, dracula } from "react-code-blocks";
import { Image as ResponsiveImage } from "react-datocms";
import VideoPlayer from "../components/videoplayer";

export default function useDatoCms(results) {
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
    if (e.__typename === "VideoBlockRecord") {
      return (
        <div key={i} className="pb-6 lg:pb-0">
          {e.link ? (
            <a target="_blank" rel="noopener noreferrer" href={e.link}>
              <VideoPlayer
                className="mx-auto overflow-hidden rounded-2xl"
                publicId={e.clId}
              />
            </a>
          ) : (
            <VideoPlayer
              className="mx-auto overflow-hidden rounded-2xl"
              publicId={e.clId}
            />
          )}

          <div className="text-center  tracking-tighter text-zinc-300 pt-4">
            {e.caption}
          </div>
        </div>
      );
    }
    if (e.__typename === "ImageBlockRecord") {
      if (e.image.url.indexOf(".mp4") > 0) {
        return (
          <div className="pb-6">
            <a key={i} href={e.link}>
              <video
                className="mx-auto rounded-xl   shadow-xl"
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
              style={{ height: "20rem" }}
              className="relative mx-auto rounded-xl lg:w-1/2 overflow-hidden shadow-xl  pb-12 mt-12"
            >
              <ResponsiveImage
                layout="fill"
                objectFit="cover"
                data={e.image.responsiveImage}
              />
            </div>

            <div className="text-center  tracking-tighter text-zinc-300 lg:pt-4 p-12 pt-4">
              {e.caption}
            </div>
          </>
        );
      }
    }
    if (e.__typename === "CodeBlockRecord") {
      return (
        <div className="font-mono ">
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

  return html.map((e) => {
    return e;
  });
}
