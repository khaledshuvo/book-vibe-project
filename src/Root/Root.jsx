import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const Root = () => {
  return (
    <div>
      <div className="mx-[135px] lg:mt-16 mt-4 font-work">
        <div className="h-20 shadow-lg z-10">
          <Nav />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Root;