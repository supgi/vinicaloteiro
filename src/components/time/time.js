export default function time() { try {

    if (window) {
        console.log("start")
        let element = document.getElementById('time');
        let date = new Date(2023, 3, 20, 23, 59, 59);
        setTimeout(() => {attTime(element, date);}, 50)
        setInterval(() => {
            attTime(element, date);
        }, 500)

        function attTime(el, d) { try {

            let n = Date.now();
            let dif = new Date(n - d);
            let txt = `Faz ${styleTime(dif.getDate())} dias, ${styleTime(dif.getHours() + 3)} horas, ${styleTime(dif.getMinutes())} minutos e ${styleTime(dif.getSeconds())} segundos que o Vinicius deve ao Giovanni`;
            el.innerHTML = txt;

        } catch(e) {}}

        function styleTime(text) {
            return `<spam style="color: red;">${text}</spam>`
        }
    }

} catch(e) {}}