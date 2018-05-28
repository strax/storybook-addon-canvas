import React from "react";
import styled, { StyledComponentClass } from "styled-components";
import { StoryDecorator } from "@storybook/react";
import decorator, { wrap } from "./decorator";

export const Centered = styled.div`
  display: flex;
  width: -webkit-fill-available;
  width: -moz-available;
  height: -webkit-fill-available;
  height: -moz-available;
  align-items: center;
  justify-content: center;
`;

const centered: StoryDecorator = decorator(wrap(Centered));

export default centered;
