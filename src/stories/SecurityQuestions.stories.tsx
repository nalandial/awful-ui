import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ZipCodeDropdown } from '../components/inputs/zipCode/ZipCodeDropdown'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Zip Code Dropdown',
    component: ZipCodeDropdown,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof ZipCodeDropdown>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ZipCodeDropdown> = (args) => <ZipCodeDropdown {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    label: 'Select zip code:',
    testId: 'foo'
};
