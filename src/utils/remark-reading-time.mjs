import getReadingTime from "reading-time";
import { toString } from "mdast-util-to-string";

export function remarkReadingTime() {
  return function (tree, { data }) {
    const textOnPage = toString(tree);
    const readingTime = getReadingTime(textOnPage);
    const timeToRead = Math.ceil(readingTime.minutes)
    data.astro.frontmatter.readingTime = "زمان مطالعه: " + timeToRead + " دقیقه";
  };
}