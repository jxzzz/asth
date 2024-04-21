import classNames from 'classnames';
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
export type ButtonSize = 'lg' | 'sm';
export type ButtonType = 'primary' | 'default' | 'warning' | 'error' | 'info';
interface BaseButtonProps {
  className?: string;
  /**设置 Button 的禁用 */
  disabled?: boolean;
  /**设置 Button 的尺寸 */
  size?: ButtonSize;
  /**设置 Button 的类型 */
  variant?: ButtonType;
  children: React.ReactNode;
  href?: string;
  dashed?: boolean;
}

type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

// 中性色 + 基础色斑
// 产品色板 = 品牌色 功能色板
const Button = (props: ButtonProps) => {
  const {
    children,
    disabled,
    className,
    dashed,
    variant = 'default',
    ...otherProps
  } = props;
  let _className = classNames(
    {
      'ice-border-gray-300': true,
      'ice-border': true,
      'ice-focus:outline-none': true,
      'ice-p-2': true,
      'ice-rounded': true,
      'ice-border-dashed': dashed,
    },
    {
      'hover:ice-bg-slate-100': variant === 'default' && !disabled,
    },
    {
      'disabled:ice-opacity-50 disabled:ice-cursor-not-allowed ': disabled,
    },
    {
      'ice-bg-green-500 ice-text-zinc-50': variant === 'primary' && !dashed,
    },
    {
      'hover:ice-bg-green-600': variant === 'primary' && !dashed && !disabled,
    },

    {
      'ice-bg-white ice-text-green-500 ice-border-green-500':
        variant === 'primary' && dashed,
    },
    {
      ' hover:ice-bg-green-100': variant === 'primary' && dashed && !disabled,
    },

    {
      'ice-bg-blue-500 ice-text-zinc-50': variant === 'info' && !dashed,
    },
    {
      'hover:ice-bg-blue-600': variant === 'info' && !dashed && !disabled,
    },
    {
      'ice-bg-white ice-text-blue-500 ice-border-blue-500':
        variant === 'info' && dashed,
    },
    {
      'hover:ice-bg-blue-100': variant === 'info' && dashed && !disabled,
    },
    {
      'ice-bg-yellow-500 ice-text-zinc-50': variant === 'warning' && !dashed,
    },
    {
      'hover:ice-bg-yellow-600': variant === 'warning' && !dashed && !disabled,
    },
    {
      'ice-bg-white ice-text-yellow-500 ice-border-yellow-500':
        variant === 'warning' && dashed,
    },
    {
      'hover:ice-bg-yellow-100': variant === 'warning' && dashed && !disabled,
    },
    {
      'ice-bg-red-500 ice-text-zinc-50': variant === 'error' && !dashed,
    },
    {
      'hover:ice-bg-red-600': variant === 'error' && !dashed && !disabled,
    },
    {
      'ice-text-red-500 ice-border-red-500 ice-bg-white':
        variant === 'error' && dashed,
    },
    {
      ' hover:ice-bg-red-100': variant === 'error' && dashed && !disabled,
    },
    className
  );
  const _props: any = {
    disabled: disabled,
    className: _className,
    ...otherProps,
  };
  return <button {..._props}>{children}</button>;
};

export default Button;
