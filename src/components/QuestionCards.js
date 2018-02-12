import React, { Component } from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
//import Stars from 'react-native-stars-rating';
import { TextField } from 'react-native-material-textfield';
//import Icon from 'react-native-vector-icons/MaterialIcons';

const styles = require('../styles/Style');
export default class QuestionCards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: 0,
            showRating: true,
            showReview: false
        };
        this._swapVisibility = this._swapVisibility.bind(this);
    }
    _swapVisibility() {
        this.setState({ showRating: !this.state.showRating, showReview: !this.state.showReview })
    }
    render() {
        return (
            <TouchableHighlight onPress={this._onCardClick}>
                <View style={styles.questionsContainer}>
                    <View style={styles.questionCards}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.questionCardsHeadFont}>
                                {this.props.questionData.behaviouralTrait}
                            </Text>
                            <TouchableHighlight style={styles.ratingTextMenu} underlayColor={'transparent'}
                                onPress={this._swapVisibility}>
                                <Text style={styles.questionCardsHeadFont}>
                                    {"Sample"}
                                </Text>
                            </TouchableHighlight>
                        </View>
                        <View>
                            {this.state.showRating &&
                                <View>
                                    <Text style={styles.questionCardsDescFont}>{this.props.questionData.evidence}</Text>
                                    <View style={{ flexDirection: 'row' }}>

                                        <Text style={styles.ratingText}>{this.state.rating} / 5</Text>
                                    </View>
                                </View>}
                            {this.state.showReview &&
                                <View>
                                    <TextField
                                        label=''
                                        value={''}
                                        multiline={true}
                                        labelHeight={0}
                                        characterRestriction={300}
                                        style={styles.ratingTextBox}
                                        onChangeText={(phone) => (console.log(phone))}
                                    />
                                    <View style={styles.reviewSubmitContainer}>
                                        <TouchableHighlight style={styles.reviewSubmitButton}><Text
                                            style={styles.reviewSubmitContent}>Submit</Text></TouchableHighlight>
                                        <TouchableHighlight style={styles.reviewSubmitButton}
                                            onPress={this._swapVisibility}><Text
                                                style={styles.reviewSubmitContent}>Close</Text></TouchableHighlight>
                                    </View>
                                </View>}
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
}