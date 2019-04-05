import React from 'react';
import { Route, Switch } from 'react-router-dom';

import CharactersContainer from '../../containers/CharactersContainer/CharactersContainer';
import SelectedCharacterContainer from '../../containers/SelectedCharacterContainer/SelectedCharacterContainer';

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={CharactersContainer} />
            <Route path='/character/:id?' exact component={SelectedCharacterContainer} />
        </Switch>
    );
};

export default Routes;
