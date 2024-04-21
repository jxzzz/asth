import { Header, Aside } from '../../packages';
import { Outlet, Link } from 'react-router-dom';
function App() {
  return (
    <>
      <Header size="md"></Header>

      <div className="ice-grid ice-grid-cols-5">
        <Aside>
          <ul>
            <Link to={`/button`}>
              <li className="ice-p-3 ice-pl-8 hover:ice-bg-slate-100 hover:ice-cursor-pointer">
                Button
              </li>
            </Link>
            <Link to={`/input`}>
              <li className="ice-p-3 ice-pl-8 hover:ice-bg-slate-100 hover:ice-cursor-pointer">
                Input
              </li>
            </Link>

            <Link to={`/card`}>
              <li className="ice-p-3 ice-pl-8 hover:ice-bg-slate-100 hover:ice-cursor-pointer">
                Card
              </li>
            </Link>
            <Link to={`/header`}>
              <li className="ice-p-3 ice-pl-8 hover:ice-bg-slate-100 hover:ice-cursor-pointer">
                Header
              </li>
            </Link>
          </ul>
        </Aside>

        <main className="ice-grid ice-col-span-3 ice-m-2">
          <div>
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
