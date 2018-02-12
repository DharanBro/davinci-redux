import React from 'react';
import { Button, StyleSheet, Text, View, ScrollView } from 'react-native';
import QuestionCards from './QuestionCards';
const styles = StyleSheet.create({
    container: {
        flex: 1,

    }
});

const CategoryPage = ({ questions }) => {
    const questionCards = questions.map(question => (
        <QuestionCards questionData={question} key={question.key} />
    ));
    return (<ScrollView>
        {questionCards}
    </ScrollView>)
}

export default CategoryPage;