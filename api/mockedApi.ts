import { ICard, mockedResponce } from "./mockedResponse";

export const mockedApiCall = async (): Promise<ICard[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockedResponce); 
        }, 500);
    });

}

class ApiSubject {
    observers = []

    subscribe = (callable) => {
        this.observers.push(callable);
    }

    unsubscribe = (callable) => {
        this.observers = this.observers.filter((observer) => observer !== callable);
    }

    dispatch = () => {
        mockedApiCall().then((cards) => {
            this.observers.forEach((observer) => observer(cards));
        })
    }
}

export default new ApiSubject();

