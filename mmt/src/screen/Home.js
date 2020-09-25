import * as React from 'react';
import { Text, View, StyleSheet, Image} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Carousel from 'react-native-snap-carousel';
import { RNNDrawer } from 'react-native-navigation-drawer-extension';
import { Drawer } from '../navigation/Navigation';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      carouselItems: [
        {
          title: 'Hotel The Park New Delhi',
          imageUri: require('../assets/img1.jpg'),
          star: '* * * * * *',
          price: '4500/Night'
        },
        {
          title: 'Hotel Lemon Tree Premier',
          imageUri: require('../assets/img2.jpg'),
          star: '* * *',
          price: '4000/Night'
        },
        {
          title: 'Hotel The Plaza Hotel Aerocity',
          imageUri: require('../assets/img3.jpg'),
          star: '* * *  *',
          price: '3500/Night'
        },
        {
          title: 'Hotel The Taj',
          imageUri: require('../assets/img4.jpg'),
          star: '* * * *',
          price: '8500/Night'
        },
        {
          title: ' Hotal The Ashok',
          imageUri: require('../assets/img5.jpeg'),
          star: '* * * * *',
          price: '6500/Night'
        },
        {
          title: 'Hotal ibis New Delhi Aerocity',
          imageUri: require('../assets/img6.jpeg'),
          star: '* * * *',
          price: '5500/Night'
        },
        {
          title: 'Hotal International Inn',
          imageUri: require('../assets/img7.jpg'),
          star: '* * * * * *',
          price: '7500/Night'
        },
        {
          title: 'Hotal Red Fox Hotel Delhi Airport',
          imageUri: require('../assets/img8.jpg'),
          star: '* * *',
          price: '3000/Night'
        },
      ]
    }
  }


  carouselImage({ item, index }) {
    return (
      <View style={styles.screenMargin}>
        <Image source={item.imageUri} style={styles.imageUri} />
        <Text style={styles.text}>{item.title}</Text>
        <Text style={styles.star}>Rating: {item.star}</Text>
        <Text style={styles.price}>Price: {item.price}</Text>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.maincontainer}>
        <View style={styles.header}>
          <FontAwesome
            onPress={() => { Drawer() }}
            name="bars"
            color="white"
            size={40}
          />
        </View>
        <View style={styles.container}>
          <Carousel
            layout={"default"}
            ref={ref => this.carousel = ref}
            data={this.state.carouselItems}
            sliderWidth={400}
            itemWidth={400}
            autoplay={true}
            autoplayInterval={2000}
            renderItem={this.carouselImage}
            onSnapToItem={index => this.setState({ interval: index })}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screenMargin: {
    marginLeft: 5
  },
  imageUri: {
    height: 250,
    width: 330,
    borderRadius: 15,
    marginTop: 5
  },
  header: {
    flexDirection: 'row',
    backgroundColor: 'maroon',
    justifyContent: 'space-between',
    marginTop: 5,
    height: 45
  },
  text: {
    fontSize: 19,
    color: 'skyblue',
    textAlign: 'center',
    fontWeight: "bold"
  },
  star: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    fontWeight: "bold"
  },
  price: {
    fontSize: 22,
    color: 'green',
    textAlign: 'center',
    fontWeight: "bold"
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  maincontainer: {
    flex: 1,
    backgroundColor: 'white',
  }
})

export default Home;