const socket = io();
const formEl = document.querySelector('.name');
const containerEl = document.querySelector('.all__mes');

console.log(containerEl);
formEl.addEventListener('submit', (ev) => {
    ev.preventDefault();

    const formData = new FormData(ev.target);
    const message = formData.get('mes');
    let html = '';
    socket.emit('/chat', {message: message}, (data) => {
        // const sendFront = data.message;
        // html += `${sendFront}`
        // containerEl.innerHTML = html;
        // console.log(data.message);
        const res = data.message;
        console.log(res);
        socket.on('/res', (info, cb) => {
            console.log('asd:', info.sendMes)
        });
        // containerEl.innerHTML += res;
        // return res
        // html += res;
        // console.log(html);
        // console.log('container:', containerEl);
    });
});
