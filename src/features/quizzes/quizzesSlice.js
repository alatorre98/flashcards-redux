import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    quizzes: {

    }
};

const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState,
    reducers: {
        addQuiz: (state, action) => {
            state.quizzes[action.payload.id] = { ...action.payload } 
        },
    },
})

export default quizzesSlice.reducer;
export const { addQuiz } = quizzesSlice.actions;