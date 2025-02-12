import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Detail from './routes/Detail';
import Home from './routes/Home';
import ReactHook from './routes/ReactHook';
import ReactTaps from './routes/ReactTaps';
import ReactUseEffect from './routes/ReactUseEffect';
import ReactUseTitle from './routes/ReactUseTitle';
import ReactUseClick from './routes/ReactUseClick';
import ReactUseHover from './routes/ReactUseHover';
import ReactUseConfirm from './routes/ReactUseConfirm';
import ReactUsePreventLeave from './routes/ReactUsePreventLeave';
import ReactUsePageLeave from './routes/ReactPageLeave';
import ReactUseFadeIn from './routes/ReactUseFadeIn';
import ReactUseNetwork from './routes/ReactUseNetwork';
import ReactUseScroll from './routes/ReactUseScroll';
import ReactUseFullScreen from './routes/ReactUseFullScreen';
import ReactUseNotification from './routes/ReactUseNotification';
import ReactUseAxios from './routes/ReactUseAxios';
import StoreTest from './routes/StoreTest';
import ToDoList from './routes/ToDoList';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/store-test">
          <StoreTest />
        </Route>
        <Route path="/to-do-list">
          <ToDoList />
        </Route>
        <Route path="/react-useNotification">
          <ReactUseNotification />
        </Route>
        <Route path="/react-useAxios">
          <ReactUseAxios />
        </Route>
        <Route path="/react-useScroll">
          <ReactUseScroll />
        </Route>
        <Route path="/react-useFullScreen">
          <ReactUseFullScreen />
        </Route>
        <Route path="/react-useNetwork">
          <ReactUseNetwork />
        </Route>
        <Route path="/react-usePageLeave">
          <ReactUsePageLeave />
        </Route>
        <Route path="/react-useFadeIn">
          <ReactUseFadeIn />
        </Route>
        <Route path="/react-usePreventLeave">
          <ReactUsePreventLeave />
        </Route>
        <Route path="/react-useConfirm">
          <ReactUseConfirm />
        </Route>
        <Route path="/react-useHover">
          <ReactUseHover />
        </Route>
        <Route path="/react-useClick">
          <ReactUseClick />
        </Route>
        <Route path="/react-useTitle">
          <ReactUseTitle />
        </Route>
        <Route path="/react-hook">
          <ReactHook />
        </Route>
        <Route path="/react-useEffect">
          <ReactUseEffect />
        </Route>
        <Route path="/react-hookTaps">
          <ReactTaps />
        </Route>
        <Route path="/about-us">
          <h1>Hello</h1>
        </Route>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
