import styles from "./Action.module.scss";

import React, { forwardRef } from "react";
import classNames from "classnames";

export const Action = forwardRef(function Action(
  { active, className, cursor, style, ...props },
  ref
) {
  return (
    <button
      ref={ref}
      {...props}
      className={classNames(styles.Action, className)}
      tabIndex={0}
      style={{
        ...style,
        cursor,
        "--fill": active?.fill,
        "--background": active?.background,
      }}
    />
  );
});
