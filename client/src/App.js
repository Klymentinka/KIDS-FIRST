import Home from './screens/Home';
import signup from './screens/Signup';

import { BrowserRouter, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>

      <Route path="/" component={Home} exact />
      <Route path="/Signup" component={signup} />

    </BrowserRouter>
  );
}

export default App;
