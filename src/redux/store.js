import { createStore, combineReducers, applyMiddleware } from "redux";
import registerReducer from "./reducer/registerReducer";
import rootReducer from "./reducer/loginReducer";
import contactReducer from "./reducer/contactReducer";
import profileReducer from "./reducer/profileReducer";
import thunk from "redux-thunk" //sebelum import, pastikan install redux thunk dulu

const allReducer = combineReducers({ //menyimpan banyak reducer menggunakan combine reducer
    registerReducer,
    rootReducer,
    contactReducer,
    profileReducer
})

const store = createStore(allReducer, applyMiddleware(thunk))//langkah awal redux-thunk yaitu applyMidderware

export default store