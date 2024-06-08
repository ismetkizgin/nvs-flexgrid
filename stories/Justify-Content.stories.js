import { justifications, sizes } from './constants';

export default {
  title: 'Layout/Justify Content',
  tags: ['autodocs'],
  render: ({ size, justification }) => {
    return `<div class="nvs-container">
      <div class="nvs-row nvs-jc${size ? `-${size}` : ''}-${justification}">
        <div class="nvs-col-6">
          nvs-jc${size ? `-${size}` : ''}-${justification}
        </div>
      </div>
    </div>`;
  },
  argTypes: {
    size: { control: 'select', options: sizes },
    justification: { control: 'select', options: justifications }
  }
};

export const Default = {
  args: {
    justification: 'center'
  }
};

export const SM = {
  args: {
    size: 'sm',
    justification: 'center'
  }
};

export const MD = {
  args: {
    size: 'md',
    justification: 'center'
  }
};

export const LG = {
  args: {
    size: 'lg',
    justification: 'center'
  }
};

export const XL = {
  args: {
    size: 'xl',
    justification: 'center'
  }
};

export const XXL = {
  args: {
    size: 'xxl',
    justification: 'center'
  }
};
