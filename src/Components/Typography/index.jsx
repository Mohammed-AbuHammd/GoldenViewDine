import React from "react";
import "./style.css";
const mainH1 = ({ children }) => {
  return <h1 className="t__mainH1">{children}</h1>;
};
const H1 = ({ children }) => {
  return <h1 className="t__h1">{children}</h1>;
};

const H2 = ({ children }) => {
  return <h2 className="t__h2">{children}</h2>;
};

const H3 = ({ children }) => {
  return <h3 className="t__h3">{children}</h3>;
};
const H4 = ({ children }) => {
  return <h4 className="t__h4">{children}</h4>;
};
const H5 = ({ children }) => {
  return <h5 className="t__h5">{children}</h5>;
};
const H6 = ({ children }) => {
  return <h6 className="t__h6">{children}</h6>;
};
const body1 = ({ children }) => {
  return <p className="t__p1">{children}</p>;
};
const body2 = ({ children }) => {
  return <p className="t__p2">{children}</p>;
};
const span = ({ children }) => {
  return <span className="t__span">{children}</span>;
};
const label = ({ children }) => {
  return <label className="t__label">{children}</label>;
};
const hDF = ({ children }) => {
  return <h1 className="t_hDF">{children}</h1>;
};
const hDC = ({ children }) => {
  return <h1 className="t_hDC">{children}</h1>;
};
const pDF = ({ children }) => {
  return <p className="t_pDF">{children}</p>;
};

export {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  body1,
  body2,
  span,
  hDF,
  hDC,
  pDF,
  label,
  mainH1,
};
