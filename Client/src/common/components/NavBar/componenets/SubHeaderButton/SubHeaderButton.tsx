import "./subHeaderButton.css";

interface SubHeaderButtonProps {
  href?: string;
  text?: string;
  icon?: any;
  isCurrentPage?: boolean;
}

export const SubHeaderButton = (props: SubHeaderButtonProps) => {
  const { href, text, icon, isCurrentPage } = props;
  return (
    <a
      className={
        isCurrentPage ? "SubHeaderButton__isCurrentPage" : "SubHeaderButton"
      }
      href={href}
    >
      {icon} {text}
    </a>
  );
};
