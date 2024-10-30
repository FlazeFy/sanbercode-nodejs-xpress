import { showTask } from "./no1.js"

// Nomor 1
const task = {
    id: 1,
    task_name: 'do homework',
    task_description: 'about javascript at sanbercode',
    task_is_important: true,
    task_subtask: [
        'buat function parameter object yang mereturn dalam bentuk string literal',
        'menjelaskan potongan code'
    ]
}
const resultShowTask = showTask(task)
console.log(resultShowTask)

// Nomor 2
function sumOfNumbers(...numbers) {
    return numbers.reduce((total, number) => total + number, 0);
}
// Terdapat sebuah fungsi dengan nama ‘sumOfNumber’ yang memiliki parameter ‘numbers’ yang mengambil semua parameter dan mengkonversikan dengan tipe data array
// Variabel numbers dari parameter akan dilakukan perulangan untuk setiap element yang terdapat didalamnya menggunakan ‘reduce’
// Setiap perulangan akan menjumlahkan setiap ’number’ yang terdapat untuk setiap index menjadi ‘total’

const result = sumOfNumbers(1, 2, 3, 4, 5);
// Terdapat pemanggilan fungsi ‘sumOfNumber’ beserta parameter yang berisi kumpulan int yang langsung diletakkan pada parameter
// Hasil dari pemanggilan fungsi akan disimpan pada variabel ‘result’ dan bersifat permanen (tidak dapat diinisialisasi ulang)

console.log(`The sum of 1, 2, 3, 4, and 5 is: ${result}`);
// Terdapat sebuah string yang menggunakan konsep string literal dan didalamnya terdapat sebuah pemanggilan variabel ‘result’ yang telah ditampung pada code sebelumnya
//String tersebut akan ditampilkan pada terminal console menggunakan ‘console.log()’
