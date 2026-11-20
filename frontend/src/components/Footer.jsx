function Footer() {
    const year = new Date().getFullYear();
    return <footer className="footer">© {year} TechShop</footer>;
  }
  
  export default Footer;