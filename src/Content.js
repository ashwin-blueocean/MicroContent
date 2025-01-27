import React from "react";
import styled from "styled-components";

const ContentWrapper = styled.div`
  margin-left: 250px;
  padding: 20px;
  width: calc(100% - 250px);
`;

const Content = () => (
   <div className="">
     <h1>Main Content</h1>
     <p>This is the main content rendered dynamically.</p>
   </div>
);

export default Content;
