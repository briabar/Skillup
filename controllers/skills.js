const User = require('../models/user');
const Node = require('../models/tree');


function newRootNode(req, res) {
    console.log("WORKY WORKY");
    console.log(req.body)
    console.log(req.user)
    Node.create({
        skillName : req.body.skillName,
        level : 0,
        belongsTo: -1,
        branchID: 0,
        skillDetails: "",
        prereq: 0,
        nextNodes: [],
    }, function(err, newNode) {
        if(err) {
            console.log(err, '< Node.create, err 1')
            return res.redirect('/');
        }
        User.findOne({googleId : req.user.googleId}, function(err, foundUser) {
            if(err) {
                console.log(err, '< Node.create, err 2')
                return res.redirect('/');
            }
            console.log(foundUser.trees, "Should work...")
            foundUser.trees.push(newNode)
            foundUser.save()
            return res.redirect('/')
        })
    })
}

module.exports = {
    newRootNode
}