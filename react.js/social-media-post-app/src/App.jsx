import PostComponent from "./components/PostComponent";
import { useState } from 'react';

export default function App() {
  
  const time = new Date();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  
  const [count, setCount] = useState(0);
  
  const [user, setUser] = useState({ name: 'Gopal', email: '' });
  
  const updateName = (newName) => {
    setUser({
      ...user,
      name: newName
    });
  }
  
  return (
    <div style = {{display: "flex", justifyItems: "center", alignItems: "center", gap: 15, flexDirection: "column"}}>
      <PostComponent
        image="https://shorturl.at/4vTQs"
        author="Gopal"
        content="What content should i write here...??
        React Foundation will handle Reactjs now
        Meta disowns Reactjs"
        timestamp={`Posted at ${hours + ":" + minutes}`}
        likes="Likes: 234k"
      />
      
      <PostComponent
        image="https://shorturl.at/gpSxc"
        author="Thomas"
        content="Hello Guys, Thomas Shelby This Side. I am From Scotland, UK"
        timestamp={`Posted at ${hours + ":" + minutes}`}
        likes="Likes: 455k"
      />
      
      <PostComponent
        image="https://imgs.search.brave.com/1Mt2HhqnTlaoazsQhS-cAERP3dHGQK4rKexJyKUKKpU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2UxL2Q1/L2JmL2UxZDViZjJh/NWIwMmJkY2ExZWM0/OGM5YjQ2ZGNhMTZh/LmpwZw"
        author="Voldemorte"
        content="Harry Potterrrrrrr, The Boy who lived.
        Come to die.
        Avada Cadavaraaaaaa...."
        timestamp={`Posted at ${hours + ":" + minutes}`}
        likes="Likes: 1.5M"
      />
      
      <div>
        <h4>Count: {count}</h4>
        <button onClick={() => setCount(count + 1)}>Click</button>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
      
      <div>
        <input
          value={user.name}
          placeholder={user.name}
          onChange={(e) => updateName(e.target.value)}
        />
        <h3>{user.name}</h3>
      </div>
    </div>
  );
}