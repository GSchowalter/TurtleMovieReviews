import fs from "fs";
import path from "path";
import { remark } from "remark";
import html from "remark-html";
import { MongoClient } from "mongodb";
const postsDirectory = path.join(process.cwd(), "posts");

async function listDatabases(client) {
  let databasesList = await client.db().admin().listDatabases();

  databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
}

export async function getSortedPostsData() {
  // Get file names under /posts
  // const fileNames = fs.readdirSync(postsDirectory);
  // const allPostsData = fileNames.map((fileName) => {
  //   // Remove ".json" from file name to get id
  //   const id = fileName.replace(/\.json$/, "");
  //   // Read markdown file as string
  //   const fullPath = path.join(postsDirectory, fileName);
  //   const raw_data = fs.readFileSync(fullPath, "utf8");
  //   const fileContents = JSON.parse(raw_data);

  //   // Combine the data with the id
  //   return {
  //     id,
  //     ...fileContents.review,
  //   };
  // });

  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  await listDatabases(client);

  const reviews = await client
    .db("TurtleReviews")
    .collection("reviews")
    .find({})
    .toArray();

  return JSON.parse(JSON.stringify(reviews));
}

// // Sort posts by date
// return allPostsData.sort(({ date: a }, { date: b }) => {
//   if (a < b) {
//     return 1;
//   } else if (a > b) {
//     return -1;
//   } else {
//     return 0;
//   }
// });

export async function getAllPostIds() {
  // const fileNames = fs.readdirSync(postsDirectory);
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const reviews = await client
    .db("TurtleReviews")
    .collection("reviews")
    .find({})
    .toArray();

  const reviewNames = reviews.map((review) => {
    return review.title.replace(/\s/g, "");
  });
  console.log("getAllPostIds:");
  console.log(reviewNames);
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
  return reviewNames.map((fileName) => {
    return {
      params: {
        id: fileName,
      },
    };
  });
}

// We'll needto querry the database based on the title of the movie
// This could be a problem for movies with the same name
// the room and the room for exampel
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
