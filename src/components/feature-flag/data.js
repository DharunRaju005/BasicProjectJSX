const dummyApiResponse={
    showTicTacToe:true,
    showGitHubProfileFider:true,
    showLightAndDarkMode:true,
    showTreeView:true
};

function featureFlagsDataServiceCall(){

    return new Promise((resolve,reject)=>{
        if(dummyApiResponse) setTimeout(resolve(dummyApiResponse),500);
        else reject("Error occured!!");
    })
}

export default featureFlagsDataServiceCall;