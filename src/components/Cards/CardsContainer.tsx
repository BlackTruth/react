import * as React from "react";

import ApiSubject from "../../../api/mockedApi";
import { ICard } from "../../../api/mockedResponse";

import Card from "./Card";
import CardsCreationForm from "./CardsCreationForm";

interface ICardData {
  gender: string;
  title: string;
  price: number;
  imageUrl: string;
}

const CardsContainer: React.FC = () => {
  const [cards, setCards] = React.useState<ICard[]>([]);

  React.useEffect(() => {
    ApiSubject.subscribe(setCards);
    ApiSubject.dispatch();
    return () => {
      ApiSubject.unsubscribe(setCards);
    }
  }, []);

  const onDelete = (id: number): void => {
    setCards(cards.filter(({ id: cardId }) => cardId !== id));
  }

  const onSubmit = (cardData: ICardData): void => {
    const id = new Date().getTime();
    setCards([...cards, { id, ...cardData }]);
  };

  const renderCards = React.useMemo(() => {
    if (!cards || !cards.length) {
      return <div>No cards yet</div>;
    }
    return cards.map((card: ICard) => {
      return (
        <Card
          key={card.id}
          card={card}
          onDelete={onDelete}
        />
      );
    });
  }, [cards]);

  return (<div>
    <CardsCreationForm onSubmit={onSubmit} />
    {renderCards}
  </div>);
}

export default CardsContainer;