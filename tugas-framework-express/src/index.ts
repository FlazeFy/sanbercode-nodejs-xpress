import express, { Request, Response } from "express";

const PORT = 3000;

function init() {
  const app = express();

  // Buat direktori public dan tambahkan file HTML sederhana, kemudian serve file tersebut menggunakan middleware express.static.
  app.use(express.static('public'))

  app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
      message: "OK",
      data: null,
    });
  });

  // Buat route untuk /hello yang mengembalikan
  app.get("/hello", (req: Request, res: Response) => {
    res.status(200).json({
      message: "Success fetch message",
      data: "Hello World!",
    });
  });

  // Buat route untuk /user yang mengembalikan
  app.get("/user", (req: Request, res: Response) => {
    res.status(200).json({
      message: "Success fetch user",
      data: {
        id: 1,
        name: "Budi",
        username: "budidu",
        email: "budidu@mail.com"
      },
    });
  });

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

init();
