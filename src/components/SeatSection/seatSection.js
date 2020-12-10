import React from "react";
import { seatsType } from "../../constants/env";

class SeatSection extends React.Component {

  state = {
    seats: {
      normal: [],
      glass: []
    }
  }

  modifyGlassSelectedSeats = (value) => {
    const { seats: { glass } } = this.state;
    if (glass.includes(value)) return;
    let updatedList = glass;
    updatedList.push(value);
    this.setState({seats: { ...this.state.seats, glass: updatedList }});
  };

  modifyNormalSelectedSeats = (value) => {
    const {
      seats: { normal },
    } = this.state;
    if (normal.includes(value)) return;
    let updatedList = normal;
    updatedList.push(value);
    this.setState({ seats: { ...this.state.seats, normal: updatedList } });
  };

  renderSeatSection = (numberOfSeats, type) => {
    const {
      seats: { glass, normal },
    } = this.state;
    const seats = Array.from(new Array(numberOfSeats), (x, i) => i + 1);
    return seats.map((value, index) => (
      <div
        key={`${value}-${index}`}
        onClick={
          type === seatsType.GLASS
            ? () => this.modifyGlassSelectedSeats(value)
            : () => this.modifyNormalSelectedSeats(value)
        }
        className={
          type === seatsType.GLASS
            ? glass.includes(value)
              ? 'single-seat single-seat-glass selected'
              : 'single-seat single-seat-glass'
            : normal.includes(value)
            ? 'single-seat single-seat-normal selected'
            : 'single-seat single-seat-normal'
        }>
        {value}
      </div>
    ));
  };

  render(){
    const { numberOfSeats, onBookingSelected } = this.props;
    return (
      <div>
        <h2>Seats</h2>
        <div className='seat-section'>
          {this.renderSeatSection(numberOfSeats.GLASS_3D, seatsType.GLASS)}
        </div>
        <div className='seat-section'>
          {this.renderSeatSection(numberOfSeats.NORMAL_3D, seatsType.NORMAL)}
        </div>
        <div className='button-container'>
          <input
            className='book-seat-button'
            type='button'
            value='Book Seats'
            onClick={() => onBookingSelected(this.state.seats)}
          />
        </div>
      </div>
    );
  }
}

export default SeatSection;
