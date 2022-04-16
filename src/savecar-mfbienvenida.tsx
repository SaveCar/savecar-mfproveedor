import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Root from "./App.js";

export function mount(props) {
  return lifecycles.mount(props);
}

export function unmount(props) {
  const to = localStorage.getItem("toMf");
  localStorage.removeItem("toMf");
  props.go_to_mf("mfregusuario", to, "/");

  return lifecycles.unmount(props);
}

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
});

export const { bootstrap } = lifecycles;
