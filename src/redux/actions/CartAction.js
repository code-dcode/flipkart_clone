export const ADD_TO_CART = 'ADD_TO_CART';
export const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST';
export const RMV_CART = "RMV_CART";
export const RMV_FROM_WISHLIST = 'RMV_FROM_WISHLIST';
export const INCREMENT_QUANTITY = "INCREMENT_QUANTITY";
export const DECREMENT_QUANTITY = "DECREMENT_QUANTITY";
export const ADD_TO_CART_ITEM_DETAILS = 'ADD_TO_CART_ITEM_DETAILS';
export const RMV_CART_ITEM_DETAILS = 'RMV_CART_ITEM_DETAILS';
export const INCREMENT_QUANTITY_ITEM_DETAILS = 'INCREMENT_QUANTITY_ITEM_DETAILS';
export const DECREMENT_QUANTITY_ITEM_DETAILS = 'DECREMENT_QUANTITY_ITEM_DETAILS';
export const ADD_TO_WISHLIST_ITEM_DETAILS = 'ADD_TO_WISHLIST_ITEM_DETAILS';
export const RMV_FROM_WISHLIST_ITEM_DETAILS = 'RMV_FROM_WISHLIST_ITEM_DETAILS';

export const addToCart = (product) => ({
    type: ADD_TO_CART,
    payload: product,
});

export const removeFromCart = (productId) => {
    return {
        type: RMV_CART,
        payload: productId,
    };
};

export const incrementQuantity = (productId) => ({
    type: INCREMENT_QUANTITY,
    payload: productId,
});

export const decrementQuantity = (productId) => ({
    type: DECREMENT_QUANTITY,
    payload: productId,
});

export const addToWishlist = (product) => ({
    type: ADD_TO_WISHLIST,
    payload: product,
});

export const removeFromWishlist = (productId) => {
    return {
        type: RMV_FROM_WISHLIST,
        payload: productId,
    };
};

export const addToCartItemDetails = (item) => ({
    type: ADD_TO_CART_ITEM_DETAILS,
    payload: item,
});

export const removeFromCartItemDetails = (productId) => {
    return {
        type: RMV_CART_ITEM_DETAILS,
        payload: productId,
    };
};

export const incrementQuantityCartItemDetails = (productId) => {
    return {
        type: INCREMENT_QUANTITY_ITEM_DETAILS,
        payload: productId,
    };
};

export const decrementQuantityCartItemDetails = (productId) => {
    return {
        type: DECREMENT_QUANTITY_ITEM_DETAILS,
        payload: productId,
    };
};

export const addToWishlistItemDetails = (product) => {
    return {
        type: ADD_TO_WISHLIST_ITEM_DETAILS,
        payload: product,
    }
};

export const removeFromWishlistItemDetails = (productId) => {
    return {
        type: RMV_FROM_WISHLIST_ITEM_DETAILS,
        payload: productId,
    };
};