import { colSizes, sizes } from './constants';

export default {
  title: 'Layout/Columns',
  tags: ['autodocs'],
  render: ({ size, colSize }) => {
    return `<div class="nvs-container">
      <div class="nvs-row">
        <div class="nvs-col${size ? `-${size}` : ''}-${colSize}">
          nvs-col${size ? `-${size}` : ''}-${colSize}
        </div>
        <div class="nvs-col${size ? `-${size}` : ''}-${colSize}">
          nvs-col${size ? `-${size}` : ''}-${colSize}
        </div>
      </div>
    </div>`;
  },
  argTypes: {
    size: { control: 'select', options: sizes },
    colSize: { control: 'select', options: colSizes }
  }
};

export const Default = {
  args: {
    colSize: 6
  }
};

export const SM = {
  args: {
    size: 'sm',
    colSize: 6
  }
};

export const MD = {
  args: {
    size: 'md',
    colSize: 6
  }
};

export const LG = {
  args: {
    size: 'lg',
    colSize: 6
  }
};

export const XL = {
  args: {
    size: 'xl',
    colSize: 6
  }
};

export const XXL = {
  args: {
    size: 'xxl',
    colSize: 6
  }
};
