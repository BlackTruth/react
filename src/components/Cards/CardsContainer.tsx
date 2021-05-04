import * as React from "react";

import ApiSubject from "../../../api/mockedApi";
import { ICard } from "../../../api/mockedResponse";

import Card from "./Card";
import CardsCreationForm from "./CardsCreationForm";

const CardsContainer: React.FC = () => {
  const [cards, setCards] = React.useState<ICard[]>([]);

  React.useEffect(() => {
    ApiSubject.subscribe(setCards);
    ApiSubject.dispatch();
    return () => {
      ApiSubject.unsubscribe(setCards);
    };
  }, []);

  const onDelete = (id) => {
    setCards(cards.filter(({ id: cardId }) => cardId !== id));
  };

  const onSubmit = ({ gender, title, price, imageUrl }) => {
    const id = new Date().getTime();
    setCards([...cards, { id, gender, title, price, imageUrl }]);
  };

  const renderCards = React.useMemo(() => {
    if (!cards || !cards.length) {
      return <div>No cards yet</div>;
    }
    return cards.map(({ gender, id, imageUrl, price, title }) => {
      return (
        <Card
          key={id}
          id={id}
          gender={gender}
          title={title}
          price={price}
          imageUrl={imageUrl}
          onDelete={onDelete}
        />
      );
    });
  }, [cards]);

  return (
    <div>
      <CardsCreationForm onSubmit={onSubmit} />
      {renderCards}
    </div>
  );
};

export default CardsContainer;
