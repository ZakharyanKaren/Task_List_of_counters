import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        TechSpecialistsData: [
            {
                id: 1,
                name: "Front-end",
                list: [
                    {
                        id: 1,
                        name: "Vue.js",
                        count: 0,
                        price: 100,
                    },
                    {
                        id: 2,
                        name: "Angular",
                        count: 0,
                        price: 100,
                    },
                    {
                        id: 3,
                        name: "React.js",
                        count: 0,
                        price: 100,
                    },
                    {
                        id: 4,
                        name: "JavaScript",
                        count: 0,
                        price: 100,
                    },
                ],
            },
            {
                id: 2,
                name: "Back-end",
                list: [
                    {
                        id: 5,
                        name: ".NET",
                        count: 0,
                        price: 100,
                    },
                    {
                        id: 6,
                        name: "Java",
                        count: 0,
                        price: 100,
                    },
                    {
                        id: 7,
                        name: "Python",
                        count: 0,
                        price: 100,
                    },
                    {
                        id: 8,
                        name: "Scala",
                        count: 0,
                        price: 100,
                    },
                    {
                        id: 9,
                        name: ".Ruby",
                        count: 0,
                        price: 100,
                    },
                    {
                        id: 10,
                        name: "Rust",
                        count: 0,
                        price: 100,
                    },
                    {
                        id: 11,
                        name: "C++",
                        count: 0,
                        price: 100,
                    },
                    {
                        id: 12,
                        name: "Node.js",
                        count: 0,
                        price: 100,
                    },
                    {
                        id: 13,
                        name: "Golang",
                        count: 0,
                        price: 100,
                    },
                    {
                        id: 14,
                        name: "PHP",
                        count: 0,
                        price: 100,
                    },
                ],
            },
            {
                id: 3,
                name: "Mobilee",
                list: [
                    {
                        id: 15,
                        name: "Android",
                        count: 0,
                        price: 100,
                    },
                    {
                        id: 16,
                        name: "React Native",
                        count: 0,
                        price: 100,
                    },
                    {
                        id: 17,
                        name: "iOS",
                        count: 0,
                        price: 100,
                    },
                    {
                        id: 18,
                        name: "Xamarin",
                        count: 0,
                        price: 100,
                    },
                    {
                        id: 19,
                        name: "Ionic",
                        count: 0,
                        price: 100,
                    },
                    {
                        id: 20,
                        name: "Flutter",
                        count: 0,
                        price: 100,
                    },
                ],
            },
            {
                id: 4,
                name: "Database",
                list: [
                    {
                        id: 21,
                        name: "PostgreSQL",
                        count: 0,
                        price: 100,
                    },
                    {
                        id: 22,
                        name: "MySQL",
                        count: 0,
                        price: 100,
                    },
                    {
                        id: 23,
                        name: "Oracle",
                        count: 0,
                        price: 100,
                    },
                    {
                        id: 24,
                        name: "Microsoft Azure SQL Database",
                        count: 0,
                        price: 100,
                    },
                    {
                        id: 25,
                        name: "MsSQL",
                        count: 0,
                        price: 100,
                    },
                    {
                        id: 26,
                        name: "NoSQL",
                        count: 0,
                        price: 100,
                    },
                ],
            },
        ],
    },
    reducers: {
        increment: (state, action) => {
            let idx = state.TechSpecialistsData.findIndex(section => section.id === action.payload.sectionId)

            state.TechSpecialistsData[idx].list.forEach(item => {
                if (item.id === action.payload.itemId) {
                    item.count += +action.payload.value
                }
            })
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
})

export const selectSpecialistsData = (state) => state.counter.TechSpecialistsData;


// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer