import { Container, Card, Text, Row } from "@nextui-org/react";
import { useRouter } from "next/router";

const ComicCard = ({ comic }) => {
  const router = useRouter();
  return (
    <Card isPressable onClick={() => router.push(`/comic/${comic.comicId}`)}>
      <Card.Header>{comic.safe_title}</Card.Header>
      <Card.Image src={comic.img} alt={comic.alt} />
      <Card.Footer>
        <Text small>
          Published: {comic.day}/{comic.month}/{comic.year}
        </Text>
      </Card.Footer>
    </Card>
  );
};

export default ComicCard;
