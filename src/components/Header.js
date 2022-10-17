import React from 'react';
import NavTabs from './NavTabs';

const Header = ({currentPage, handlePageChange}) => {
    return (
      <header className="bg-secondary text-light mb-4 py-3 flex-row align-center">
        <div className="container flex-row justify-space-between-lg justify-center align-center">
          <h1 className="m-0">Jordan Thomas Heidlage</h1>
          {/* <p className="m-0">sample text</p> */}
          <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        </div>
      </header>
    );
  };
  
  export default Header;