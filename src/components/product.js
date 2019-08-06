import React, { useState } from "react"

const Product = () => {
  const stripe = window.Stripe("pk_test_KYa4gKa5SiWOHMLXCD1P7iMe00SgjJb4ld")
  const [sku, setSku] = useState("sku_FPC5aHenEJbRHA")

  const placeOrder = () => {
    stripe.redirectToCheckout({
      items: [
        {
          sku,
          quantity: 1,
        },
      ],
      successUrl: "http://localhost:8000/success",
      cancelUrl: "http://localhost:8000/cancel",
    })
  }

  return (
    <article>
      <img src="https://picsum.photos/340/400" alt="Level Up TShirt" />
      <h3>Level Up T-Shirt</h3>
      <select value={sku} onChange={e => setSku(e.target.value)}>
        <option value="sku_FPC5aHenEJbRHA">Small</option>
        <option value="sku_FOrwMBHjkQ3c0Q">Medium</option>
        <option value="sku_FPC5t5jwHESLZ4">Large</option>
      </select>
      <button onClick={placeOrder}>Buy Me</button>
    </article>
  )
}

export default Product
