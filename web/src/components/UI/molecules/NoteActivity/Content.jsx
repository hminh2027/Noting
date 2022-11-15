import React from "react";

export const Content = ({ snapshot }) => {
  const { description } = snapshot;
  return <div>{description}</div>;
};
