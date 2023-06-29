let express = require(`express`);
const path = require('path');
let app = express();
let port = 3000;
const multer = require('multer');
const fs = require("fs");

app.listen(port, function () {
    console.log(`http://localhost:${3000}`);
});

app.use(express.static(`public`));
app.use(express.urlencoded({ extended: true }))


let hbs = require('hbs');
app.set('views', 'views');
app.set('view engine', 'hbs');
app.use(express.static('public'))

const { Navigator } = require("node-navigator");
const navigator = new Navigator();

class Userinfo {
    // async battary(){
    //     return await navigator.getBattery();
    //     navigator.getB
    // }

    async ip(){
        let res = await(await fetch('http://ip-api.com/json/?fields=61439'))
        let data = await res.json();
        return data;
    }

    async position(){
        const pos = await new Promise((resolve, reject)=>{
            navigator.geolocation.getCurrentPosition
            (resolve,reject)
        })
        return{
            long: pos.longitude,
            lat: pos.latitude,
            accuracy: pos.accuracy,
            altitude: pos.altitude,
            heading: pos.heading,
            speed: pos.speed,
            timestamp: pos.timestamp,
        }
    }

    
}

let info = new Userinfo();

async function t1(){
    let ip = JSON.stringify(await info.ip())
    let position = JSON.stringify(await info.position())
    fs.writeFileSync('ip.json', ip);
    fs.writeFileSync('position.json', position);
    console.log(await info.ip())
    console.log(await info.position())
}


app.get(`/`, function (req, res) {
    t1();
    res.render(`index`,{

    })
});



