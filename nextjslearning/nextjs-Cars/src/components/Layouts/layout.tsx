import MainHeader from "../MainHeader/MainHeader";
import { MainHeaderData } from "../MainHeader/MainHeader.mock";
import Footer from "../Footer/Footer";
import { FooterData } from '../Footer/Footer.mock';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <MainHeader {...MainHeaderData} />
      {children}
      <Footer {...FooterData}/>
    </>
  );
};

export default Layout;
