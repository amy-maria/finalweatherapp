import React from "react";

export default function SunriseTime(props) {
  const options = {
    hour: "numeric",
    minute: "numeric",
    timeZoneName: "short",
  };

  let timeSunrise = props.time.toLocaleString(undefined, options);

  return <div>{timeSunrise}</div>;
}
