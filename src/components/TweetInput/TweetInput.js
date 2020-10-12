import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './TweetInput.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {GrClose} from 'react-icons/gr';
import {BsImage} from 'react-icons/bs';

import * as actions from '../../store/actions/twittercard';

const TweetInput = (props) => {
    const dispatch = useDispatch();
    const [tweetText, setTweetText] = useState("");
    const [attachment, setAttachment] = useState();

    const submitTweet = async () => {
        var cardDetails = {
            text: tweetText,
            attachment: attachment
        }
        await dispatch(actions.createTweet(cardDetails));                
        setTweetText("");
        setAttachment("");
    }

    const handleTextChange = (text) => {
        setTweetText(text.substring(0,279));
    }
    
    var charactersRemaining = 280 - tweetText.length;

    return (
        <div>
            <div className="actions-wrapper">
            </div>
            <div>
                <div className="input-wrapper">
                    <div>
                    <TextField 
                        multiline
                        value={tweetText}
                        rows={6}
                        placeholder={"What's happening?"}
                        onChange={(text) => handleTextChange(text.target.value)}
                    />
                    </div>
                    <div className="attachment-preview-werapper">
                        {
                            attachment && 
                            <img src={attachment} className="attachment-previewer" />
                        }                    
                    </div>
                </div>                
                <div className="options-wrapper">
                    <BsImage 
                        className="options-icon"
                    />
                    {
                        //Add image attachment option
                    }
                    <div className="submit-tweet-wrapper">
                    <span className="characters-remaining-wrapper">{charactersRemaining}</span>
                        <Button 
                            onClick={submitTweet}
                            className="actions-icon"
                            variant="contained"
                            color="primary"

                        >
                            Tweet
                        </Button>
                </div>
                </div>
            </div>
        </div>
    )
}
export default TweetInput;