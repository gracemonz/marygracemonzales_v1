import { ReactNode } from "react";

export const Header = ({
  children,
  ...props
}: { children: ReactNode } & React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h1 className="text-6xl" {...props}>
      {children}
    </h1>
  );
};

export const Subheader = ({
  children,
  ...props
}: { children: ReactNode } & React.HtmlHTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h2 className="text-xl capitalize text-flamingo font-semibold" {...props}>
      {children}
    </h2>
  );
};

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
    <p className={`text-2xl ${props.className}`} {...props}>
      {children}
    </p>
  );
};

export const Highlight = ({
  children,
  ...props
}: { children: ReactNode } & React.HTMLAttributes<HTMLParagraphElement>) => {
  return (
    <span
      className="transition ease-in-out font-semibold text-flamingo hover:text-muave"
      {...props}
    >
      {children}
    </span>
  );
};

export const List = () => {};

export const SmallText = ({
  children,
  ...props
}: { children: ReactNode } & React.HTMLAttributes<HTMLParagraphElement>) => {
  return (
    <p className="text-sm" {...props}>
      {children}
    </p>
  );
};
