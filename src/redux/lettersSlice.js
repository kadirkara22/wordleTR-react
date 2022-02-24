import { createSlice } from "@reduxjs/toolkit";
import Words from '../api/word.json'
import Keys from '../api/keyBoard.json';


export const letterSlice = createSlice({
    name: 'letters',
    initialState: {
        wordle: '',
        currentRow: 0,
        currentTile: 0,
        isGameOver: false,
        Keys: Keys.keys,
        guessRows: [
            ['', '', '', '', ''],
            ['', '', '', '', ''],
            ['', '', '', '', ''],
            ['', '', '', '', ''],
            ['', '', '', '', ''],
            ['', '', '', '', '']
        ],
        message: '',
        type: [
            ['', '', '', '', ''],
            ['', '', '', '', ''],
            ['', '', '', '', ''],
            ['', '', '', '', ''],
            ['', '', '', '', ''],
            ['', '', '', '', '']
        ],
        flip: [
            ['', '', '', '', ''],
            ['', '', '', '', ''],
            ['', '', '', '', ''],
            ['', '', '', '', ''],
            ['', '', '', '', ''],
            ['', '', '', '', '']
        ],
        shake: [
            ['', '', '', '', ''],
            ['', '', '', '', ''],
            ['', '', '', '', ''],
            ['', '', '', '', ''],
            ['', '', '', '', ''],
            ['', '', '', '', '']
        ],
        win: [
            ['', '', '', '', ''],
            ['', '', '', '', ''],
            ['', '', '', '', ''],
            ['', '', '', '', ''],
            ['', '', '', '', ''],
            ['', '', '', '', '']
        ],


    },
    reducers: {
        chooseWord: (state, action) => {
            const choosedWord = action.payload;
            state.wordle = choosedWord;
        },
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
                state.shake[state.currentRow][state.currentTile] = ''
            }
        },
        checkRow: (state, action) => {
            const guess = state.guessRows[state.currentRow].join('')
            const rowTiles = state.guessRows[state.currentRow]
            if (!Words.words.includes(guess)) {
                state.message = 'Kelime listesinde yok'


                rowTiles.forEach((tile, index) => {
                    state.shake[state.currentRow][index] = 'shake'
                })
                return
            } else {

                if (state.currentTile > 4) {
                    if (state.wordle === guess) {
                        state.message = 'Harika!'

                        rowTiles.forEach((tile, index) => {

                            state.win[state.currentRow][index] = 'win'

                        })


                        state.isGameOver = true
                        return
                    } else {
                        if (state.currentRow >= 5) {
                            state.isGameOver = true
                            state.message = state.wordle
                            return
                        }

                        if (state.currentRow < 5) {
                            state.currentRow++
                            state.currentTile = 0
                        }
                    }

                }
            }


        },
        flipTile: (state, action) => {
            const rowTiles = state.guessRows[state.currentRow]
            const guessWord = state.guessRows[state.currentRow].join('')
            let checkWordle = state.wordle
            const guess = []

            if (Words.words.includes(guessWord)) {
                rowTiles.forEach((tile, index) => {
                    guess.push({ letter: rowTiles[index], color: 'grey-overlay' })
                })

                guess.forEach((guess, index) => {
                    if (guess.letter === state.wordle[index]) {
                        guess.color = 'green-overlay'
                        checkWordle = checkWordle.replace(guess.letter, '')
                    }
                })
                guess.forEach(guess => {
                    if (checkWordle.includes(guess.letter)) {
                        guess.color = 'yellow-overlay'
                        checkWordle = checkWordle.replace(guess.letter, '')
                    }
                })
                rowTiles.forEach((tile, index) => {
                    state.flip[state.currentRow][index] = 'flip'
                    state.type[state.currentRow][index] = guess[index].color
                    state.Keys = state.Keys.find(item => item.key === guess[index].letter) ?
                        state.Keys.map(item => item.key === guess[index].letter ? { ...item, type: guess[index].color } : item)
                        : [...state.Keys]
                })
            }



        }


    }
});

export const { chooseWord, addLetter, deleteLetter, checkRow, flipTile } = letterSlice.actions;
export default letterSlice.reducer;