import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as fetchUser from '../actions';
import Header from './Header';
import './App.css';

const Dashboard = () => <h1>Dashboard</h1>;
const SurveyNew = () => <h1>SurveyNew</h1>;
const Landing = () => <h1>Landing</h1>;

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <Container>
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/" exact component={Landing} />
            <Route path="/surveys" exact component={Dashboard} />
            <Route path="/surveys/new" component={SurveyNew} />
          </div>
        </BrowserRouter>
      </Container>
    );
  }
}

export default connect(null, fetchUser)(App);
