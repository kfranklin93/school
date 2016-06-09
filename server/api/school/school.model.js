'use strict';

import mongoose from 'mongoose';

var SchoolSchema = new mongoose.Schema({
  name: String,
  info: String,
  address: String,
  city: String,
  state: String,
  zipcode: String,
  description: String,
  imageFile:   String
});

export default mongoose.model('School', SchoolSchema);
