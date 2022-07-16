import React from "react";

export default function App() {

  const [advice, setAdvice] = React.useState({})

  React.useEffect(() => {
    fetch("https://stoicquotesapi.com/v1/api/quotes/random")
      .then(res => res.json())
      .then(data => setAdvice(data))
      .catch(err => console.error(err));
  },[])

  console.log(advice)

  return (
    <div className="center--wrapper">
      <div className="box">
        <h2 className="item">{advice.body}</h2>
        <p className="item">{advice.author}</p>
      </div>
  </div>
  )
}