import Home from './screens/Home';

import { BrowserRouter, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>

      <Route path="/" component={Home} exact />

    </BrowserRouter>
  );
}

export default App;
