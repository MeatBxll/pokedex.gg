import { Link } from "react-router-dom";
import "./subHeaderButton.css";

interface SubHeaderButtonProps {
  href?: any;
  text?: string;
  icon?: any;
  isCurrentPage?: boolean;
}

export const SubHeaderButton = (props: SubHeaderButtonProps) => {
  const { href, text, icon, isCurrentPage } = props;
  return (
    <Link
      className={
        isCurrentPage ? "SubHeaderButton__isCurrentPage" : "SubHeaderButton"
      }
      to={href}
    >
      {icon} {text}
    </Link>
  );
};
