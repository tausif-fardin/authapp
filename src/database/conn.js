import mongoose from 'mongoose';

const connectMongo = async () => {
  mongoose.set('strictQuery', false);
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_URL);

    if (connection.readyState == 1) {
      //console.log('connected');
      return Promise.resolve(true);
    }
  } catch (error) {
    //console.log('not connected');
    return Promise.reject(error);
  }
};

export default connectMongo;
