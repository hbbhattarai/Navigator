import React from 'react';
import Panel from './Panel';
import Map from './Map';
import Filter from './Filter';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chapterName: 'gelephu'
    };

    this.updateChapter = this.updateChapter.bind(this);
    
  }

  updateChapter = (chapterName) => {
    let { layer } = this.state;

    if (chapterName === 'goals') {
      layer = 'goals';
    }

    this.setState({
      chapterName,
      layer,
    });
  }
  updateLayer = (event) => {
    this.setState({
      layer: event.target.value,
    });
  }

  
  render() {
    const {
      chapterName
    } = this.state;

    return (
      <div>
        <Map
          chapterName={chapterName}
          
        />
        <Panel
          chapterName={chapterName}
          updateChapter={this.updateChapter}
        />
        <Filter
          chapterName={chapterName}
         
        />
      </div>
    );
  }
}
