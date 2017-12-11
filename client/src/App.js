import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SongForm from './components/SongForm'
import { Container, Header } from 'semantic-ui-react';
import SongList from './components/SongList';

class App extends Component {
  render() {
    return (
      <Container>
       <Header as='h1' as='center'>Music Billboard</Header>
       <SongForm />
      </Container>
    );
  }
}

export default App;
