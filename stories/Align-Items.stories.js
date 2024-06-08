import { alignments, sizes } from './constants';

export default {
  title: 'Layout/Align Items',
  tags: ['autodocs'],
  render: ({ size, alignment }) => {
    return `<div class="nvs-container">
      <div class="nvs-row nvs-ai${size ? `-${size}` : ''}-${alignment}" style="height: 100vh">
        <div class="nvs-col-6">
          nvs-ai${size ? `-${size}` : ''}-${alignment}
        </div>
      </div>
    </div>`;
  },
  argTypes: {
    size: { control: 'select', options: sizes },
    alignment: { control: 'select', options: alignments }
  }
};

export const Default = {
  args: {
    alignment: 'center'
  }
};

export const SM = {
  args: {
    size: 'sm',
    alignment: 'center'
  }
};

export const MD = {
  args: {
    size: 'md',
    alignment: 'center'
  }
};

export const LG = {
  args: {
    size: 'lg',
    alignment: 'center'
  }
};

export const XL = {
  args: {
    size: 'xl',
    alignment: 'center'
  }
};

export const XXL = {
  args: {
    size: 'xxl',
    alignment: 'center'
  }
};
