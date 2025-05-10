import { Link } from "react-router-dom";
import "./NavBarButton.css";

interface MainHeaderButtonProps {
  icon?: any;
  text?: string;
  href?: string;
  onClick?: any;
}

export const NavBarButton = (props: MainHeaderButtonProps) => {
  const { icon, text, href, onClick } = props;
  return (
    <div>
      {href ? (
        <Link className="navBarButton__button" to={href}>
          {icon}
          {text}
        </Link>
      ) : (
        <button className="navBarButton__button" onClick={onClick}>
          {icon}
          {text}
        </button>
      )}
    </div>
  );
};
