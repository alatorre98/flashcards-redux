import { configureStore } from "@reduxjs/toolkit";
import topicsReducer from '../features/topics/topicsSlice';
import cardsReducer from '../features/cards/cardsSlice';
// import reducers
import quizzezReducer from '../features/quizzes/quizzesSlice';

export default configureStore({
  reducer: {
    topics: topicsReducer,
    quizzes: quizzezReducer,
    cards: cardsReducer
  },
});
