const mongoose = require ('mongoose');
const Store = mongoose.model('Store');

exports.homePage = (req,res) => {
  res.render('index');
}

exports.addStore = (req,res) => {
  res.render('editStore', {title: 'AddStore'});
}

exports.createStore = async (req,res) => {
  const store = await (new Store(req.body)).save().then(console.log(req.body));
  console.log(store.slug);
  req.flash('success',`Successfully created ${store.name}.care to leave a review?`)
  res.redirect(`/store/${store.slug}`);
  console.log(req.body);
}
