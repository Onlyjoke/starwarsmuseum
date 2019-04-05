import React from 'react';

import Routes from '../Routes/Routes';
import css from './App.styl';

const App = () => {
    return (
        <div className={css.root}>
            <div>
                <Routes />
            </div>
        </div>
    );
};

export default App;
