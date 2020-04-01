
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";


const styles = {
  link: { textDecoration: "none", color: "blue" },
  nav: { border: "1px solid blue" },
  home: { border: "1px solid red", height: "1000px", width: "500px" },
  about: { border: "1px solid blue", height: "1000px", width: "500px" }
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.main = React.createRef();
  }
  renderMain() {
    return (
      <div style={styles.component}>
        <div style={styles.home}>
          <h1>Home</h1>
        </div>
        <div style={styles.about} ref={this.main}>
          <h1>About</h1>
        </div>
      </div>
    );
  }
  handleScroll = e => {
    e.preventDefault();
    const main = this.main.current;
    window.scrollTo({
      top: main.offsetTop,
      left: 0,
      behavior: "instant"
    });
  };
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <div style={styles.nav}>
              <Link style={styles.link} to="/">
                Home{" "}
              </Link>
              <Link style={styles.link} onClick={this.handleScroll} to="/about">
                About{" "}
              </Link>
              <Link style={styles.link} to="/contact">
                Contact{" "}
              </Link>
            </div>

            <Switch>
              <Route exact path="/" component={() => this.renderMain()} />
              <Route exact path="/contact" render={() => <h1>Contact Us</h1>} />
              <Route render={() => <h1>Page not found</h1>} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);





<div onClick = {this.getPos} id = "para">About Our App</div>
        <div className = "about-para" align = "right">
          <p >
                      Excepteur enim magna veniam labore veniam sint.
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                       <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br /> <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      </p>
                       <p>Ex aliqua esse proident ullamco voluptate. </p>
 <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                       <p>
                        <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br /> <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                       Nisi nisi nisi aliqua eiusmod dolor dolor proident deserunt occaecat elit Lorem reprehenderit. Id culpa veniam ex aliqua magna elit pariatur do nulla.
                       </p>
                        <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br /> <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br /> <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                       <p id = "paraa"> Excepteur enim magna veniam labore veniam sint.
                  </p>
                </div>

