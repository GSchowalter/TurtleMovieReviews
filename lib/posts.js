import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".json" from file name to get id
    const id = fileName.replace(/\.json$/, "");
    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const raw_data = fs.readFileSync(fullPath, "utf8");
    const fileContents = JSON.parse(raw_data);

    // Combine the data with the id
    return {
      id,
      ...fileContents,
    };
  });
  // Sort posts by date
  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'bodiesbodiesbodies2022'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'onthecountofthree2022'
  //     }
  //   }
  // ]
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.json$/, ""),
      },
    };
  });
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.json`);
  const raw_data = fs.readFileSync(fullPath, "utf8");
  const fileContents = JSON.parse(raw_data);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(fileContents.review);
  const contentHtml = processedContent.toString();

  // Combine the data with the id
  return {
    id,
    contentHtml,
    ...fileContents,
  };
}
