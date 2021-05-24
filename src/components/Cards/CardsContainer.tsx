import * as React from "react";
import { Component } from "react";

import ApiSubject from "../../../api/mockedApi";
import { ICard } from "../../../api/mockedResponse";

import Card from "./Card";

export default class CardsContainer extends Component<any, { cards: ICard[] }> {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
    };
  }

  componentDidMount() {
    ApiSubject.subscribe(this.updateCardsState);
    ApiSubject.dispatch();
  }

  componentWillUnmount() {
    ApiSubject.unsubscribe(this.updateCardsState);
  }

  updateCardsState = (cards: ICard[]) => this.setState({ cards });

  renderCards = () => {
    const { cards } = this.state;
    if (!cards || !cards.length) {
      return <div>No cards yet</div>;
    }
    return cards.map((card: ICard) => {
      return (
        <Card
          key={card.id}
          card={card}
        />
      );
    });
  };

  render() {
    const { renderCards } = this;
    return <div>{renderCards()}</div>;
  }
}
