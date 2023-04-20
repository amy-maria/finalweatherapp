import React from "react";

export default function WindDirection(props) {
  const compassDirection = [
    `N`,
    `NNE`,
    `NE`,
    `ENE`,
    `E`,
    `ESE`,
    `SE`,
    `SSE`,
    `S`,
    `SSW`,
    `SW`,
    `WSW`,
    `W`,
    `WNW`,
    `NW`,
    `NNW`,
    `N`,
  ];

  let direction = Math.round(props.degree / 22.5 + 0.5);
  let windDirection = compassDirection[direction % 16];

  return <div>{windDirection}</div>;
}
