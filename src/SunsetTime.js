import React from "react";

export default function SunsetTime(props) {
  console.log(props);

  let timeSunset = Intl.DateTimeFormat("en-US", {
    timeStyle: "long",
  }).format(props.sunset);

  return <div>{timeSunset}</div>;
}
