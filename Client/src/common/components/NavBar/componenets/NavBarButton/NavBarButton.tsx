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
        <a className="navBarButton__button" href={href}>
          {icon}
          {text}
        </a>
      ) : (
        <button className="navBarButton__button" onClick={onClick}>
          {icon}
          {text}
        </button>
      )}
    </div>
  );
};
