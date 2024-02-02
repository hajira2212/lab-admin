import React, { Fragment } from 'react';
import Loader from "../layout/loader";
import Header from '../layout/header'
import Sidebar from '../layout/sidebar'
import Footer from '../layout/footer'
import {ToastContainer} from 'react-toastify'
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';

const App = ({children}) => {
  console.warn = () => {}
  return (
    <Fragment>
      <Loader/>
      <div className="page-wrapper compact-wrapper" id="pageWrapper">
      <Header/>
      <div className="page-body-wrapper sidebar-icon">
        <Sidebar/>
        <div className="page-body">
          {children}
        </div>
        <Footer/>
        </div>
      </div>
      <ToastContainer/>
    </Fragment>
  );
}

export default App;