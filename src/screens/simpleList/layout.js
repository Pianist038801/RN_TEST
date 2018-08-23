import React from 'react';
import { Button, View, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from '../../styles';

export default class SimpleLists extends React.Component {
    static navigationOptions = {
      title: 'SimpleLists',
    };
  
    state = {
      simpleList: this.props.navigation.state.params.simpleList
    }

    componentWillReceiveProps(newProp){

      // if(newProp.courseDescription!=null) alert(newProp.courseDescription)
    }

    _keyExtractor = (item, index) => item.id.toString()

    renderMeditations = ({item, index}) =>
    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Meditation', {meditation: this.state.simpleList.meditations[index]})}>
      <Text style={styles.card}>{item.title}</Text>
    </TouchableOpacity>

    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.description}>
            {this.state.simpleList.description}
          </Text>
          <FlatList
            data={this.state.simpleList.meditations}
            keyExtractor={this._keyExtractor}
            renderItem={this.renderMeditations}
          />
        </View>
      );
    }
}