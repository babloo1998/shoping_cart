import products from '../Product_details';

const initialState = {
    items: products,
    addedItems:[],
    total: 0
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      let index = state.addedItems.findIndex(item => action.id === item.id);
      const products = [...state.items];
      const prodIndex = products.findIndex(item => action.id === item.id);
      products[prodIndex].quantity -= 1;
      if (index !== -1) {
        const addedItemList = [...state.addedItems];
        const addedItem = addedItemList[index];
        addedItem.quantity += 1;
        return {
          ...state,
          items: products,
          addedItems: addedItemList,
          total: state.total + addedItem.price
        };
      } 
      else 
      {
        let newItemIndex = state.items.findIndex(item => item.id === action.id);
        if (newItemIndex !== -1) {
          let newItem = { ...state.items[newItemIndex] };
          newItem.quantity = 1;
          return {
            ...state,
            items: products,
            addedItems: [...state.addedItems, newItem],
            total: state.total + newItem.price
          };
        }
        return {
          ...state
        };
      }
    }
   
    case "REMOVE_ITEM": 
    {
      let itemToRemove = state.addedItems.find(item => action.id === item.id);
      let new_items = state.addedItems.filter(item => action.id !== item.id);

     
      let newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
      console.log(itemToRemove);
      return {
        ...state,
        addedItems: new_items,
        total: newTotal
      };
    }

    case "ADD_QUANTITY": 
    {
      let index = state.addedItems.findIndex(item => action.id === item.id);
      const products = [...state.items];
      const prodIndex = products.findIndex(item => action.id === item.id);
      products[prodIndex].quantity -= 1;
      if (index !== -1) {
        const addedItemList = [...state.addedItems];
        const addedItem = addedItemList[index];
        addedItem.quantity += 1;
        return {
          ...state,
          items: products,
          addedItems: addedItemList,
          total: state.total + addedItem.price
        };
      }
    }

    case "SUB_QUANTITY": 
    {
      let index = state.addedItems.findIndex(item => action.id === item.id);
      const products = [...state.items];
      const prodIndex = products.findIndex(item => action.id === item.id);
      products[prodIndex].quantity += 1;
      if (index !== -1) {
        const addedItemList = [...state.addedItems];
        const addedItem = addedItemList[index];
        addedItem.quantity -= 1;
        return {
          ...state,
          items: products,
          addedItems: addedItemList,
          total: state.total - addedItem.price
        };
      }
    }

    default: 
    {
      return state;
    }
  }
};

export default cartReducer;