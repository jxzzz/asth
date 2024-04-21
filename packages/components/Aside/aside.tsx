const Aside = ({ children }: any) => {
  return (
    <aside className="ice-relative">
      <div className=" ice-h-full">{children}</div>
      <div className="ice-absolute ice-bg-red-600 ice-w-1 ice-h-full ice-top-0 ice-right-0"></div>
    </aside>
  );
};

export default Aside;
