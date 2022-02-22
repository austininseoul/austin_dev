export const HOMEPAGE_QUERY = `query {
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
              responsiveImage {
                alt
                base64
                bgColor
                title
                srcSet
                webpSrcSet
                sizes
                src
                width
                height
                aspectRatio
              }
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
          ... on VideoBlockRecord {
            __typename
            clId
            caption
            link
          }
        }
      }
      _allProjectsMeta {
        count
      }
  }`;

export const SLUG_QUERY = `query {
    allProjects {
        slug
      }
  }`;
