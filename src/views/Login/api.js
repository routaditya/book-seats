export const getLoginToken = (payload) => {
  const bookingData = JSON.parse(localStorage.getItem('bookingSiteData'));
  if (!bookingData)
    localStorage.setItem('bookingSiteData', JSON.stringify([{id: payload.username, seats:{} }]));
  if (bookingData.some((item) => item.id !== payload.username)) {
    bookingData.push({ id: payload.username, seats: {} });
    localStorage.setItem('bookingSiteData', JSON.stringify(bookingData));
  }
  //const user = bookingData.filter(z => z.id === payload.username);
  console.log('jjj', JSON.parse(localStorage.getItem('bookingSiteData')));
  return {
    data: {
      token: true,
      user: payload.username,
    },
  };
};
