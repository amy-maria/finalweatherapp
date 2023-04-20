import React from "react";

export default function FormattedDate(props) {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    timeZoneName: "short",
  };
  let day = props.date.toLocaleString(undefined, options);

  return <div>{day}</div>;
}
