import './App.css';

function App() {
  let isLoggedIn = true;

  let content;

  if (isLoggedIn) {
    content = (
      <div>
        <h1>Profile</h1>
        <ul>
          <li>Name: Jack</li>
          <li>Age: 32</li>
          <li>Phone Number: 94124123</li>
        </ul>
      </div>
    );
  } else {
    content = <div>Login Form</div>;
  }

  return (
    <div className="App">
      {content}
      <div>
        {isLoggedIn ? <div>Hello User</div> : <div>Create Account</div>}
      </div>
      {isLoggedIn && <div>You are logged in! :D</div>}
      {!isLoggedIn && <div>You are not logged in!!! </div>}
    </div>
  );
}

export default App;
