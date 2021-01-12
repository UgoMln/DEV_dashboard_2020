function music(artist_name) {
    artist_name_ws = artist_name.replace(/ /g,"%20")
    //var apiKey = "AIzaSyChtSX23hyUgnz4TA5IHxAanMo8-YU83G0"
    var apiKey = "AIzaSyBjLH9-wXRVvQYZhEhcQxoSnncT-TMh-sU"
    var url = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&q=" + artist_name_ws + "&type=video&videoDefinition=high&key=" + apiKey
    fetch (url).then(resp => resp.json())
    .then(data => {
        var id = data.items[0].id.videoId
        var embedlink = "https://www.youtube.com/embed/" + id 
        document.getElementById("myIframe").src = embedlink;
    })
}

