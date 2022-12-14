import { Container, Card, Text, Row } from "@nextui-org/react";
import fs from "fs/promises";
import Head from "next/head";
import ComicCard from "../components/ComicCard";

export default function Home({ latestComics }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Text
          h1
          size={60}
          weight="bold"
          css={{
            textGradient: "45deg, $purple600 -20%, $pink600 100%",
          }}
        >
          Latest Comics:
        </Text>
        <Container
          css={{
            paddingTop: "5px",
            display: "flex",
            flexDirection: "column",
            gap: "$10",
          }}
        >
          {latestComics.map((comic) => (
            <ComicCard key={comic.comicId} comic={comic} />
          ))}
        </Container>
      </main>
    </div>
  );
}

export async function getStaticProps(context) {
  const files = await fs.readdir("./comics");
  const latestComicsFile = files.slice(-8, files.length);

  const promisesReadFiles = latestComicsFile.map(async (file) => {
    const content = await fs.readFile(`./comics/${file}`, "utf-8");
    return JSON.parse(content);
  });

  const latestComics = await Promise.all(promisesReadFiles);

  return {
    props: {
      latestComics,
    },
  };
}
