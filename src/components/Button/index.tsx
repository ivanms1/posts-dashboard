import React from "react";
import classNames from "classnames";

import styles from "./Button.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon: any;
}

function Button({ children, className, icon = null, ...props }: ButtonProps) {
  const Icon = icon;
  return (
    <button className={classNames(styles.Button, className)} {...props}>
      {icon && <Icon className={styles.Icon} />}
      {children}
    </button>
  );
}

export default Button;
