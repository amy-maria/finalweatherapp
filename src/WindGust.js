import React from "react";

export default function WindGust(props) {
  console.log(props);
  if (props.gust > 1) {
    return <div>Wind gust:{props.gust} mph</div>;
  } else {
    return null;
  }
}
