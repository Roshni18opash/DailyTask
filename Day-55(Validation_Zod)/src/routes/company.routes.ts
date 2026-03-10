import express from 'express'
import {
  getCompanies,
  showAddForm,
  addCompany,
  showEditForm,
  updateCompany,
  deleteCompany,
} from '../controllers/company.controller'

const router = express.Router()

router.get('/', getCompanies)
router.get('/add', showAddForm)
router.post('/add', addCompany)

router.get('/edit/:id', showEditForm)
router.post('/edit/:id', updateCompany)

router.get('/delete/:id', deleteCompany)

export default router