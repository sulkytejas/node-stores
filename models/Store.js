const mongoose = require ('mongoose');
mongoose.Promise = global.Promise;
const slug = require('slugs');

const storeSchema = new mongoose.Schema ({
  name : {
    type: String,
    required: 'Please enter a store a store name',
    trim: true
  },
  slug: {
    type: String
  },
  description:{
    type: String,
    trim: true
  },
  tags: [String]
});

storeSchema.pre('save',function(next){

  if(!this.isModified('name')){
    next ();
    return;
  }

  this.slug = slug(this.name);
  next();

  //todo for unique slugs.
});


module.exports = mongoose.model('Store',storeSchema);
