const initialState = {
  cards: [
    {
      id: 1,
      title: "Shailesh",
      body: "Lorem ipsum dolor sit amet, consectur amet loevme",
    },
    {
      id: 2,
      title: "Yogesh",
      body: "Lorem ipsum dolor sit amet, consectur amet loevme",
    },
    {
      id: 3,
      title: "John",
      body: "Lorem ipsum dolor sit amet, consectur amet loevme",
    },
  ],
};

const rootReducer = (state = initialState, action) => {
  return state;
};

export default rootReducer;
