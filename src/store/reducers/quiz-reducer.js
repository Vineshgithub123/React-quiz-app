import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentQuestion: 0,
    selectedOption: null
};

const quizSlize = createSlice({
    name: "quiz",
    initialState,
    reducers: {
        setCurrentQuestion: (state, action) => {
            state.currentQuestion = action.payload;
        },
        setSelectedOption: (state, action) => {
            state.selectedOption = action.payload
        }
    }
});

export default quizSlize.reducer;
export const { setCurrentQuestion, setSelectedOption } = quizSlize.actions; 