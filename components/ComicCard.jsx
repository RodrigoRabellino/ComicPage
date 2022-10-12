import { Container, Card, Text, Row } from "@nextui-org/react";
import { useRouter } from "next/router";

const ComicCard = ({ comic }) => {
  const router = useRouter();
  return (
    <Card isPressable onClick={() => router.push(`/comic/${comic.comicId}`)}>
      <Card.Header>
        <Text h5>{comic.safe_title}</Text>
      </Card.Header>
      <Card.Image src={comic.img} alt={comic.alt} />
      <Card.Footer
        isBlurred
        css={{
          bgBlur: "#ffffff66",
          borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
          bottom: 0,
          zIndex: 1,
        }}
      >
        <Text small>
          Published: {comic.day}/{comic.month}/{comic.year}
        </Text>
      </Card.Footer>
    </Card>
  );
};

export default ComicCard;
