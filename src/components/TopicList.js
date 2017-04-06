import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class TopicList extends Component {
  state = {
    threads: []
  };

  componentWillMount() {
    axios.get('https://stageapi6.devmn.net/api/v1/forums/threads?topic_id=2418', {
      headers: {
        'client-id': 'e2c2cbcfb116aef33d4bfad38a6ac73e8bd1c064305264d8cbbf133ebfa0f21e'
      }
    })
      .then(response => this.setState({ threads: response.data.threads }));
  }

  renderThreads() {
    return this.state.threads.map(thread => <Text>{thread.thread.name}</Text>);
  }

  render() {

    return (
      <View>
        {this.renderThreads()}
      </View>
    );
  }
}

export default TopicList;
