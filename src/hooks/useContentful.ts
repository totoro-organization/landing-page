import { useEffect, useState } from "react";
import { PageFields } from "../config/contentful.types";
import { contentfulClient } from "../config/contentfulClient";

export default function useContentful(path: string) {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    contentfulClient
      .getEntries()
      .then((entry) => setData(entry.items))
      .catch((err) => console.error(err));
  }, []);

  return data?.filter((item: PageFields) => item.fields.path === path)[0]
    .fields;
}
