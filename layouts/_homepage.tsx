import { Footer, Navbar } from "../components";

type Props = {};

const HomepageLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <Navbar />
      <main className="section-container">{children}</main>
      <Footer />
    </>
  );
};

export default HomepageLayout;
