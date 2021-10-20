import Home from './screens/Home';
import signup from './screens/Signup';
import signin from './screens/Signin';
import { BrowserRouter, Route } from 'react-router-dom';
import ChildInfo from './screens/ChildInfo';
import MyInfo from './screens/MyInfo';
import CoParentInfo from './screens/CoParentInfo';

function App() {
  return (
    <BrowserRouter>

      <Route path="/" component={Home} exact />
      <Route path="/Signup" component={signup} />
      <Route path="/Signin" component={signin} />
      <Route path="/CoParentInfo" component={CoParentInfo} />
      <Route path="/ChildInfo" component={ChildInfo} />
      <Route path="/MyInfo" component={MyInfo} />
    </BrowserRouter>
  );
}

export default App;
