import { useState } from 'react';
import { Input } from '../../../../packages';

const InputDoc = () => {
  const [value, setValue] = useState('');
  const handleChange = (e: any) => {
    debugger;
    setValue(e.target.value);
  };
  return (
    <>
      <Input
        value={value}
        label="基础用法"
        placeholder="请输入文字"
        onChange={handleChange}
      ></Input>
    </>
  );
};

export default InputDoc;
