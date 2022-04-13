const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	name: String,
	googleId: {
	  type: String,
	  required: true
	},
	email: String,
	avatar: String,
    trees: [{type: Schema.Types.ObjectId, ref: 'Node'}], //these are root nodes
  }, {
	timestamps: true
  });

module.exports = mongoose.model('User', userSchema);