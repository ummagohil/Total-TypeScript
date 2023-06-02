import React from "react";

export const Button = (props: { children: React.ReactNode }) => {
  return <button>{props.children}</button>;
};

const Parent = () => {
  return (
    <>
      <button>Hello world!</button>
    </>
  );
};
