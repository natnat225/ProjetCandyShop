import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  panier: [],
  total: 0,
};
export const panierSlice = createSlice({
  name: "panier",
  initialState,
  reducers: {
    add: (state, action) => {
      let checkitem = state.panier.find((item) => item.id == action.payload.id);
      let produitShop = action.payload;
      console.log(produitShop);

      if (checkitem) {
        console.log("oui");
        checkitem.qt += 1;
        produitShop.stock -= 1;
        state.total += produitShop.prix;
      } else {
        produitShop.stock -= 1;
        produitShop = { ...produitShop, ["qt"]: 1 };
        state.panier.push(produitShop);
        state.total += produitShop.prix;
      }
    },
    delet: (state, action) => {
        state.panier.forEach(e => {
            if (e.id === action.payload.id) {
                e = {...e, qt: e.qt -= 1}
            }
        });
    //   let itemPanier = action.payload;
    //   console.log(itemPanier.qt);
    //   if (itemPanier.qt > 1) {
    //     itemPanier.qt -= 1;
    //   } else {
    //     state.panier.splice(state.panier.indexOf(itemPanier), 1);
    //   }
    },
  },
});

export const { add, delet } = panierSlice.actions;
export default panierSlice.reducer;

// increment: (state, action) => {
//     //   state.value = state.value + action.payload;
//         state.value++;
//     },

// const buy = (e) => {
//     setMyMoney(myMoney - e.itemPrice);
//     const checkitem = panier.find((x) => x.itemName == e.itemName);
//     e.itemStock--;

//     if (checkitem) {
//       checkitem.unity += 1;
//       setPanier([...panier]);
//     } else {
//       setPanier([...panier, { ...e, unity: 1 }]);
//     }

//     console.log(e);
//   };
