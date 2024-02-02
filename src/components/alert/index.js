import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
// import { toast } from 'react-toastify'
// toast.configure();

// const showAlert= (alert) => {
//   if(alert.alertType == 'success'){
//     toast.success(alert.msg, {
//           position: toast.POSITION.TOP_RIGHT,
//           autoClose: 10000
//           });
//   }
//   else if(alert.alertType === 'error'){
//      toast.error(alert.msg, {
//           position: toast.POSITION.TOP_RIGHT,
//           autoClose: 10000
//           });
//   }
// }

const AlertComponent = ({ alerts }) => 
  alerts != null && alerts.length > 0 && alerts.map(alert => (
  //   <div key={alert.id}>
  // {showAlert(alert)}
  // </div>
  <div key={alert.id} className={`alert-dismissible alert alert-${alert.alertType} dark fade show`}>
        {alert.msg}
  </div>
))
AlertComponent.propTypes = {
  alerts: PropTypes.array.isRequired,
}

const mapStatetoProps = state => ({
  alerts: state.alert
})

export default connect(mapStatetoProps)(AlertComponent);