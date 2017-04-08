import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Linking
} from 'react-native';
import Store from '../Store/index'
import {connect} from 'react-redux';
import {Header,Card,CardSection,Button} from '../Components/';
import CounterAction from '../Store/Action/Counter'

function mapStateToProps(state) {
    return {
        incCounter : state.incrementCounter.incrementState,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        increment: () => dispatch(CounterAction.increment()),
        decrement: () => dispatch(CounterAction.decrement()),
    };
}

class App extends React.Component {
  render() {
    return (
      <View style={{ flex:1 }}>
        <Header textShown={'COUNTER APPLICATION WITH EPIC'} />
        <Card>
          
            <CardSection>
            <Text>{this.props.incCounter}</Text>
            </CardSection>
            <CardSection>
            <Button onPress={()=>{this.props.increment()}}>
                   Increment
                    </Button>
            </CardSection>
            <CardSection>
            <Button onPress={()=>{this.props.decrement()}}>
                   Decrement
                    </Button>
            </CardSection>
          </Card>
      </View>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);