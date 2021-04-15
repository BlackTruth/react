export interface ICard {
    id: number;
    price: number;
    title: string;
    imageUrl: string;
    gender: string;
}

export const mockedResponce: ICard[] = [
    {
        id: 1,
        price: 256,
        title: 'Jacket',
        imageUrl: 'some url',
        gender: 'male',
    },
    {
        id: 2,
        price: 256,
        title: 'Winter Jacket',
        imageUrl: 'some url',
        gender: 'female',
    },
    {
        id: 3,
        price: 20,
        title: 'T-Shirt',
        imageUrl: 'url',
        gender: 'female',
    },
    {
        id: 4,
        price: 40,
        title: 'Pants',
        imageUrl: 'url',
        gender: 'female',
    },
    {
        id: 5,
        price: 100,
        title: 'Shoes',
        imageUrl: 'url',
        gender: 'male',
    },
    {
        id: 6,
        price: 100,
        title: 'Sneakers',
        imageUrl: 'url',
        gender: 'male',
    },
];
