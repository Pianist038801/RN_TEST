import React from 'react';
import { 
  Button,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import styles from '../../styles';

export default class SimpleLists extends React.Component {
    static navigationOptions = {
      title: 'Meditation',
    };

    state = {
      meditation: this.props.navigation.state.params.meditation,
    }
    
    componentDidMount() {
      this.props.getContentState(this.state.meditation.id);
    }

    onFavoriteClick = () => {
      if(this.props.favorite) {
        this.props.delFavorite(this.state.meditation.id)
      }
      else {
        this.props.setFavorite(this.state.meditation.id)
      }
    }

    render() {
      return (
        <View style={{...styles.container, justifyContent: 'space-between'}}>
          <View>
            <Text style={styles.description}>
              {this.state.meditation.title}
            </Text>
            <Text style={styles.description}>
              {this.state.meditation.description}
            </Text>
          </View> 
          <View style={styles.bottomBar}>
            <TouchableOpacity style={styles.imgContainer} onPress={this.onFavoriteClick}>
              {
                this.props.favorite 
              ? 
                <Image style={styles.img} source={require('../../assets/like.png')}/>
              :
                <Image style={styles.img} source={require('../../assets/dislike.png')}/>
              }
            </TouchableOpacity>
            <TouchableOpacity style={styles.imgContainer} onPress={this.onFavoriteClick}>
              {
                this.props.locked 
              ? 
                <Image style={styles.img} source={require('../../assets/lock.png')}/>
              :
                <Image style={styles.img} source={require('../../assets/unlock.png')}/>
              }
            </TouchableOpacity>
          </View> 
        </View>
      );
    }
}