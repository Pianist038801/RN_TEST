import React from 'react';
import { Button, View, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from '../../styles';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
      title: 'Course',
    };

    componentDidMount() {
      this.props.getToken();
      this.props.getContent();
    }

    _keyExtractor = (item, index) => item.id.toString()

    renderSimpleLists = ({item, index}) =>
    <TouchableOpacity onPress={()=>this.props.navigation.navigate('SimpleList', {simpleList: this.props.simpleLists[index]})}>
      <Text style={styles.card}>{item.title}</Text>
    </TouchableOpacity>

    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.description}>
            {this.props.courseDescription}
          </Text>
          <FlatList
            data={this.props.simpleLists}
            keyExtractor={this._keyExtractor}
            renderItem={this.renderSimpleLists}
          />
        </View>
      );
    }
}
