import React from 'react';
import {  StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import NewsList from '../components/NewsList';
import { NewsState } from '../store/reducers/news';


interface RootState {
  news: NewsState;
}

const News = () => {

  const newsData = useSelector(
    (state: RootState) => state.news.newsData
  )
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={{ alignItems: 'center' }}
      >
        <NewsList isHomeScreen={false} newsData={newsData}/>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#fff'
  },

});

export default News;
