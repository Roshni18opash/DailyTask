import mongoose from 'mongoose';

const LeadSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name.'],
    maxlength: [60, 'Name cannot be more than 60 characters'],
  },
  phone: {
    type: String,
    required: [true, "Please provide the lead's contact number."],
    maxlength: [20, 'Phone number cannot be more than 20 characters'],
  },
  selectedTypes: {
    type: [String],
    default: [],
  },
  query: {
    type: String,
    maxlength: [1000, 'Query cannot be more than 1000 characters'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Lead || mongoose.model('Lead', LeadSchema);
