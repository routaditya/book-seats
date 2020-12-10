import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from './store/store';
import Login from './views/Login/login';
import Booking from './views/Booking/booking';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='login' component={Login} />
            <Route exact path='/booking' component={Booking} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
