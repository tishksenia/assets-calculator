import { Provider } from 'react-redux';

import { Calculator } from 'pages';
import { store } from './config';

import './index.scss';

function App() {
    return (
        <Provider store={store}>
            <Calculator />
        </Provider>
    );
}

export default App;
