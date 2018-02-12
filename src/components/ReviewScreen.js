import React from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import _ from 'lodash'

import CategoryPage from './CategoryPage'

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});

const initialLayout = {
    height: 0,
    width: Dimensions.get('window').width,
};
const ReviewScreen = ({ index, routes, questions, tabNavState, handleIndexChange, getInitialState, dispatch }) => {

    if (routes && questions) {
        const categories = Object.keys(questions);

        const getCategoryPage = (value) => (value => (<CategoryPage />))

        const sceneToMap = categories.reduce((o, key) => ({
            ...o, [key]: () => <CategoryPage questions={questions[key]} />

        }), {});

        // const renderScene = SceneMap(sceneToMap);
        const renderScene = ({ route }) => {
            if (Math.abs(index - routes.indexOf(route)) > 1) {
                return null;
            }
            return <CategoryPage questions={questions[route.key]} />
        }
        const renderHeader = props => <TabBar
            onTabPress={({ route }) => {
                
            }}
            useNativeDriver
            {...props}
            scrollEnabled />;

        return (

            <TabViewAnimated
                style={styles.container}
                navigationState={tabNavState}
                renderScene={renderScene}
                renderHeader={renderHeader}
                onIndexChange={handleIndexChange}
                initialLayout={initialLayout}
                useNativeDriver
            />
        );
    } else {
        getInitialState();
        return null;
    }



};

ReviewScreen.navigationOptions = {
    title: 'Review',
};

export default ReviewScreen;
