import React from "react";

interface Props {
  params: { project: string };
}

const page = ({ params: { project } }: Props) => {
  return <div>{project}</div>;
};

export default page;
