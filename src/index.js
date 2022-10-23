import {query, collection, where,db,orderBy, onSnapshot} from './public/js/firebase.js';

const machines = document.getElementById('machine__container')

/* It's setting the date to today and then setting the date limit to today at 23:59:59.*/
let dateToday = new Date();
dateToday.setHours(0, 0, 0, 0)
let dateLimit = new Date(dateToday).setHours(23, 23, 23, 23)
dateLimit = new Date(dateLimit)

window.addEventListener('DOMContentLoaded', async()=>{
    const q = query(collection(db, "equipos"),where("time", ">=", dateToday), where("time", "<=", dateLimit), orderBy("time"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
        machines.innerHTML = ' ';
        querySnapshot.forEach((doc) => {
            const data = doc.data()
            let date = new Date(data.time.seconds * 1000)
            date = date.toLocaleString("es-AR", { timeZone: "America/Argentina/Buenos_Aires" })
            let hour = date.split(', ')
            machines.innerHTML += `
                <div class='d-flex p-1'>
                    <h3 class='h4'>${data.SN}&nbsp;</h3>
                    <p class= 'h6'>${hour[1]}</p>
                </div>
            `
        });
    }); 
}) 

navigator.serviceWorker.register('/src/server/sw.js')

let button = document.querySelector('button')
let promptEvent = null;
window.addEventListener('beforeintallprompt', e=>{
    console.log('Ready for install');
    promptEvent = e;
    button.classList.add('btnActive')
})
button.addEventListener('click', e=>{
    promptEvent.prompt();
})