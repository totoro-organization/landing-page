import React from "react";
import Head from "react-helmet";

const DOMAIN = "https://totoro-landing.netlify.app";
const MAIN_KEYWORKDS = "bénévolat, association, proximité, totoro, missions";

const PREFIX_TITLE = "Totoro";
const DEFAULT_DESCRIPTION =
  "Totoro est une application de proximité qui te partage des actions proposées par les associations les plus proches de chez toi.";

//   const FAVICON_SOURCE = "/"
const DEFAULT_IMAGE_CARD =
  "https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png";

type HeadTagsProps = {
  title: string;
  description?: string;
  link: string;
};

export default function HeadTags({
  title,
  description = DEFAULT_DESCRIPTION,
  link,
}: HeadTagsProps) {
  const metaLink = `${DOMAIN}${link}`;

  return (
    <Head>
      <html lang="fr" />
      <title>
        {PREFIX_TITLE} - {title}
      </title>

      <meta name="description" content={description} />
      <meta name="keywords" content={MAIN_KEYWORKDS} />

      <link rel="canonical" href={metaLink} />
      {/* <link rel="icon" href={FAVICON_SOURCE} /> */}

      <meta property="og:type" content="website" />
      <meta property="og:url" content={DOMAIN} />
      <meta property="og:title" content={PREFIX_TITLE} />
      <meta property="og:description" content={DEFAULT_DESCRIPTION} />
      <meta property="og:image" content={DEFAULT_IMAGE_CARD} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={DOMAIN} />
      <meta property="twitter:title" content={PREFIX_TITLE} />
      <meta property="twitter:description" content={DEFAULT_DESCRIPTION} />
      <meta property="twitter:image" content={DEFAULT_IMAGE_CARD} />
    </Head>
  );
}
