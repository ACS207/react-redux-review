const part = (state = ['item'], action) => {
  switch (action.type) {
    case 'EXAMPLE':
      return [...state, action.payload];
    default:
      return state;
  }
};

export default part;
