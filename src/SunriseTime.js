import React from "react";

export default function SunriseTime(props) {
  console.log(props);

  let timeSunrise = Intl.DateTimeFormat("en-US", {
    timeStyle: "long",
  }).format(props.sunrise);

  return <div>{timeSunrise}</div>;
}
