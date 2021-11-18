import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SecurityQuestions } from '../components/inputs/security-questions/SecurityQuestions'
import { SecurityQuestionColorPicker } from '../components/inputs/security-questions/SecurityQuestionColorPicker'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Security Questions',
    component: SecurityQuestions,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof SecurityQuestions>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SecurityQuestions> = (args) => <SecurityQuestions {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {

};
