import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as action from '../Booking/actions';
import SeatSection from '../../components/SeatSection/seatSection';
import { seatsConfig } from '../../constants/env';

const mapStateToProps = (state) => {
  console.log(state);
  return {
    bookingToken: state.seatsReducer.bookingTokenID,
    normal3D: state.seatsReducer.normal3D,
    glass3D: state.seatsReducer.glass3D,
    user: state.loginReducer.user
  };
};

class Booking extends React.Component {
  renderSeats = () => {
    return (
      <SeatSection
        numberOfSeats={seatsConfig}
        onBookingSelected={(payload) => this.props.bookUserSeats(payload, this.props.user)}
      />
    );
  }
  render() {
  return (
    <div>
      <div className='button-container'>
        <input className='book-seat-button' type='button' value='Logout' />
      </div>
      {this.renderSeats()}
    </div>
  );
  }
}

export default connect(mapStateToProps, action)(withRouter(Booking));
