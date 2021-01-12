function loadWidgets() {
    var xhr = new XMLHttpRequest()
    xhr.open("GET", "/loadWidget", true)
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var widgets = JSON.parse(xhr.responseText)
            for (var i = 0; i < widgets.length; i++) {
                if (widgets[i].widgetName == "weather") {
                    if (widgets[i].widgetRole == "getWeatherByCity") {
                        weather(widgets[i].widgetContent)
                    }
                }  else if (widgets[i].widgetName == "cinema") {
                    if (widgets[i].widgetRole == "getMovieInformation") {
                        movies(widgets[i].widgetContent)
                    }
                } else if (widgets[i].widgetName == "artist") {
                    if (widgets[i].widgetRole == "getArtist") {
                        music(widgets[i].widgetContent)
                    }
                }
            }
        }
    }
    xhr.send()
}