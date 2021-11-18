import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PhoneSlider } from '../components/inputs/phone/PhoneSlider';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/PhoneSlider',
    component: PhoneSlider,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof PhoneSlider>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PhoneSlider> = (args) => <PhoneSlider {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    label: 'Phone number:',
    testId: 'foo'
};
