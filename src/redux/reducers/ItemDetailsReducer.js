import { ADD_TO_CART_ITEM_DETAILS, RMV_CART_ITEM_DETAILS, INCREMENT_QUANTITY_ITEM_DETAILS, DECREMENT_QUANTITY_ITEM_DETAILS, ADD_TO_WISHLIST_ITEM_DETAILS, RMV_FROM_WISHLIST_ITEM_DETAILS } from "../actions/CartAction";

const initialState = {
    itemDetailsCartItems: [],
    itemDetailsWishList: [],
};

export const itemDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART_ITEM_DETAILS:
            // Check if the item already exists in the cart
            const existingItem = state.itemDetailsCartItems.find(item => item.link === action.payload.link);

            if (existingItem) {
                // If the item already exists, increment its quantity
                return {
                    ...state,
                    itemDetailsCartItems: state.itemDetailsCartItems.map(item =>
                        item.link === action.payload.link ? { ...item, quantity: item.quantity + 1 } : item
                    ),
                };
            } else {
                // If the item doesn't exist, add it to the cart
                return {
                    ...state,
                    itemDetailsCartItems: [...state.itemDetailsCartItems, { ...action.payload, quantity: 1 }],
                };
            }


        case RMV_CART_ITEM_DETAILS:
            // Logic for removing items from the cart specific to ItemDetailsPage
            const updatedCartItemDetails = state.itemDetailsCartItems.filter((item) => item.link !== action.payload);
            return {
                ...state,
                itemDetailsCartItems: updatedCartItemDetails,
            }

        case INCREMENT_QUANTITY_ITEM_DETAILS:
            // Logic for incrementing quantity of an item
            return {
                ...state,
                itemDetailsCartItems: state.itemDetailsCartItems.map((item) =>
                    item.link === action.payload ? { ...item, quantity: item.quantity + 1 } : item
                ),
            };

        case DECREMENT_QUANTITY_ITEM_DETAILS:
            // Logic for decrementing quantity of an item
            return {
                ...state,
                itemDetailsCartItems: state.itemDetailsCartItems.map((item) =>
                    item.link === action.payload ? { ...item, quantity: item.quantity - 1 } : item
                ).filter(item => item.quantity > 0),
            };

        case ADD_TO_WISHLIST_ITEM_DETAILS:
            // Check if the product is already in the wishlist
            if (state.itemDetailsWishList?.some(item => item.link === action.payload.link)) {
                // If it is, return the current state without adding a duplicate entry
                return state;
            }

            return {
                ...state,
                itemDetailsWishList: [...state.itemDetailsWishList, action.payload],
            };

        case RMV_FROM_WISHLIST_ITEM_DETAILS:
            // Logic for removing item from wishlist
            const updatedWishlistItems = state.itemDetailsWishList.filter((item) => item.link !== action.payload);
            return {
                ...state,
                itemDetailsWishList: updatedWishlistItems,
            };
        default:
            return state;
    }
};