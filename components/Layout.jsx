import Head from 'next/head';
import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ title, children }) => {
  // const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <Head>
        <title>
          {title ? title + ' - Brainy Dictionary' : 'Brainy Dictionary'}
        </title>
        <meta name="description" content="Open Dictionary Web App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <Navbar />
          {/* <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> */}
        </header>
        <main className="mx-32">{children}</main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default Layout;
