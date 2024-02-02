import React, { Fragment, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./components/app";
import * as serviceWorker from "./serviceWorker";
// Redux
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { routes } from "./route";
import ConfigDB from "./data/customizer/config";


import Login from "./auth/login";
import Callback from "./auth/callback";

const Root = (props) => {
  const [anim, setAnim] = useState("");
  const animation =
    localStorage.getItem("animation") ||
    ConfigDB.data.router_animation ||
    "fade";
  const abortController = new AbortController();
  // const dispatch = useDispatch();
  // const [currentUser, setCurrentUser] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const jwt_token = localStorage.getItem("token");
  const userrole = localStorage.getItem("role");
  useEffect(() => {
    // const requestOptions = { method: 'GET', headers: authHeader() };
    // dispatch({ type: ADD_MIX_BACKGROUND_LAYOUT, payload: 'dark-sidebar' });
    setAuthenticated(JSON.parse(localStorage.getItem("authenticated")));
    // fetch('/users', requestOptions).then(handleResponse)
    //   setAnim(animation)
    //   console.ignoredYellowBox = ["Warning: Each", "Warning: Failed"];
    //   console.disableYellowBox = true;
    //   // auth().onAuthStateChanged(setCurrentUser);
    //   setAuthenticated(JSON.parse(localStorage.getItem("authenticated")))
    //   return function cleanup() {
    //       abortController.abort();
    //     }
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <Provider store={store}>
        <BrowserRouter basename={`/`}>
          <Switch>
            <Route path={`${process.env.PUBLIC_URL}/login`} component={Login} />
          
            <Route
              path={`${process.env.PUBLIC_URL}/callback`}
              render={() => <Callback />}
            />

            {authenticated || jwt_token ? (
              <App>
                {userrole === "user" && (
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/`}
                    render={() => {
                      return (
                        <Redirect to={`${process.env.PUBLIC_URL}/dashboard`} />
                      );
                    }}
                  />
                )}
                {(userrole === "super-admin" ||
                  userrole === "admin" || userrole === "manager") && (
                  <>
                    <Route
                      exact
                      path={`${process.env.PUBLIC_URL}/admin`}
                      render={() => {
                        return (
                          <Redirect
                            to={`${process.env.PUBLIC_URL}/admin/dash`}
                          />
                        );
                      }}
                    />
                    <Route
                      exact
                      path={`${process.env.PUBLIC_URL}/`}
                      render={() => {
                        return (
                          <Redirect
                            to={`${process.env.PUBLIC_URL}/admin/dash`}
                          />
                        );
                      }}
                    />
                  </>
                )}
                <TransitionGroup>
                  {/* {routes.forEach(function (item) {
                        const Component = item.Component;
                        item.role.filter(r => r === 'inxpector').map(() =>  (
                          <Route
                          key={item.path}
                          exact
                          path={`${process.env.PUBLIC_URL}${item.path}`}
                        >
                          {({ match }) => (
                            <CSSTransition
                              in={match != null}
                              timeout={100}
                              classNames={anim}
                              unmountOnExit
                            >
                              <div>
                                <Component />
                              </div>
                            </CSSTransition>
                          )}
                        </Route>
                        ))
                    })} */}

                  {routes
                    .filter((r) => r.role.includes(userrole))
                    .map(({ path, Component, role }) => (
                      <Route
                        key={path}
                        exact
                        path={`${process.env.PUBLIC_URL}${path}`}
                      >
                        {({ match }) => (
                          <CSSTransition
                            in={match != null}
                            timeout={100}
                            classNames={anim}
                            unmountOnExit
                          >
                            <div>
                              <Component />
                            </div>
                          </CSSTransition>
                        )}
                      </Route>
                    ))}
                </TransitionGroup>
              </App>
            ) : (
              <Redirect to={`${process.env.PUBLIC_URL}/login`} />
           
            )}
          </Switch>
        </BrowserRouter>
      </Provider>
    </Fragment>
  );
};
ReactDOM.render(<Root />, document.getElementById("root"));

serviceWorker.unregister();
