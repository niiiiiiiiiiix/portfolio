import React, { useState } from 'react';
import axios, { AxiosResponse } from 'axios';

const Beans = () => {
  const [beans, setBeans] = React.useState<[]>([]);

  const fetchHomeground = () => {
    axios
      .get(`${process.env.REACT_APP_PORTFOLIO_SERV}/beans/homeground`)
      .then((response: AxiosResponse) => {
        const responseArray = response.data;
        setBeans([]);
        setBeans(responseArray);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchAlchemist = () => {
    axios
      .get(`${process.env.REACT_APP_PORTFOLIO_SERV}/beans/alchemist`)
      .then((response: AxiosResponse) => {
        const responseArray = response.data;
        setBeans([]);
        setBeans(responseArray);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <h1>Beans</h1>
      <h3>
        <button onClick={fetchHomeground}>Homeground</button>
        <button onClick={fetchAlchemist}>Alchemist</button>
        <>
          {beans.map((item, index) => {
            return <p key={index}>{item[0]}</p>;
          })}
        </>
      </h3>
    </>
  );
};

export default Beans;
