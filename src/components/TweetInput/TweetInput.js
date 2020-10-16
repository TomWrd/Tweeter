import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './TweetInput.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {GrClose} from 'react-icons/gr';
import {BsImage} from 'react-icons/bs';
import {FaUpload} from 'react-icons/fa';
import * as actions from '../../store/actions/twittercard';
import axios from 'axios';
import Dropzone from 'react-dropzone'
import {BounceLoader} from 'react-spinners';
import { Observable } from 'rxjs';
 
 
const TweetInput = (props) => {
    const dispatch = useDispatch();
    const [tweetText, setTweetText] = useState("");
    const [tweetImage, setTweetImage] = useState();
    const [imageUploading, setImageUploading] = useState(false);
    const [displayUploader, setDisplayUploader] = useState(false);
    var formData = new FormData();
    
    const submitTweet = async () => {
        var cardDetails = {
            text: tweetText,
            attachment: tweetImage
        }
        await dispatch(actions.createTweet(cardDetails));                
        setTweetText("");
        setTweetImage();
        setDisplayUploader(false);
    }

    const handleTextChange = (text) => {
        setTweetText(text.substring(0,279));
    }

    const observable$ = new Observable(subscriber => {
        console.log("Posting form data: " + JSON.stringify(formData));
        axios.post('/UploadImage', formData)
        .then(response => {
            subscriber.next(response.data.file);
            subscriber.complete();
        })
      });

    const handleUploadImage = (acceptedFiles) => {
        var file = acceptedFiles[0];

        var fd = new FormData();            
        fd.append('tweetImage', file);
        formData = fd;
        setImageUploading(true);
        observable$.subscribe({
            next(x) { setTweetImage(x); console.log('Responded with:  ' + x); },
            error(err) { console.error('something wrong occurred: ' + err); },
            complete() { console.log('done'); }
          });
        setImageUploading(false);
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
                </div>                
                <div className="options-wrapper">
                    <BsImage 
                        className="options-icon"
                        onClick={() => setDisplayUploader( ! displayUploader )}
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
                {
                    displayUploader && 
                    <div>
                            <Dropzone onDrop={acceptedFiles => handleUploadImage(acceptedFiles)} accept={["image/jpeg", "image/png",  "image/jpg"]}>
                                {({getRootProps, getInputProps}) => (
                                    <section>
                                    <div {...getRootProps()}>
                                        {
                                            imageUploading && 
                                            <div className="loader-container">
                                                <BounceLoader/>
                                            </div>
                                        }
                                        {
                                            !imageUploading && tweetImage && 
                                            <img src={tweetImage} className="attachment-image"></img>
                                        }
                                        {    !imageUploading && ! tweetImage &&
                                            <FaUpload />
                                        }
                                        <input {...getInputProps()} />
                                        <p>Drag 'n' drop the attachment here, or click the icon.</p>
                                    </div>
                                    </section>
                                )}
                                </Dropzone>
                    </div>
                }
            </div>
        </div>
    )
}
export default TweetInput;