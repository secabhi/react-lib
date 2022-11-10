import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import MyTextBox from './MyTextBox';

const meta: ComponentMeta<typeof MyTextBox> = {
    title: 'Design System/MyTextBox',
    component: MyTextBox,
};
export default meta;

export const Primary: ComponentStoryObj<typeof MyTextBox> = {};
