import React from 'react';
import { withRouter } from 'react-router-dom';

import App from '../../components/App/App';

class AppContainer extends React.Component {
    render() {
        return (
            <App />
        );
    }
}


export default withRouter(AppContainer);
