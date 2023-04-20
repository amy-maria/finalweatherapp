import React from "react";

export default function SunsetTime(props) {
  const options = {
    hour: "numeric",
    minute: "numeric",
    timeZoneName: "short",
  };

  let timeSunset = props.time.toLocaleString(undefined, options);

  return <div>{timeSunset}</div>;
}
