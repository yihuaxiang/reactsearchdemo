import './App.css';
import {HashRouter, Redirect, Route, Switch} from 'react-router-dom'
import BuildInSearch from "./components/BuildInSearch/BuildInSearch";
import NotFound from "./components/NotFound/NotFound";
import HomeInfo from "./components/HomeInfo/HomeInfo";
import SearchResult from "./components/SearchResult/SearchResult";
import SearchForm from "./components/SearchForm/SearchForm";

function App() {
  return (
    <div className="App">
      <HashRouter >
        <span>this is header</span>
        <Switch>
          <Route exact path={"/"} render={() => <HomeInfo />} />
          <Route exact path={"/bird"} render={() => <BuildInSearch search={"bird"} />} />
          <Route exact path={"/food"} render={() => <BuildInSearch search={"food"} />} />
          <Route exact path={"/search"} render={() => <SearchForm />} />
          <Route path={"/search/:search"} render={(props) => <SearchResult search={props.match.params.search} />} />
          <Route render={() => <NotFound />} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
