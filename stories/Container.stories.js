import '../src/container.scss';

import { sizes } from './constants';

export default {
  title: 'Layout/Container',
  tags: ['autodocs'],
  render: ({ size }) => {
    const containerClassName = size ? `nvs-container-${size}` : 'nvs-container';
    return `<div class="${containerClassName}">${containerClassName} Container</div>`;
  },
  argTypes: {
    size: { control: 'select', options: sizes }
  }
};

export const Default = {
  args: {}
};

export const SM = {
  args: {
    size: 'sm'
  }
};

export const MD = {
  args: {
    size: 'md'
  }
};

export const LG = {
  args: {
    size: 'lg'
  }
};

export const XL = {
  args: {
    size: 'xl'
  }
};

export const FLUID = {
  args: {
    size: 'fluid'
  }
};
