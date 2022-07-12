import { useLocation } from "react-router-dom";
import useContentful from "../hooks/useContentful";

export default function HomePage() {
  const { pathname } = useLocation();
  const data = useContentful(pathname);

  return <div>{data?.heroTitle}</div>;
}
