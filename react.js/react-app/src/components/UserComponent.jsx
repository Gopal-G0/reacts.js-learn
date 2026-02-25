export default function UserComponent({isLogged, username}) {
  
  return (
    <div>
      {isLogged ? (
        <h3>Hello, Welcome Back {username}</h3>
      ) : (
          <h3>Please Login</h3>
      )}
    </div>
  );
}