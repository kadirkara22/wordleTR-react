import { createSlice } from "@reduxjs/toolkit";

export const letterSlice = createSlice({
    name: 'letters',
    initialState: {
        wordle: 'SUPER',
        currentRow: 0,
        currentTile: 0,
        isGameOver: false,
        guessRows: [
            ['', '', '', '', ''],
            ['', '', '', '', ''],
            ['', '', '', '', ''],
            ['', '', '', '', ''],
            ['', '', '', '', ''],
            ['', '', '', '', '']
        ],
        message: ''

    },
    reducers: {
        addLetter: (state, action) => {
            const newLetter = action.payload
            if (state.currentTile < 5 && state.currentRow < 6) {
                state.guessRows[state.currentRow][state.currentTile] = newLetter
                state.currentTile++
            }

        },
        deleteLetter: (state, action) => {
            if (state.currentTile > 0) {
                state.currentTile--
                state.guessRows[state.currentRow][state.currentTile] = ''
            }
        },
        checkRow: (state, action) => {
            const guess = state.guessRows[state.currentRow].join('')
            if (state.currentTile > 4) {
                if (state.wordle === guess) {
                    state.message = 'Harika!'
                    //isGameOver = true
                    return
                } else {
                    if (state.currentRow >= 5) {
                        // isGameOver = true
                        state.message = state.wordle
                        return
                    }

                    if (state.currentRow < 5) {
                        state.currentRow++
                        state.currentTile = 0
                    }
                }

            }
        },
        showMessage: (state, action) => {

        }

    }
});

export const { addLetter, deleteLetter, checkRow } = letterSlice.actions;
export default letterSlice.reducer;