import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
const ListPage = lazy(() => import("./pages/ListPage/index.js"));
const ViewPage = lazy(() => import("./pages/ViewPage/index.js"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>loading...</div>}>
        <Switch>
          <Route path="/" component={ListPage} exact />
          <Route path="/view/:id" component={ViewPage} exact />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
