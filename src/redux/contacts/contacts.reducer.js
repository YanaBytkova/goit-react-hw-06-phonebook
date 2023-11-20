import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  contacts: [], 
  filter: "",
  
};

const contactsSlice = createSlice({
  // Ім'я слайсу
  name: 'contacts',
  // Початковий стан редюсера слайсу
  initialState,
  // Об'єкт редюсерів
  reducers: {
    addContact(state, { payload }) {
      // state.products = [...state.products, payload];
      state.contacts.push(payload);
    },
    deleteContact(state, { payload }) {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },
  //   filterContact(state, { payload }) {
  //       // console.log("payload", payload);
  //       const filterWord = payload;
  //       return state.contacts.filter(contact => contact.nameUser.toLowerCase().includes(filterWord.toLowerCase()));
        
  // },
  inputFilter(state, { payload }) {
    state.filter = payload;
   },
   

},
});

// Генератори екшен криейторів
export const { deleteContact, addContact, inputFilter} = contactsSlice.actions;
// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;













// const intitialState = {
//   products: JSON.parse(localStorage.getItem('products')) ?? productsData, // [{}, {}, ...]
// };

// export const productsReducer = (state = intitialState, action) => {
//   // action -> { type: "products/deleteProduct", payload: "w1231" }
//   // action -> { type: "products/addProduct", payload: { id: "w1231", price: 10, title: "Samsung", ... } }
//   switch (action.type) {
//     case 'products/deleteProduct': {
//       return {
//         ...state,
//         products: state.products.filter(
//           product => product.id !== action.payload
//         ),
//       };
//     }
//     case 'products/addProduct': {
//       // state.products = [...state.products, action.payload];❌
//       return {
//         ...state,
//         products: [...state.products, action.payload], // ✅
//       };
//     }
//     default:
//       return state;
//   }
// };

// export const deleteProduct = (payload) => {
//   return {
//     type: 'products/deleteProduct',
//     payload,
//   };
// }
// export const addProduct = (payload) => {
//   return {
//     type: 'products/addProduct',
//     payload,
//   };
// }