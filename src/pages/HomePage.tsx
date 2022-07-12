import { useLocation } from "react-router-dom";
import Button from "../components/base/Button";
import HeroSection from "../components/sections/HeroSection/HeroSection";
import useContentful from "../hooks/useContentful";

export default function HomePage() {
  const { pathname } = useLocation();
  const data = useContentful(pathname);

  return (
    <div>
      <HeroSection
        title={data?.heroTitle}
        description={data?.heroDescription}
        button={
          <Button to={data?.heroButtonLink || ""}>
            {data?.heroButtonLabel}
          </Button>
        }
      />
    </div>
  );
}
