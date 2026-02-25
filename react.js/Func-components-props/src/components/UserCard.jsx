export default function UserCard({ role, name, skills, isActive }) {
  
  return (
    <div className={`card ${isActive? "active": ""}`}> //try to find the use of this activeClass 
      <h2>{name}</h2>
      <p>{role}</p>
      
      <ul>
        {skills.map(skill => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}