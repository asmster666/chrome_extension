import React from 'react';
import s from './app.module.scss';

import * as Components from './components/index';
import QuotesBlock = Components.QuotesBlock;
import PocketBlock = Components.PocketBlock;

import * as Elements from './elements/index';
import Clock = Elements.Clock;

function App() {
  return (
    <div className={s.App}>
      <div>
        <Clock />
        <PocketBlock />
        <QuotesBlock />
      </div>
    </div>
  );
}

export default App;
