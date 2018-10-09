import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('BirdStore')
@observer
class App extends Component {
  handleSubmit(event) {
    event.preventDefault();
    this.props.BirdStore.addBird(this.bird.value);
    this.bird.value ='';
  }
  render() {
    const { BirdStore } = this.props;
    return (
      <div className="App">
        <h2>You have { BirdStore.birdCount } birds.</h2>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input type="text" placeholder="Enter Bird"
            ref={node => this.bird = node}/>
          <button type="submit">Add Bird</button>
        </form>
        <ul>
          {BirdStore.birds.map(each => (
            <li key={ each }>{ each }</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
