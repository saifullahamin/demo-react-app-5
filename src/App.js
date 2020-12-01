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
      const respone = await fetch(
        "https://api.github.com/users/saifullahamin/repos"
      );
      const data = await respone.json();
      setRepos(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Github Repositories of github.com/saifullahamin</h1>
      <ul>
        {repos.map((repoObj, id) => {
          return <li key={id}>{repoObj.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
