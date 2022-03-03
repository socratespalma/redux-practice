import React from "react";

export default function CartItem({ data, delOneFromCart, delAllFromCart }) {
  let { id, name, price, quantity } = data;
  return (
    <div style={{ borderBottom: "thin solid gray" }}>
      <h4>{name}</h4>
      <h5>
        ${price}.00 x {quantity} = ${price * quantity}.00
      </h5>
      <button onClick={() => delOneFromCart(id)}>Remove One</button>
      <br />
      <button onClick={() => delAllFromCart(id, true)}>Remove All</button>
      <br />
      <br />
    </div>
  );
}
