import Divider from '../Divider/divider';

const Card = (props: any) => {
  const { title, children } = props;
  return (
    <>
      <div className=" ice-border-gray-300 ice-border ice-rounded-md ice-py-4 ice-px-4 ce-flex-col">
        {<span className="ice-flex ice-font-bold ice-text-2xl">{title}</span>}
        <Divider></Divider>
        {children}
      </div>
    </>
  );
};

export default Card;
