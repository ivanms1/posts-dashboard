import React from "react";
import classNames from "classnames";

import styles from "./Button.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  noStyle?: boolean;
  icon?: any;
}

function Button({
  children,
  className,
  noStyle,
  icon = null,
  ...props
}: ButtonProps) {
  const Icon = icon;

  if (noStyle) {
    return (
      <button
        className={classNames(styles.NoStyleButton, className)}
        {...props}
      >
        {children}
      </button>
    );
  }

  return (
    <button className={classNames(styles.Button, className)} {...props}>
      {icon && <Icon className={styles.Icon} />}
      {children}
    </button>
  );
}

export default Button;
