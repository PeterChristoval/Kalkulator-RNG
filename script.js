const tBody = document.querySelector('.tbody');
const bAcak = document.querySelector('.bAcak');
const z0 = document.querySelector('.z0');
const min = document.querySelector('.min');
const max = document.querySelector('.max');
const a = document.querySelector('.a');
const m = document.querySelector('.m');
function hitung(e) {
    e.preventDefault();
    tBody.innerHTML = ``;
    let Z = (parseInt(a.value) * parseInt(z0.value)) % parseInt(m.value);
    tBody.innerHTML += `<tr>
                <td>${1}</td>
                <td>${z0.value}</td>
                <td>Z1 = (${a.value} * ${z0.value}) mod ${m.value} = ${Z}</td>
                <td>U1 = ${Z} / ${m.value} = ${(Z / parseInt(m.value)).toFixed(4) }</td>
                <td>X1 = ${min.value} + ${(Z / parseInt(m.value)).toFixed(4)} * (${max.value} - ${min.value} + 1) = ${(parseInt(min.value) + (Z / parseInt(m.value)).toFixed(4) * (parseInt(max.value) - parseInt(min.value) + 1)).toFixed(4)}</td>
            </tr>`
    for (let i = 1; i < bAcak.value; i++) {
        let ZResult = (parseInt(a.value) * Z) % parseInt(m.value);
        tBody.innerHTML += `<tr>
            <td>${i + 1}</td>
            <td>${Z}</td>
            <td>Z${i + 1} = (${a.value} * ${Z} mod ${m.value} = ${ZResult}</td>
            <td>U${i + 1} = ${ZResult} / ${parseInt(m.value)} = ${(ZResult / parseInt(m.value)).toFixed(4)}</td>
            <td>X${i + 1} = ${min.value} + ${(ZResult / parseInt(m.value)).toFixed(4)} * (${max.value} - ${min.value} + 1) = ${(parseInt(min.value) + (ZResult / parseInt(m.value)).toFixed(4) * (parseInt(max.value) - parseInt(min.value) + 1)).toFixed(4)}</td>
        </tr>`
        Z = (parseInt(a.value) * Z) % parseInt(m.value);
    }
    bAcak.value = '';
    a.value = '';
    min.value = '';
    max.value = '';
    m.value = '';
    z0.value = '';
}