< script >
    document.addEventListener('DOMContentLoaded', function () {
        document.getElementById('getMessage').onclick = function () {
            req = new XMLHttpRequest();
            req.open("GET", '/json/cats.json', true);
            req.send();
            req.onload = function () {
                json = JSON.parse(req.responseText);
                var html = "";
                json.forEach(function (val) {
                    html += "<div class = 'cat'>";
                    // Add your code below this line
                    html += "<img src = '" + val.imageLink + "' " + "alt='" + val.altText + "'>";

                    // Add your code above this line
                    html += "</div><br>";
                });
                document.getElementsByClassName('message')[0].innerHTML = html;
            };
        };
    }); <
/script> <
style >
    body {
        text - align: center;
        font - family: "Helvetica", sans - serif;
    }
h1 {
    font - size: 2 em;
    font - weight: bold;
}
.box {
    border - radius: 5 px;
    background - color: #eee;
    padding: 20 px 5 px;
}
button {
    color: white;
    background - color: #4791d0;

    border-radius: 5px;

    border: 1px solid # 4791 d0;
    padding: 5 px 10 px 8 px 10 px;
}
button: hover {
        background - color: #0F5897;

    border: 1px solid # 0 F5897;
    } <
    /style> <
    h1 > Cat Photo Finder < /h1>  <
    p class = "message box" >
    The message will go here <
    /p> <
    p >
    <
    button id = "getMessage" >
    Get Message <
    /button> <
    /p>