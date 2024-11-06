import express, { Request, Response } from "express";
const bodyParser = require('body-parser')

const PORT = 3000;

function init() {
    const app = express();
    app.use(bodyParser.json())
    const db = [{ id: 1, name: 'Elektronik' }, { id: 2, name: 'Perabotan' }]
    const db_product = [{ id: 1, name: 'Laptop', category: 'Elektronik' }, { id: 2, name: 'Meja', category: 'Perabotan' }]

    app.get("/", (req: Request, res: Response) => {
        res.status(200).json({
            message: "OK",
            data: null,
        });
    });

    // Nomor 1 : Buatlah route GET yang mengembalikan daftar semua kategori produk dalam aplikasi e-commerce Anda. 
    // Anda bisa asumsikan data kategori disimpan dalam array seperti ini: [{ id: 1, name: 'Elektronik' }, { id: 2, name: 'Perabotan' }].
    app.get("/category", (req: Request, res: Response) => {
        try {
            res.status(200).json({
                message: "Category has fetched",
                data: db,
            });
        } catch (error) {
            res.status(500).json({
                message: "error",
                data: "Something wrong happen",
            }); 
        }
    });

    // Nomor 2 : Buatlah route GET yang mengembalikan detail kategori berdasarkan ID. Anda bisa menggunakan array kategori dari soal sebelumnya.
    app.get("/category/:id", (req: Request, res: Response) => {
        try {
            const id = parseInt(req.params.id)
            const result = db.find(item => item.id === id)
            res.status(result ? 200 : 404).json({
                message: result ? "Category has fetched" : "Category not found",
                data: result,
            });
        } catch (error) {
            res.status(500).json({
                message: "error",
                data: "Something wrong happen",
            }); 
        }
    });

    // Nomor 3 : Buatlah route POST yang menambahkan kategori baru ke array. Kategori baru harus diberikan melalui body request dalam bentuk JSON, seperti ini: { "name": "Pakaian" }.
    app.post("/category", (req: Request, res: Response) => {
        try {
            const name = req.body.name
            const check = db.find(item => item.name === name)
            let category = null

            if(!check){
                category = {
                    id: db.length + 1,
                    name: name
                }
                db.push(category)
            } 
    
            res.status(!check ? 201 : 409).json({
                message: !check ? "Category has been created" : "Category name has been used",
                data: category,
            });   
        } catch (error) {
            res.status(500).json({
                message: "error",
                data: "Something wrong happen",
            }); 
        }
    });

    // Nomor 4 : Buatlah route PUT yang memperbarui kategori berdasarkan ID. Data kategori baru harus diberikan melalui body request dalam bentuk JSON, seperti ini: { "name": "Pakaian dan Aksesoris" }.
    app.put("/category/:id", (req: Request, res: Response) => {
        try {
            const id = parseInt(req.params.id)
            const name = req.body.name
            const check_name = db.find(item => item.name === name)
            const check_id = db.findIndex(item => item.id === id)
            let category = null

            if(check_name){
                res.status(409).json({
                    message: "Category name has been used",
                    data: category,
                });
            } else {
                if(check_id == -1){
                    res.status(404).json({
                        message: "Category not found",
                        data: category,
                    });
                } else {
                    db[check_id].name = name
            
                    res.status(200).json({
                        message: "Category has been updated",
                        data: db[check_id],
                    });   
                }
            }
        } catch (error) {
            res.status(500).json({
                message: "error",
                data: "Something wrong happen",
            }); 
        }
    });

    // Nomor 5 : Buatlah route DELETE yang menghapus kategori berdasarkan ID.
    app.delete("/category/:id", (req: Request, res: Response) => {
        try {
            const id = parseInt(req.params.id)
            const check_id = db.findIndex(item => item.id === id)

            if(check_id == -1){
                res.status(404).json({
                    message: "Category not found",
                });
            } else {
                db.splice(check_id, 1) 
        
                res.status(200).json({
                    message: "Category has been deleted",
                });   
            }
        } catch (error) {
            res.status(500).json({
                message: "error",
                data: "Something wrong happen",
            }); 
        }
    });

    // Nomor 6 : Buatlah route GET dengan query string untuk mencari produk berdasarkan nama. Anda bisa asumsikan data produk disimpan dalam array seperti ini: [{ id: 1, name: 'Laptop', category: 'Elektronik' }, { id: 2, name: 'Meja', category: 'Perabotan' }].
    app.get("/product", (req: Request, res: Response) => {
        try {
            const name = req.query.name
            const result = db_product.find(item => item.name === name)
            res.status(result ? 200 : 404).json({
                message: result ? "Product has fetched" : "Product not found",
                data: result,
            });
        } catch (error) {
            res.status(500).json({
                message: "error",
                data: "Something wrong happen",
            }); 
        }
    });

    // Nomor 7 : Buatlah route GET dengan parameter dan query string untuk mendapatkan produk dalam kategori tertentu dan mencari berdasarkan nama. Anda bisa menggunakan array produk dari soal sebelumnya.
    app.get("/product/:category", (req: Request, res: Response) => {
        try {
            const category = req.params.category
            const name = req.query.name
            const result = db_product.find(item => item.name === name && item.category === category)
            res.status(result ? 200 : 404).json({
                message: result ? "Product has fetched" : "Product not found",
                data: result,
            });
        } catch (error) {
            res.status(500).json({
                message: "error",
                data: "Something wrong happen",
            }); 
        }
    });

    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}

init();
