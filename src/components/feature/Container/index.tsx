import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className=" md:mx-20 lg:mx-32 xl:mx-20 mx-10 text-white-base">
      {children}
    </div>
  );
};

export default Container;
