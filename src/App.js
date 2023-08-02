import React, { Component } from "react";

class App extends Component {
  state = {
    person: {
      fullName: "Dairo Samuel",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imgSrc: "https://www.nameslook.com/names/oluwasijibomi-nameslook.png",
      profession: "Software Engineer",
    },
    show: true,
    mountedTime: null,
  };

  componentDidMount() {
    this.setState({ mountedTime: new Date() });

    // Set interval to update the mounted time every second (1000ms)
    this.interval = setInterval(() => {
      this.setState({ mountedTime: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };

  render() {
    const { person, show, mountedTime } = this.state;

    return (
      <div className="container">
        <h1>Person Profile</h1>
        <button onClick={this.toggleShow}>Toggle Profile</button>
        {show && (
          <div>
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt={person.fullName} />
            <p>Profession: {person.profession}</p>
          </div>
        )}
        <p>Time since last component mount: {mountedTime && mountedTime.toLocaleTimeString()}</p>
      </div>
    );
  }
}

export default App;

