
import { Helmet } from "react-helmet-async";

export default function SEO({
  title,
  description,
  path = "/",
  image,
}) {
  const siteUrl = window.location.origin;
  const canonical = `${siteUrl}${path}`;

  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />

      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="AJ MARINE SERVICES" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />

      {image && (
        <meta property="og:image" content={image} />
      )}
    </Helmet>
  );
}
