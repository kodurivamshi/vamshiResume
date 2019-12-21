const express = require('express')
const app = express()
const port = process.env.PORT ||3000

app.use(express.static('public'))
//app.get('/', (req, res) => res.sendFile('Hello world...'))
app.get('/', (req, res) => res.sendFile(__dirname+'/resume/htmls/home.html'))
app.get("/style", (req, res) => res.sendFile(__dirname+'/resume/css/style.css'))
app.get("/login", (req, res) => res.sendFile(__dirname+'/resume/htmls/login.html'))
app.get("/resume", (req, res) => res.sendFile(__dirname+'/resume/htmls/resume.html'))
app.get("/signup", (req, res) => res.sendFile(__dirname+'/resume/htmls/signup.html'))
app.get("/images", (req, res) => res.sendFile(__dirname+'/resume/img/images.jpg'))
app.get("/vamshi", (req, res) => res.sendFile(__dirname+'/resume/img/vamshi.jpg'))
app.get("/g", (req, res) => res.sendFile(__dirname+'/resume/img/g.jpg'))
app.get("/favicon", (req, res) => res.sendFile(__dirname+'/resume/img/favicon.jpg'))
app.get("/javascript", (req, res) => res.sendFile(__dirname+'/resume/js/javascript.js'))
app.get("/jquery", (req, res) => res.sendFile(__dirname+'/resume/js/jquery.js'))

var obj={
    name:"KODURI VAMSHI",
    mailId:"vkoduri555@gmail.com",
    mobileNo:"9989709841",
    tc1:"C",
    tc2:"C++",
    tc3:"Java",
    tc4:"Python",
    tc5:"HTML, CSS, JS",
    d1:"B-tech",
    c1:"CMR College Of engineering And Technology",
    y1:"2021",
    p1:"91%",
    d2:"intermediate",
    c2:"Sr Junior college",
    y2:"2017",
    p2:"97.2",
    d3:"SSC",
    c3:"Manideep English Union High School",
    y3:"2015",
    p3:"9.7 GPA",
    a1:"NPTEL certification of Programming through Java",
    a2:"NPTEL certification of Programming and DS through Python",
    a3:"NASA space App Challenge",
    a4:"NPTEL certification of DBMS",
    a5:"Padhai Deep Learning certificate",
    fn:"KODURI RAMULU",
    g:"Male",
    dob:"23-10-1999",
    s:"Telanaga",
    n:"Indian",
    h1:"solving programs",
    h2:"playing chess",
    h3:"listening songs",
    h4:"learning skills",
    h5:"watching TV shows",
}


app.get("/data", (req, res) => res.json(obj))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))