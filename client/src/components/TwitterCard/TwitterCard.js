import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './TwitterCard.css';
import { FaRegComment, FaRetweet } from 'react-icons/fa';
import { BsHeart } from 'react-icons/bs';
import { AiOutlineUpload } from 'react-icons/ai';
import { BsDot } from 'react-icons/bs';
const TwitterCard = (props) => {
    
    const tweet = props.tweet;
    return (
        <div className="tweet-card-container">
            {
        <div>
            <div className="card-details-wrapper">
                <div className="card-left-wrapper">
                    <img src={tweet.author.image} className="card-profile-picture" />
                </div>
                <div className="card-right-wrapper">
                    <div className="tweet-details-wrapper">
                        <span className="author-name">
                        {
                            tweet.author.name
                        }
                        </span>
                        <span className="author-username">
                        @
                        {
                            tweet.author.username
                        }
                        </span>
                        <span className="dot-divider">
                            <BsDot />
                        </span>
                        <span className="post-date-wrapper">
                            {Math.floor(Math.random() * 60)}
                            m
                        </span>
                    </div>
                    <div className="card-content-wrapper">
                        <div className="card-text-wrapper">
                        {
                            tweet.text
                        }
                        </div>
                        <div className="card-attachment-wrapper">
                            <img src={tweet.attachment} className="card-attachment" />                    
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-interactions-wrapper">
                <div className="comments-wrapper">
                    <FaRegComment />
                    <span className="interaction-count">
                        {Math.floor(Math.random() * 100)}
                    </span>
                </div>
                <div className="retweets-wrapper">
                    <FaRetweet />
                    <span className="interaction-count">
                        {Math.floor(Math.random() * 100)}
                    </span>
                </div>
                <div className="hearts-wrapper">
                    <BsHeart />
                    <span className="interaction-count">
                        {Math.floor(Math.random() * 100)}
                    </span>
                </div>
                <div className="share-wrapper">
                    <AiOutlineUpload />
                    <span className="interaction-count">
                        {Math.floor(Math.random() * 100)}
                    </span>
                </div>
            </div>

                </div>
            }
        </div>
    )
}
export default TwitterCard;