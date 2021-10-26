import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Homepage from './components/Landingpage/landing';
import SingleMovie from './components/SingleMovie/singlemovie';
import SearchResults from './components/SearchResults/searchresults';



function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/search/:query" component={SearchResults}/>
          <Route exact path="/singleMovie/:id" component={SingleMovie} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
