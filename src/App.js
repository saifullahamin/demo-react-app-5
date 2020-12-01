import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [repos, setRepos] = useState([{}]);
  useEffect(() => {
    // fetch("https://api.github.com/users/saifullahamin/repos")
    // .then((response) => response.json())
    // .then((json) => {
    //   console.log(json);
    // });

    async function fetchData() {
      const response = await fetch(
        "https://api.github.com/users/saifullahamin/repos"
      );
      const json = await response.json();
      setRepos(json);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Github Repos for github.com/saifullahamin</h1>
      <ul>
        {repos.map((repoObj, id) => {
          return <li key={id}>{repoObj.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
