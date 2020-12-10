export const bookSeats = (payload) => {
  const bookingData = JSON.parse(localStorage.getItem('bookingSiteData'));
  bookingData[0].seats = payload.seats;
  localStorage.setItem('bookingSiteData', JSON.stringify(bookingData));
  return {
    data: {
      bookingTokenID: '123',
    },
  };
};
