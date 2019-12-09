const initState = {
  addedItems: [],
  total: 0
}

const cartReducer = (state = initState, action) => {
  if(action.type === 'ADD_TO_CART'){
    let addedItem = action.element
    return {
      ...state,
      total: state.total + parseFloat(addedItem.price),
      addedItems: [...state.addedItems, addedItem]
    }
  }
  else if(action.type === 'REMOVE_FROM_CART'){
    let itemToRemove  = action.element
    let copyArray = state.addedItems
    let index = copyArray.map(el => {return el.name}).indexOf(itemToRemove.name)
    copyArray.splice(index, 1)
    console.log(copyArray)

    return {
      ...state,
      total: state.total - parseFloat(itemToRemove.price),
      addedItems: [...copyArray]
    }
  }
  else{
    return state
  }
}

export default cartReducer