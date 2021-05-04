import { ICard, IToken, mockedToken, mockedResponce } from "./mockedResponse";

export const mockedApiCall = async (): Promise<ICard[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockedResponce);
        }, 500);
    });

}

export const mockedLoginCall = async (): Promise<IToken> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockedToken);
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

export const LoginSubject = new ApiSubject();
export default new ApiSubject();
