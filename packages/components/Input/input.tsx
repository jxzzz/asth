import { InputHTMLAttributes } from 'react';

interface InputProps {
  label?: string;
}

type iceButtonInput = InputProps & InputHTMLAttributes<HTMLInputElement>;

const Input = (props: iceButtonInput) => {
  const { placeholder, value } = props;
  if (props.type === 'search') {
    return (
      <>
        <div className="ice-flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="ice-w-6 ice-h-6 ice-pr-2 ice-opacity-50 ice-self-end"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>

          <input className="focus:ice-outline-none" {...props}></input>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="ice-flex ice-flex-col ice-relative">
        {props.label && (
          <span className="ice-text-left ice-mb-2">{props.label}</span>
        )}
        <div className="ice-relative ice-w-full">
          <input
            className={`focus:ice-outline-offset-0 
          focus:ice-outline-green-500  
          focus:ice-shadow-custom 
          focus:ice-shadow-green-500 
          ice-border 
          ice-rounded
          ice-p-2
          ice-px-4
          ice-w-full
          `}
            {...props}
            placeholder=""
            value={value}
          ></input>
          {(value === '' || value === undefined) && (
            <div className="ice-p-2 ice-px-4 ice-absolute ice-bottom-0 ice-opacity-45">
              {placeholder}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Input;
