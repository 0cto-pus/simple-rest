import app from './app';
import dbConnection from './config/db';

const start = async () => {
  const PORT = process.env.PORT || 3000;

  await dbConnection();

  app
    .listen(PORT, () => {
      console.log(`Grade service is running on port ${PORT}`);
    })
    .on('error', (err) => {
      console.log(err);
      process.exit();
    });
};
start();
