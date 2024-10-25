import React from "react";

import { NavLink } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <div>
      <img src={item.pictureUrl} />
      <h2>{item.title}</h2>
      <span>{item.description}</span>
      <span>${item.price}</span>
      <NavLink to={`/detail/${item.id}`}>
        <button>Detail</button>
      </NavLink>
    </div>
  );
};

export default Item;
