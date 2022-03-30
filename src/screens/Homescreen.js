import React from "react";
import Pizza from "../components/Pizza";
import { pizzas } from "../pizzadata";

const Homescreen = () => {
  return (
    <div>
      <div className="row">
        {pizzas.map((pizza) => {
          return (
            <div className="col-md-4">
              <div>
                <Pizza pizza={pizza} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Homescreen;
