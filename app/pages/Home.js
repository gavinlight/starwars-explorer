import React from 'react';
import logo from '../assets/images/star-wars-logo.png';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Starwars Explorer',
    };
  }

  render() {
    const { title } = this.state;

    return (
      <div>
        <h2 id="heading">{ title }</h2>
        <img
          className="image"
          style={{ margin: '0.5em' }}
          height="auto"
          width="150"
          src={logo}
          alt="Star Wars Logo"
        />
      </div>
    );
  }
}

export default Home;
