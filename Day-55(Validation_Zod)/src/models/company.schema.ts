import { z } from 'zod'

export const industryList = [
  'Technology',
  'Finance',
  'Healthcare',
  'Education',
  'IT Services',
  'E-commerce',
  'Software',
  'FinTech',
  'Marketing',
  'Consulting',
  'Food Delivery',
  'Automobile',
  'Construction',
  'Energy',
  'Other',
]
export const companySizeList = [
  '1-10',
  '11-50',
  '51-200',
  '201-500',
  '501-1000',
  '1000+',
]

export const companySchema = z
  .object({
    companyName: z
      .string({ required_error: 'Company name is required' })
      .min(2, 'Company name must be at least 2 characters')
      .max(100, 'Company name must be less than 100 characters'),

    website: z
      .string({ required_error: 'Website is required' })
       .min(1, 'Website is required')
      .url('Please enter a valid URL'),
     // .regex(/^https?:\/\/.+/, 'URL must start with http:// or https://'),

    industry: z
      .string({ required_error: 'Industry is required' })
      .refine((val) => industryList.includes(val), {
        message: 'Please select a valid industry',
      }),

    customIndustry: z.string().optional(),

    companySize: z
      .string({ required_error: 'Company size is required' })
      .refine((val) => companySizeList.includes(val), {
        message: 'Please select a valid company size',
      }),
  })
  .superRefine((data, ctx) => {
    if (data.industry === 'Other' && !data.customIndustry) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Custom industry is required when 'Other' is selected",
        path: ['customIndustry'],
      })
    }

    if (data.industry !== 'Other' && data.customIndustry) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message:
          "Custom industry is not allowed when 'Other' is not selected",
        path: ['customIndustry'],
      })
    }
  })

export type CompanyInput = z.infer<typeof companySchema>