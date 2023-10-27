import cls from "classnames";

import classes from "./index.module.scss";
import {
  BlogButtonProps,
  ButtonVariant,
  PositionIcon,
} from "../types/index.type";

export const BlogButton: React.FC<BlogButtonProps> = ({
  variant = ButtonVariant.normal,
  text,
  positionIcon = undefined,
  icon,
  className,
  onClick = () => null,
  ...props
}) => {
  const renderIcon = () => {
    if (positionIcon === undefined) return;
    return icon;
  };

  return (
    <button
      className={cls(classes.root, className ? classes[className] : "", {
        [classes[variant]]: variant,
        [classes.iconRightClassName]: positionIcon === PositionIcon.right,
        [classes.iconLeftClassName]: positionIcon === PositionIcon.left,
      })}
      onClick={onClick}
      {...props}
    >
      {renderIcon()}
      {text}
    </button>
  );
};

export default BlogButton;
