import { readTxtFile } from "./no1.js";
import http from "http";
import { sumTwoNum } from "./no3.js";
 
// Nomor 1 : Buat program Node.js sederhana yang membaca file teks dan mencetak isinya ke konsol.
const number1 = async () => {
    try {
        const textFileBody = await readTxtFile('./no1.txt')
        console.log(`Nomor 1 : \n${textFileBody}`)
    } catch (error) {
        console.error('Error :', error)
    }
}
number1()

// Nomor 2 : Buat server HTTP sederhana dengan Node.js yang merespons "Hello, World!" untuk setiap permintaan.
const server = http.createServer((req, res) => {
    setTimeout(() => {
        res.writeHead(200, { 'Content-Type': 'text/plain' })
        res.end('Hello, World!')
    }, 1000);
});

// Nomor 3 : Buat modul Node.js yang mengekspor fungsi untuk menjumlahkan dua angka, dan impor modul tersebut di file lain.
const number3 = () => {
    const res = sumTwoNum(19,13)
    console.log(`Nomor 3 : \n${res}\n`)
}
number3()

server.listen(3000, () => {
    console.log('Nomor 2 : \nServer running at http://localhost:3000/\n')
});