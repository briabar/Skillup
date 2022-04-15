const User = require('../models/user');
const Node = require('../models/tree');


function newRootNode(req, res) {
    console.log("WORKY WORKY");
    console.log(req.body)
    Node.create({
        skillName : req.body.skillName,
        level : 0,
        // belongsTo: -1,
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
            // foundUser.
            foundUser.save()
            return res.redirect('/')
        })
    })
}

function newNode(req, res) {
    console.log("inside newNode()");
    //goal is to get mother node and add new node as nextNodes
    Node.findById(req.params.id, function(err, foundNode) {
        if(err) {
            console.log(err, '< this err')
            return res.redirect('/');
        }
        Node.create({
        skillName : req.body.skillName,
        level : req.body.level,
        belongsTo: req.body.belongsTo,
        branchID: foundNode.nextNodes.length,
        skillDetails: "",
        prereq: 0,
        nextNodes: [],

        }, function(err, newNode) {
            if(err) {
                console.log(err, '< this err')
                return res.redirect('/');
            }
            newNode.save();
            foundNode.nextNodes.push(newNode);
            foundNode.save();
            res.redirect('/')

        })
    })
}

module.exports = {
    newRootNode,
    newNode
}