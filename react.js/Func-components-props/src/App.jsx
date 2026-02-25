import UserCard from "./components/UserCard"

function App() {

  return (
    <>
      <UserCard
        name="Gopal"
        role="Software Engineer"
        skills={['Reactjs', 'Typescript', 'Linux', 'Golang', 'PostgreSQL']}
        isActive={true}
      />
    </>
  )
}

export default App
