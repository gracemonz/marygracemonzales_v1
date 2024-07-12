import { ReactNode } from "react";

export const Header = ({ children }: Readonly<{ children: ReactNode }>) => {
  return <h1 className="text-5xl">{children}</h1>;
};

export const Subheader = () => {};

export const BlockQoute = () => {};

export const Links = () => {};

export const BodyText = ({
  children,
  ...props
}: { children: ReactNode } & React.HTMLAttributes<HTMLParagraphElement>) => {
  return <p {...props}>{children}</p>;
};

export const Caption = ({
  children,
  ...props
}: { children: ReactNode } & React.HTMLAttributes<HTMLParagraphElement>) => {
  return (
    <p className="text-xl" {...props}>
      {children}
    </p>
  );
};

export const List = () => {};

export const SmallText = () => {};
