import { useLocation } from "react-router-dom";
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
      />
    </div>
  );
}
