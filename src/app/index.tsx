import { Calculator } from 'pages';
import { Provider } from 'react-redux';
import { store } from './config/store';
import './index.scss';

function App() {
    return (
        <Provider store={store}>
            <Calculator />
        </Provider>
    );
}

export default App;
