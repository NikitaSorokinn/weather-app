import '../styles/globals.scss'
import React from "react";
import {Provider} from 'react-redux'
import {applyMiddleware, compose, createStore} from "redux";
import {rootReducer} from "../redux/rootReducer";
import thunk from "redux-thunk"

const store = createStore(rootReducer, compose(
    applyMiddleware(
        thunk
    )
))

function MyApp({ Component, pageProps }) {
  return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
  )
}

export default MyApp
