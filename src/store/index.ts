const store: any = {
  user: {
    firstName: "Kanstantsin",
    lastName: "Kulahin",
  },
  avatar: {
    image:
      "https://avatars.githubusercontent.com/u/60391325?s=400&u=a246f4fe7576ce34a6e702e1a32bd606438b8d17&v=4",
    alt: "avatar",
  },
};

export type Store = typeof store;
export type User = typeof store.user;
export type Avatar = typeof store.avatar;

export default store;
