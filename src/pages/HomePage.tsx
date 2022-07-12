import { useLocation } from "react-router-dom";
import Button from "../components/base/Button";
import { Layout, Main } from "../components/layouts/GlobalLayout";
import Footer from "../components/layouts/subComponents/Footer";
import Header from "../components/layouts/subComponents/Header";
import HeroSection from "../components/sections/HeroSection/HeroSection";
import OrganizationPartners from "../components/sections/OrganizationPartners/OrganizationPartners";
import ProductSection from "../components/sections/ProductSection/ProductSection";
import useContentful from "../hooks/useContentful";

export default function HomePage() {
  const { pathname } = useLocation();
  const data = useContentful(pathname);

  console.log(data);

  return (
    <Layout>
      <Header />

      <Main>
        <HeroSection
          title={data?.heroTitle}
          description={data?.heroDescription}
          button={
            <Button to={data?.heroButtonLink || ""}>
              {data?.heroButtonLabel}
            </Button>
          }
        />

        <ProductSection
          title={data?.firstSectionTitle}
          description={data?.firstSectionDescription}
          screen={data?.firstSectionImage.fields.file.url}
          button={
            <Button to={data?.heroButtonLink || ""}>
              {data?.heroButtonLabel}
            </Button>
          }
          direction={data?.firstSectionIsRight ? "right" : "left"}
        />

        <OrganizationPartners />

        {/* TODO: Add second section */}
        <ProductSection
          title={data?.firstSectionTitle}
          description={data?.firstSectionDescription}
          screen={data?.firstSectionImage.fields.file.url}
          button={
            <Button to={data?.heroButtonLink || ""}>
              {data?.heroButtonLabel}
            </Button>
          }
          direction={data?.firstSectionIsRight ? "right" : "left"}
        />
      </Main>

      <Footer />
    </Layout>
  );
}
