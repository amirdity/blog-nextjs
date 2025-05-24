import React from "react";

const page = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return <div>users {id} detail pages</div>;
};

export default page;
