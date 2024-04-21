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
declare const Button: (props: ButtonProps) => import("react/jsx-runtime").JSX.Element;
export default Button;
