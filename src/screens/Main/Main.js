import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Main.css';

import TweetInput from '../../components/TweetInput/TweetInput';
import TwitterCard from '../../components/TwitterCard/TwitterCard';

const Main = (props) => {

    const tweet = useSelector(state => state.twittercard.tweet);
    console.log("Rendering tweet: " + JSON.stringify(tweet));
    return (
        <div>
            <div className="tweet-input-wrapper">
                <TweetInput />
            </div>
            <div className="tweet-card-wrapper">
                {
                    tweet.author &&
                    <TwitterCard 
                        tweet={tweet}
                    />
                }
            </div>
        </div>
    )
}
export default Main;