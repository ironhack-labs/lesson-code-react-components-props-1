import React from 'react';

// import ReactPlayer from the npm package
import ReactPlayer from 'react-player';

import './App.css';

function GreetingMessage() {
  const message = 'Hello Ana!';
  return (
    <div>
      <u>{message}</u>
    </div>
  );
}

function WelcomeBlock() {
  return (
    <div>
      <GreetingMessage />
      <em>Welcome to our cool page. It is pleasure to have you here!</em>
    </div>
  );
}

function User(props) {
  return <div>User is: {props.firstName}</div>;
}

function UsersList(props) {
  return <div> {props.children} </div>;
}

class Color extends React.Component {
  render() {
    return <div>{this.props.favColor}</div>;
  }
}

function Classroom() {
  return (
    <>
      <Student name='ivan' age='23' />
      <Student name='milo' age='29' />
      <Student name='erick' age='34' />
    </>
  );
}

function Student(props) {
  return (
    <p>
      {props.name} - {props.age} years old.
    </p>
  );
}

function App() {
  return (
    <div className='App'>
      <GreetingMessage />
      <hr />
      <WelcomeBlock />
      <hr />
      <UsersList>
        <User firstName='Harper' />
        <User firstName='Mike' />
        <User firstName='Alvaro' />
        <User firstName='Andrea' />
      </UsersList>
      <hr />
      <Color favColor='blue' />
      <hr />
      <ReactPlayer url='https://vimeo.com/channels/top/22439234' playing />
      <hr />
      <ReactPlayer url='https://www.youtube.com/watch?v=kJQP7kiw5Fk' playing controls volume='0.5' />
      <hr />
      <Classroom />
    </div>
  );
}

export default App;
