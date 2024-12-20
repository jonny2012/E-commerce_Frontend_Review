import { Link } from "react-router-dom";
import Wishlist from "assets/header_icons/Wishlist.svg";
import CartIcon from "assets/header_icons/Cart=Off.svg";
import ProfileIcon from "assets/header_icons/user.svg";

export const AccountIcons = () => {
  return (
    <>
      <Link to={"/wishlist"}>
        <Wishlist />
      </Link>
      <Link to={"/cart"}>
        <CartIcon />
      </Link>
      <Link to={"/profile"}>
        <ProfileIcon />
      </Link>
    </>
  );
};
