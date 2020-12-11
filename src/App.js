// import necessary packages
import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";

//import css
import "./css/main.css";

// import components
import About from "./pages/About.js";
import HomePage from "./pages/HomePage";
import WritingSectionPage from "./pages/WritingSectionPage";
import WritingSubjectPage from "./pages/WritingSubjectPage";
import PostPage from "./pages/PostPage";
class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" component={HomePage} exact />
        <Route path="/about" component={About} exact />
        <Route
          path="/writing-subjects/:subject"
          component={WritingSubjectPage}
        />
        <Route path="/writing/:id" component={PostPage} />

        <Route
          path="/writing-section/:section"
          component={WritingSectionPage}
        />
      </Router>
    );
  }
}
export default App;
