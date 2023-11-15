const reducer = (state, action) => {
    switch (action.type) {
        case 'add_to_watchlist':
            let products = [...state, action.item]
        localStorage.setItem("data", JSON.stringify(products ))
            return products
        default:
            return state
    }
}
export default reducer