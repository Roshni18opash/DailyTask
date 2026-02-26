import mongoose from 'mongoose'

const companyModelSchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
      unique: true, 
    },
    website: {
      type: String,
      required: true,
    },
    industry: {
      type: String,
      required: true,
    },
    customIndustry: {
      type: String,
    },
    companySize: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

export const Company = mongoose.model('Company', companyModelSchema)