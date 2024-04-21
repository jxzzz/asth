import classNames from 'classnames';
import Input from '../Input/input';

interface HeaderProps {
  size: 'lg' | 'md' | 'sm';
}

const Header = ({ size = 'md' }: HeaderProps) => {
  const classNmae = classNames(
    `ice-grid ice-grid-cols-5 ice-px-4 ice-py-6 ice-border-b ${size} ice-shadow`
  );

  return (
    <header className={classNmae}>
      <span>avatar</span>
      <div className="ice-col-span-2">
        <Input type="search" placeholder="请输入关键字查询..." />
      </div>
      <ul className="ice-col-span-1 ice-flex ice-justify-between">
        <li className="ice-inline">设计</li>
        <li className="ice-inline">研发</li>
        <li className="ice-inline">组件</li>
        <li className="ice-inline">博客</li>
      </ul>
    </header>
  );
};

export default Header;
