import React, { useState } from 'react';
import axios, { AxiosResponse } from 'axios';

const Beans = () => {
  const [beans, setBeans] = React.useState<[]>([]);

  const fetchHomeground = () => {
    axios
      .get(`${process.env.REACT_APP_PORTFOLIO_SERV}/beans/homeground`)
      .then((response: AxiosResponse) => {
        setBeans(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchAlchemist = () => {
    axios
      .get(`${process.env.REACT_APP_PORTFOLIO_SERV}/beans/alchemist`)
      .then((response: AxiosResponse) => {
        setBeans(response.data);
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
        <div>
          <table>
            <thead>
              <tr>
                <th>name</th>
                <th>link</th>
              </tr>
            </thead>
            <tbody>
              {beans.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item['name']}</td>
                    <td>{item['link']}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </h3>
    </>
  );
};

export default Beans;
