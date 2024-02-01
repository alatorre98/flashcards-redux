import { createSlice } from "@reduxjs/toolkit";
import { addQuiz } from "../quizzes/quizzesSlice";

const initialState = {
    topics: {

    }
};

const topicsSlice = createSlice ({
    name: 'topics',
    initialState,
    reducers: {
        addTopic: (state, action) => {
            state.topics[action.payload.id] = {...action.payload, quizIds: []};
        },
    },
    extraReducers: (builder) => {
        builder.addCase(addQuiz, (state, action) => {
            state.topics[action.payload.topicId].quizIds.push(action.payload.id);
        })
    }
});

export default topicsSlice.reducer;
export const { addTopic } = topicsSlice.actions;