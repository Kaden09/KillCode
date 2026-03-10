import { Helmet } from "react-helmet-async";

interface ISeo {
  title: string;
  description: string;
}

function Seo({ title, description }: ISeo) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
}

export default Seo;
