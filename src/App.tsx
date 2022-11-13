import React, {useEffect, useState} from "react";
import {hot} from "react-hot-loader/root";
import {Layout} from "./shared/Layout";
import './main.global.css';
import {Header} from "./shared/Header";
import {Content} from "./shared/Content";
import { applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {rootReducer} from "./Store/store";
import thunk from 'redux-thunk';
import {useToken} from "./hooks/useToken";
import {BrowserRouter} from "react-router-dom";
import {NavigateRoutes} from "./shared/Navigate/NavigateRoutes";

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
));


function AppComponent() {
  const [mounted, setMounted] = useState(false);
  useEffect(()=>{
    setMounted(true);
  }, [])
  useToken();
  return (
    <>
      {mounted &&(
        <BrowserRouter>
          <Layout>
            <Header/>
              <Content>
                <NavigateRoutes/>
              </Content>
          </Layout>
        </BrowserRouter>
      )}
    </>
  )
}

export const App = hot(()=> (
  <Provider store={store}>
    <AppComponent/>
  </Provider>
));