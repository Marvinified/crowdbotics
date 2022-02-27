import { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { routes } from './configs/routes';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Suspense fallback={<div>Loading...</div>}>
          {
            routes.map(route => {
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                />
              );
            })
          }
        </Suspense>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
