import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [repos, setRepos] = useState([{}]);
  const [isFetching, setFetching] = useState(false);

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
      setFetching(true);
      setRepos(json);
    }
    fetchData();
  }, []);
  if (!isFetching) {
    return <h1>Loading</h1>;
  }

  return (
    <div>
      <h1>Github Repositories for github.com/saifullahamin using Github Repo API</h1>
      <ul>
        {repos.map((repoObj, id) => {
          return <li key={id}>{repoObj.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
