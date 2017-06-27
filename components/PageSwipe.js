import React, {Component} from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';

class PageSwipe extends Component {

    constructor(props) {
        super(props);

        this.state = {
            pageCount:0
        }
    }
    
    render() {
        return (
            <ScrollView onMomentumScrollEnd={this.handleSwipe} scrollEventThrottle={1000} style={styles.scrollView} horizontal={true} vertical={false} directionalLockEnabled={true}> 
                <Text>Pagecount: {this.state.pageCount}</Text>
            </ScrollView>
        )
    }

    handleSwipe = () => {
        var pageCount = this.state.pageCount;
        pageCount = pageCount + 1;
        this.setState({pageCount: pageCount});
        console.log(this.state.pageCount);
    }


}

const styles=StyleSheet.create({
    scrollView: {
        flex: 1,
        flexDirection:'column',
        backgroundColor: '#fff',
        borderColor: 'red',
        borderStyle: 'solid',
        borderWidth:1,
        width:'100%'
    }
});


module.exports = PageSwipe;