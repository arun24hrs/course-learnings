import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
    const item = useSelector((store)=> store.cart.items);
    console.log(item)
  return (
    <nav className="header">
      <Link to="/">Home</Link>
      <Link to="/cart">Cart <span style={{fontSize:"10px", padding:"3px", backgroundColor: "red", borderRadius: "50%"}}>{item.length}</span></Link>
    </nav>
  );
}

export default Header;