const calculatePosts = (posts) => {
    let sum = 0;
    for(item of posts){
        sum += calculateSinglePost(item)
    }
    const mean = sum/posts.length;
    return mean;
}


const calculateSinglePost = (post) => {
    const retweetScore = calculateRetweetScore(post.retweet_count)
    const favScore = calculateFavScore(post.favorite_count)
    const scores = [retweetScore , favScore];
    return scores.reduce((i , j) => (i + j) / scores.length)
}

const calculateRetweetScore = (count) => {
    //TODO: do a better implementation
    retweetCount = (count - 5);
    if(retweetCount >= 0 ){
        return 10;
    }else if(retweetCount >= - 1){
        return 9;
    }else if(retweetCount >= -1.5){
        return 8;
    }else if(retweetCount >= -2){
        return 7;
    }else if(retweetCount >= -2.5){
        return 6
    }else if(retweetCount >= -3){
        return 5
    }else if(retweetCount >= -3.5){
        return 4
    }else if(retweetCount >= -4){
        return 3
    }else if(retweetCount >= -4.5){
        return 2
    }else if(retweetCount >= -5){
        return 1
    }
    return 0;
}

const calculateFavScore = (count) => {
    //TODO: do a better implementation
    // retweetCount = (count - 100);
    // const score = 10 - Math.round(-1 * (retweetCount/10));
    // return score > 10 ? 10 : score;
    const favCount = (count - 5);
    if(favCount >= 0 ){
        return 10;
    }else if(favCount >= - 1){
        return 9;
    }else if(favCount >= -1.5){
        return 8;
    }else if(favCount >= -2){
        return 7;
    }else if(favCount >= -2.5){
        return 6
    }else if(favCount >= -3){
        return 5
    }else if(favCount >= -3.5){
        return 4
    }else if(favCount >= -4){
        return 3
    }else if(favCount >= -4.5){
        return 2
    }else if(favCount >= -5){
        return 1
    }
    return 0;
}

module.exports = {calculateSinglePost, calculatePosts}