import { Request, Response,NextFunction } from 'express'
import { Company } from '../models/company.model'
import { companySchema } from '../models/company.schema'

// Show all companies
export const getCompanies = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const companies = await Company.find()
    res.render('index', { companies })
  } catch (error) {
    next(error)
  }
}

// Show from
export const showAddForm = (req: Request, res: Response) => {
  res.render('add')
}

// Add
export const addCompany = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = companySchema.safeParse(req.body)

    if (!result.success) {
      return res.send('Validation Error')
    }

    await Company.create(result.data)
    res.redirect('/companies')
  } catch (error) {
    next(error)
  }
}

// Edit
export const showEditForm = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const company = await Company.findById(req.params.id)
    res.render('edit', { company })
  } catch (error) {
    next(error)
  }
}
// Update
export const updateCompany = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await Company.findByIdAndUpdate(req.params.id, req.body)
    res.redirect('/companies')
  } catch (error) {
    next(error)
  }
}

// Delete
export const deleteCompany = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await Company.findByIdAndDelete(req.params.id)
    res.redirect('/companies')
  } catch (error) {
    next(error)
  }
}