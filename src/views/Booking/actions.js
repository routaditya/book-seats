export const BOOK_SEATS = 'BOOK_SEATS';
export const BOOK_SEATS_SUCCESS = 'BOOK_SEATS_SUCCESS';
export const BOOK_SEATS_FAIL = 'BOOK_SEATS_FAIL';

export function bookUserSeats(seats, username) {
  return {
    type: BOOK_SEATS,
    payload: {
      seats,
      username
    },
  };
}
