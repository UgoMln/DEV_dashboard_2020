function weather(city) {
    var key = 'cc7c753a9a8f1cb76abaf5628b753512'
    url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + key
    fetch(url)
    .then(resp => resp.json())
    .then(function(data) {
        var country = data.sys.country
        var temp =  Math.round(parseFloat(data.main.temp)-273.15);
        var desc = data.weather[0].description
        var reloadId = 'h2' + city
        var first = '<h1>' + '<strong>' + city + ', ' + country + '</strong>' + '</h1>'
        var second = '<h2 id="' + reloadId + '"><label>Temperature :</label> ' + temp + ' °, ' + desc +'</h2>'
        this.grid = $('.grid-stack').data('gridstack')
        var node = {
            x: 3,
            y: 3,
            width: 4,
            height: 2
        }
        var elementId = 'id="' + city + '"'
        var valueID = 'value="' + city + '"'
        var button = '<form action="/deleteWidget" method="POST"><input type="hidden" name="toRemove" ' + valueID + '></input><button class="trashButton" type="submit"></button></form>'
        var createElement = '<div onload="reloadWeatherWidget()" class="grid-stack-item" ' + elementId + ' style="background-image: url(https://remeng.rosselcdn.net/sites/default/files/dpistyles_v2/ena_16_9_extra_big/2020/05/03/node_148401/11872700/public/2020/05/03/B9723367244Z.1_20200503152130_000%2BG6FFV57MO.1-0.jpg?itok=yfH9vhJS1588512099); margin: 10px; border-radius: 10px;" ><i style="position: absolute; top: 3px; right: 4px" ></i><button id="editButton" class="editButton" onclick="editWidget(this.parentNode.id)"></button><div class="grid-stack-item-content" style="padding: 20px; text-align: center">' + button + first + second + '</div></div>'
        this.grid.addWidget($(createElement), node.x, node.y, node.width, node.height)
        })
    .catch(function() {
        return false
    })
}