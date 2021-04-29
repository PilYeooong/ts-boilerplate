import app from './app';
import 'reflect-metadata';
import { createConnection } from 'typeorm';

const PORT = 4000;

createConnection()
  .then(() => {
    console.log(`DB Connected !`);
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
    console.log(`DB 연결을 확인해주세요.`);
  });
