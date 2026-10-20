import { useEffect } from "react";

export const usePageMeta = (title: string, description: string) => {
  useEffect(() => {
    document.title = title;
    const set = (sel: string, attr: string, key: string) => {
      let el = document.head.querySelector<HTMLMetaElement>(sel);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      return el;
    };
    set('meta[name="description"]', "name", "description").content = description;
    set('meta[property="og:title"]', "property", "og:title").content = title;
    set('meta[property="og:description"]', "property", "og:description").content = description;
  }, [title, description]);
};
