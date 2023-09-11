import './button.css';

export interface IButtonProps {
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * Is this the principal call to action on the page?
   */
  label: string;
  /**
   * Button contents
   */
  onClick?: () => void;
  /**
   * Optional click handler
   */
  primary?: boolean;
  /**
   * How large should the button be?
   */
  size?: 'large' | 'medium' | 'small';
}

/**
 * Primary UI component for user interaction
 */
export const createButton = ({
  backgroundColor,
  label,
  onClick,
  primary = false,
  size = 'medium',
}: IButtonProps): HTMLButtonElement => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = label;
  if (onClick) {
    btn.addEventListener('click', onClick);
  }

  const mode = primary
    ? 'storybook-button--primary'
    : 'storybook-button--secondary';
  btn.className = ['storybook-button', `storybook-button--${size}`, mode].join(
    ' ',
  );

  if (backgroundColor) {
    btn.style.backgroundColor = backgroundColor;
  }

  return btn;
};
