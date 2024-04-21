import { InputHTMLAttributes } from 'react';
interface InputProps {
    label?: string;
}
type iceButtonInput = InputProps & InputHTMLAttributes<HTMLInputElement>;
declare const Input: (props: iceButtonInput) => import("react/jsx-runtime").JSX.Element;
export default Input;
