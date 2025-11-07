import { cn } from "@/lib/utils";
import * as React from "react";

type ContainerProps = React.HTMLAttributes<HTMLDivElement>

export const Container: React.FC<ContainerProps> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <div
      className={cn("mx-auto px-4 md:px-12 ", className)}
      {...props}
    >
      {" "}
      {children}{" "}
    </div>
  );
};
