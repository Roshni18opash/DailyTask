import mongoose from 'mongoose'

export const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/ZOD_DB')
    console.log('Database Connected Successfully!')
  } catch (error) {
    console.error('DataBase connection failed!')
    process.exit(1)
  }
}