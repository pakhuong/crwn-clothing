import React from "react";
import { Route, Switch } from "react-router-dom";

import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop-page/shop-page.component";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
