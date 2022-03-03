import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, clearCart, delFromCart } from "../actions/shoppingActions";
import CartItem from "../components/CartItem";
import ProductItem from "../components/ProductItem";

export default function ShoppingCartPage() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const { products, cart } = state.shopping;

  return (
    <div>
      <h1>Shopping cart</h1>
      <h3>Products</h3>
      <article className="box grid-responsive">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            data={product}
            addToCart={() => dispatch(addToCart(product.id))}
          />
        ))}
      </article>
      <h3>Cart</h3>
      <article className="box">
        <button onClick={() => dispatch(clearCart())}>Clear cart</button>
        {cart.map((item, index) => (
          <CartItem
            key={index}
            data={item}
            delOneFromCart={() => dispatch(delFromCart(item.id))}
            delAllFromCart={() => dispatch(delFromCart(item.id, true))}
          />
        ))}
      </article>
    </div>
  );
}
