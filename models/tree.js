const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const nodeSchema = new Schema({
    // user: userSchema.id,
    skillName: {
        type: String,
    },
    level: {
        type: Number,
    },
    belongsTo: {
        type: Schema.Types.ObjectId,
    },
    branchId: {
        type: Number,
        default: 0,
    },
    skillDetails : {
        type: String, //this needs to be sanitised... mongo-sanitize?
    }, 
    preReq: {
        type: Number,
        default: 0,
    },
    nextNodes: [{type: Schema.Types.ObjectId, ref: 'Node', autopopulate: true}],
        //need to require that nodes referenced here be one level higher than next...maybe
        //Thinking more, maybe we don't need to care about the level of the node for linking purposes...
});
nodeSchema.plugin(require('mongoose-autopopulate'))

module.exports = mongoose.model('Node', nodeSchema);