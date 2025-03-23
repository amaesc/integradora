const express = require('express');
const prisma = require('./prismaClient');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const app = express();

app.use(cors());
app.use(express.json());

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== 'application/json') {
      return cb(new Error('Only JSON files are allowed'));
    }
    cb(null, true);
  },
});

if (!fs.existsSync('uploads')) {
  fs.mkdirSync('uploads');
}

app.get('/api/users', async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await prisma.user.findUnique({
    where: { email: email },
  });

  if (user && user.password === password) {
    res.json({ message: 'Login successful', user });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

app.post('/api/upload', upload.single('jsonFile'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const filePath = path.join(__dirname, 'uploads', req.file.filename);
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    let jsonData;
    try {
      jsonData = JSON.parse(fileContent); 
    } catch (error) {
      return res.status(400).json({ message: 'Invalid JSON file', error: error.message });
    }

    const createdJson = await prisma.JsonData.create({
      data: {
        data: jsonData,
      },
    });

    res.status(200).json({ message: 'JSON file uploaded successfully', data: createdJson });
    fs.unlinkSync(filePath);

  } catch (error) {
    console.error('Error uploading JSON file:', error);
    res.status(500).json({ message: 'Error uploading JSON file', error: error.message });
  }
});





/*
app.get('/api/json', async (req, res) => {
  try {
    const jsonData = await prisma.jsonData.findFirst();
    if (!jsonData) {
      return res.status(404).json({ message: 'No JSON encontrado en la base de datos' });
    }

    const filePath = path.join(__dirname, './Language/translation.json');
    fs.writeFileSync(filePath, JSON.stringify(jsonData.data, null, 2)); // Reemplazar el contenido del archivo

    res.status(200).json({ message: 'JSON reemplazado en el backend', data: jsonData.data });
  } catch (error) {
    console.error('Error al obtener o reemplazar el JSON:', error);
    res.status(500).json({ message: 'Error al reemplazar el JSON', error: error.message });
  }
});*/
app.get('/api/json', async (req, res) => {
  try {
    // Obtiene el último JSON insertado basado en el ID o en la fecha de creación
    const jsonData = await prisma.jsonData.findFirst({
      orderBy: {
        id: 'desc' // Asegúrate de usar el campo correcto para ordenar, por ejemplo, 'id' o 'created_at'
      }
    });

    if (!jsonData) {
      return res.status(404).json({ message: 'No JSON encontrado en la base de datos' });
    }

    // Definir la ruta del archivo para guardar el JSON
    const filePath = path.join(__dirname, './Language/translation.json');
    
    // Reemplazar el contenido del archivo con el JSON obtenido
    fs.writeFileSync(filePath, JSON.stringify(jsonData.data, null, 2));

    // Responder al cliente con el mensaje y los datos
    res.status(200).json({ message: 'JSON reemplazado en el backend', data: jsonData.data });
  } catch (error) {
    console.error('Error al obtener o reemplazar el JSON:', error);
    res.status(500).json({ message: 'Error al reemplazar el JSON', error: error.message });
  }
});




app.listen(5000, () => {
  console.log('Server running on port 5000');
});
