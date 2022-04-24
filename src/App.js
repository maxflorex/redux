import Navbar from "./components/Navbar";
import UserLists from "./components/UserLists";
// redux
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <UserLists />
    </Provider>
  );
}

export default App;
