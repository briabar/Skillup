const User = require('../models/user');
const Node = require('../models/tree');


function newRootNode(req, res) {
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

function deleteNode(req, res) {
    Node.findById(req.params.id, function(err, foundNode) {
        if(err) {
            console.log(err, '< this err');
            return res.redirect('/');
        }
        foundNode.remove(function(err){
			if(err) {
            console.log(err, 'this err');
			return res.redirect(`/`);
            }
		})
        foundNode.save(function(err){
			if(err) {
            console.log(err, 'this err');
			return res.redirect(`/`);
            }
		})

    });
}

function editPage(req, res) {
    Node.findById(req.params.id, function(err, foundNode) {
        if(err) {
            console.log(err, '< this err');
            return res.redirect('/');
        }
        res.render('./edit/', {
            'title' : "SKILL UP!",
            'node' : foundNode});
    });
    
}

function updateNode(req, res) {
    console.log('updateNode()')
    Node.findByIdAndUpdate(req.params.id, {
        skillName: req.body.skillName,
        skillDetails: req.body.skillDetails,
    }, function(err, updatedNode) {
        if(err) {
            console.log(err, '< this err');
            return res.redirect('/')
        }
        updatedNode.save(function(err) {
            if(err) {
                console.log(err, '< this err');
                return res.redirect('/')
            }
            return res.redirect('/');
        })
    })
}

module.exports = {
    newRootNode,
    newNode,
    deleteNode,
    editPage,
    updateNode,
}