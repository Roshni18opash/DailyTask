import express from 'express'
import path from 'path'
import { connectDB } from './config/db'
import companyRoutes from './routes/company.routes'
import { errorHandler } from './middleware/errorHandler'

const app = express()

connectDB()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// EJS setup
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// static folder
app.use(express.static(path.join(__dirname, '../public')))

app.use('/companies', companyRoutes)
app.get('/', (req, res) => {
  res.redirect('/companies')
})
app.use(errorHandler)
const PORT = 5000
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})


//Why use Zod instead of Joi?
// Zod is TypeScript-first
// Automatic type inference
// No separate interface needed
// Better developer experience