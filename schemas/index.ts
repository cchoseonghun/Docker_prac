import mongoose from 'mongoose';

const connect = () => {
  mongoose
    .connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.4l95n6a.mongodb.net/?retryWrites=true&w=majority`)
    .catch(err => console.log(err));
};

mongoose.connection.on("error", err => {
  console.error("MongoDB connection Error: ", err);
});

export default connect;