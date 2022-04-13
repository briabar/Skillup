const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const nodeSchema = new Schema({
    // user: userSchema.id,
    level: {
        type: Number,
    },
    skillDetails : {
        type: String, //this needs to be sanitised... mongo-sanitize?
    }, 
    preReq: {
        type: Number,
        default: 0,
    },
    nextNodes: {
        type: [{type: Schema.Types.ObjectId, ref: 'Node'}],
        //need to require that nodes referenced here be one level higher than next...maybe
        //Thinking more, maybe we don't need to care about the level of the node for linking purposes...
    }

});

module.exports = mongoose.model('Node', nodeSchema);