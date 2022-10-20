import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import AddTimeEntryForm from "./AddTimeEntryForm";
import { AllTestProviders } from "../../tests/render";
import { handlers } from "../../mocks/handlers";
import success from "../../mocks/api/projects/success";
import successPHP from "../../mocks/api/projects/even-more-success";

export default {
  title: "AddTimeEntryForm",
  component: AddTimeEntryForm,
} as ComponentMeta<typeof AddTimeEntryForm>;

const Template: ComponentStory<typeof AddTimeEntryForm> = (args) => (
  <AllTestProviders>
    <AddTimeEntryForm {...args} />
  </AllTestProviders>
);

export const Loading = Template.bind({});
export const Loaded = Template.bind({});
Loaded.parameters = {
  msw: {
    handlers: [success],
  },
};

export const PHP = Template.bind({});
PHP.parameters = {
  msw: {
    handlers: [successPHP],
  },
};
