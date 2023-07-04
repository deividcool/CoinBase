import React, { useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image } from 'react-native';
import Colors from '../constants/Colors';
import CBButton from '../components/CBButton';

import { WatchlistState } from '../store/reducers/watchlist';
import { TopmoversState } from '../store/reducers/topmovers';
import { useSelector, useDispatch } from 'react-redux';

import * as topmoversActions from '../store/actions/topmovers';
import * as watchlistActions from '../store/actions/watchlist';

import TopMoversListItem from '../components/TopMoversListItem';

import Whatchlist from '../components/Whatchlist';

interface RootState {
    watchlist: WatchlistState;
    topmovers: TopmoversState;
}

const Home = () => {


    const watchlistData = useSelector(
        (state: RootState) => state.watchlist.watchlistData
    )

    const topMoversData = useSelector(
        (state: RootState) => state.topmovers.topMoversData
    )


    const dispatch = useDispatch();

    const loadData = () => {
        try {
          dispatch(watchlistActions.fetchCoinData());
          dispatch(topmoversActions.fetchTopMoversData());
        }   catch (err) {
          console.log(err);
        }
      }

    useEffect(() => {
        loadData();
    }, []);


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                contentContainerStyle={{ alignItems: 'center' }}

            >
                <Image
                    source={{ uri: 'https://i.imgur.com/9EEaSaS.png' }}
                    style={styles.image}

                />
                <Text style={styles.title}>Welcome to Coinbase!</Text>
                <Text style={styles.subTitle}>Make your first investment today</Text>
                <CBButton title='Get Start' />
                <Whatchlist coinData={watchlistData} />
                <TopMoversListItem
                    id={1}
                    symbol={'BTC'}
                    price={54363}
                    porcentChange={-2.5}
                />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#fff',
    },
    image: {
        height: 250,
        width: 150,
        marginTop: 40,
    },
    title: {
        fontSize: 21,
        fontWeight: '600',
        marginBottom: 8,
        letterSpacing: 0.5,
    },
    subTitle: {
        fontSize: 17,
        marginBottom: 24,
        color: Colors.subtitle,
    },
}
)

export default Home;