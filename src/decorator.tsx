import React from "react";
import { Fragment } from "react";
import { StoryDecorator, Renderable } from "@storybook/react";

export default function decorator(f: StoryDecorator): StoryDecorator {
  return (render, ctx) => {
    if (process.env.NODE_ENV === "test") {
      return <Fragment>{render()}</Fragment>;
    } else {
      return <Fragment>{f(render, ctx)}</Fragment>
    }
  }
}

export const wrap = (Component: React.ComponentType<{}>): StoryDecorator =>
  render => <Component>{render()}</Component>;

export const compose = (...fs: StoryDecorator[]): StoryDecorator =>
  (story, ctx) => fs.reduceRight((acc, f) => f(() => acc, ctx), story() as Renderable);