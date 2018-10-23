req = new XMLHttpRequest();
req.open("POST", url, true);
req.setRequestHeader('Content-Type', 'text/plain');
req.onreadystatechange = function () {
    if (req.readyState == 4 && req.status == 200) {
        document.getElementsByClassName('message')[0].innerHTML = req.responseText;
    }
};
req.send(userName);