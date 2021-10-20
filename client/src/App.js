import Home from './screens/Home';
import signup from './screens/Signup';
import signin from './screens/Signin';
import { BrowserRouter, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>

      <Route path="/" component={Home} exact />
      <Route path="/Signup" component={signup} />
      <Route path="/Signin" component={signin} />

    </BrowserRouter>
  );
}

export default App;
