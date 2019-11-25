$(document).ready(function() {

    var chrtPresent = localStorage.getItem("chrtPresent")
    var beachName = localStorage.getItem("beachName")
    document.querySelector('#nameOfBeach').textContent = beachName





    if (chrtPresent === 'true') {
        var volData = JSON.parse(localStorage.getItem("volume"))
            // console.log(volData)
            // console.log(volData.UP__ID)
        document.getElementById('UP__ID').innerHTML = volData.UP__ID
        document.getElementById('UP__ELEV').innerHTML = volData.UP__ELEV
        document.getElementById('UP__DIST').innerHTML = volData.UP__DIST
        document.getElementById('LOW__ID').innerHTML = volData.LOW__ID
        document.getElementById('LOW__ELEV').innerHTML = volData.LOW__ELEV
        document.getElementById('LOW__DIST').innerHTML = volData.LOW__DIST
        document.querySelector('#volResultsForPrint').textContent = volData.Results
        var imgSrc = localStorage.getItem("source")
        var chrtSrc = localStorage.getItem("chrt")



        let img = document.createElement('img')
        img.id = "printImage"
        img.src = `${imgSrc}`
        document.querySelector('.mapDiv').appendChild(img)
        let canToImage = document.createElement('img')
        canToImage.id = 'canToImage'
        canToImage.src = chrtSrc
        document.querySelector('.chartDiv').appendChild(canToImage)


        // document.getElementById('winPrint').addEventListener('click', function() {
        //     var restorePage = document.body.innerHTML;
        //     var content = document.querySelector('.printTemplate').innerHTML
        //     document.body.innerHTML = content
        //     window.print()
        //     document.body.innerHTML = restorePage

        // })
    } else if (chrtPresent === 'false') {
        document.querySelector('.table-print').style.display = 'none'
        var imgSrc = localStorage.getItem("source")
            // var chrtSrc = localStorage.getItem("chrt")
            // console.log(chrtSrc)

        let img = document.createElement('img')
        img.id = "printImage"
        img.src = `${imgSrc}`
        document.querySelector('.mapDiv').appendChild(img)
            // let canToImage = document.createElement('img')
            // canToImage.src = chrtSrc
            // document.querySelector('.chartDiv').appendChild(canToImage)

    }


    function prinTPage() {
        var restorePage = document.body.innerHTML
        var content = document.querySelector('.printTemplate').innerHTML
        document.body.innerHTML = content
            // document.body.innerHTML = content
        window.print()
        document.body.innerHTML = restorePage
            // document.querySelector('.templateBox').innerHTML = restorePage

    }


    function closeWindow() {


        window.close()
    }


    document.querySelector('body').addEventListener('click', function(e) {
        let print = e.target.closest('#winPrint')
        let close = e.target.closest('#winClose')
        if (print) {
            prinTPage()
        } else if (close) {
            closeWindow()
        }
    })


})