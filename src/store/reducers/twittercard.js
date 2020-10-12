import {CREATE_TWEET} from '../actions/twittercard';

const initialState = {
    tweet: {
    }
};

const twittercardReducer = (state = initialState, action) => {
    switch(action.type) {
        case CREATE_TWEET:    
            return {
                ...state,
                tweet: action.tweet
            }
    }
    return state;
}

export default twittercardReducer;