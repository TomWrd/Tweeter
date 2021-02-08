export const CREATE_TWEET = "CREATE_TWEET";

export const createTweet = (tweet) => {
    tweet.author = {
        name: "Johnny Consultant",
        username: "Dummy",
        image: "/test_dummy.jpg"
    }

    return (dispatch, getState) => {
        dispatch({
            type: CREATE_TWEET,
            tweet: tweet
        })
    }
}