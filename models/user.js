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
    trees: [{type: Schema.Types.ObjectId, ref: 'Node', autopopulate: true}], //these are root nodes
  }, {
	timestamps: true
  });
userSchema.plugin(require('mongoose-autopopulate'))

module.exports = mongoose.model('User', userSchema);