import React from "react";

import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./styles.css";


toast.configure();

export default function Checkout(props) {
  const [product] = React.useState({
    name: props.it,

    price: props.total
  });

  async function handleToken(token) {
    const response = await axios.post(
      "https://bj8jk.sse.codesandbox.io/checkout",
      { token, product }
    );
    const { status } = response.data;
    console.log("Response:", response.data);

    if (status === "success") {
      toast("Payment Successful", { type: "success" });
    } else {
      toast("Something went wrong", { type: "error" });
    }
  }

  return (
    <div className="container">
      <div className="product">
        <h1> </h1>
        <h3>Total amount to be paid {product.price} ₹ </h3>
      </div>
      <StripeCheckout
        stripeKey="pk_test_UhVMPCFBt9zKwjrb9W7mjYsb00CC5VttiX"
        token={handleToken}
        amount={product.price}
        name="nvidia gtx 1660 ti"
        billingAddress
        shippingAddress
      />
    </div>
  );
}
