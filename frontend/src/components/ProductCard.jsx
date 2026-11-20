function ProductCard() {
    const price = 79.99;
  
    return (
      <article className="product-card">
        <h2>Wireless Keyboard</h2>
        <p>Compact keyboard with Bluetooth and USB-C.</p>
        <p className="price">€{price.toFixed(2)}</p>
        <button>Add to cart</button>
      </article>
    );
  }
  
  export default ProductCard;