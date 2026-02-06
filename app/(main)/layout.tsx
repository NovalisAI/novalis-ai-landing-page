import Chatbot from "@/components/chatbot";
import React from "react";

const MainLayout = (props: React.PropsWithChildren) => {
  return (
    <>
      <Chatbot />
      {props.children}
    </>
  );
};

export default MainLayout;
