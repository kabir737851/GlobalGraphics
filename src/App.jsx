import React from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import 'antd/dist/reset.css';
import './App.css';

const App = () => {
  return (
    <>
      <TopBar />
      <Header />
      {/* Future sections like Home, Footer, etc. */}
    </>
  );
};

export default App;
