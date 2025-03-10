import { Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";

// Register your components for use in the Builder.io Visual Editor
// https://www.builder.io/c/docs/custom-react-components

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
      defaultValue: 99,
    },
  ],
});

// You can register more components here
