
const A = document.getElementById('soA');
const B = document.getElementById('soB');
function sum() {
    const a = Number(A.value);
    const b = Number(B.value);
    let sum = 0;
    if (a >= b) {
        alert('a nho hon b moi hop le');
    } else {
        for (let i = a; i <= b; i++) {
            let flag = true;
            for (let j = 2; j < i; j++) {
                if (i % j === 0) {
                    flag = false;
                    break;
                }
            }

            if (i > 1 && flag === true) {
                sum += i;
            }
        }
        document.getElementById('result').textContent = 'Kết quả là: ' + sum;
    }
   
}