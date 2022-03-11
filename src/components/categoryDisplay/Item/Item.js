import { Add, KeyboardArrowDown } from "@mui/icons-material";
import React, { useState } from "react";
// import { Container, Header, Entity, Inner, Question, Text } from "./styles  ";
import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
`;
export const Entity = styled.div`
  color: #070707;
  max-width: 690px;
  width: 99%;
  margin: auto;
`;
export const Inner = styled.div`
  margin: auto;
  flex-direction: column;
  display: flex;
`;
export const Question = styled.div`
  font: 25px;
  justify-content: space-between;
  cursor: pointer;
  display: flex;
  font-weight: normal;
  align-items: center;
`;
export const Text = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  background: #c5c6d090;
  transition: max-height 0.23s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 0.9em 0.5em 0.5em 0.5em;
  user-select: none;
  white-space: pre-wrap;
  border-radius: 1%;

  @media (max-width: 550px) {
    font-size: 15px;
    line-height: 25px;
  }
`;
export const Header = styled.h1`
  color: #070707;
  margin-top: 0 !important;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 33px;
  }

  color: #070707;
`;

const QuestionContext = React.createContext();
export default function Item({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}
Item.Header = function ItemHeader({ children, ...restProps }) {
  return <Header {...restProps}> {children}</Header>;
};
Item.Entity = function ItemEntity({ children, ...restProps }) {
  const [open, setOpen] = useState(true);
  return (
    <QuestionContext.Provider value={{ open, setOpen }}>
      <Entity {...restProps}> {children}</Entity>
    </QuestionContext.Provider>
  );
};
Item.Question = function ItemHeader({ children, ...restProps }) {
  const { open, setOpen } = React.useContext(QuestionContext);

  return (
    <Question onClick={() => setOpen((open) => !open)} {...restProps}>
      {children}
      {open ? (
        <h3>
          <KeyboardArrowDown />
        </h3>
      ) : (
        <h3>
          <Add />
        </h3>
      )}
    </Question>
  );
};
Item.Text = function ItemText({ children, ...restProps }) {
  const { open } = React.useContext(QuestionContext);
  return open ? <Text {...restProps}>{children}</Text> : null;
};
