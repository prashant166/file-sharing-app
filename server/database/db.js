import mongoose from 'mongoose';


const DBConnection = async () => {
  const MONGO_URI = `mongodb+srv://user:filesharing@filesharingsimple.kqanxrc.mongodb.net/?retryWrites=true&w=majority&appName=filesharingsimple`;
  try {
      await mongoose.connect(MONGO_URI, { useNewUrlParser: true });
      console.log('Database connected succesfully');
  } catch (error) {
      console.error('Error while connecting with database ', error.message);
  }
}

export default DBConnection;