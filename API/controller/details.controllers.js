var mongoose = require('mongoose');
var Detail = mongoose.model('Detail');

module.exports.detailsGetAll = function(req, res){
    
    console.log('Get the Details');
    console.log(req.query);

    Detail
        .find()
        .exec(function(err, details){
            console.log("Found Details", details.length);
            res
                .json(details);
        });
};

module.exports.detailsGetOne = function(req, res) {
    var id = req.params.detailId;
    console.log('GET detailId', id);
  
    Detail
      .findById(id)
      .exec(function(err, doc) {
        res
          .status(200)
          .json(doc);
      });
  
  };

module.exports.detailsAddOne = function(req,res){
    console.log('Post new Details');
    Detail
        .create({
            name : req.body.name,
            lname : req.body.lname,
            email : req.body.email,
            number : req.body.number
        }, function(err, detail){
            if(err){
                console.log("Error creating detail");
                res
                    .status(400)
                    .json(err);
            } else {
                console.log("Detail Created..!!", detail);
                res 
                    .status(201)
                    .json(detail);
            }
        });
};

module.exports.detailsUpdateOne = function (req, res){
    var detailId = req.params.detailId;

    console.log('Get detailId', detailId);

    Detail
        .findById(detailId)
        .exec(function (err, detail){
            if(err){
                console.log('Error')
                res
                    .status(500)
                    .json(err)
                    return;
            } else if(!detail){
                console.log('DetailId not found in database ', detailId);
                res 
                    .status(404)
                    .json({
                        "message" : "Detail Id not found" + detailId
                    });
                    return;
            }

            detail.name = req.body.name,
            detail.lname = req.body.lname,
            detail.email = req.body.email,
            detail.number = req.body.number

            detail
                .save(function(err, detailUpdated){
                    if(err){
                        res
                            .status(500)
                            .json(err);
                    } else {
                        res
                            .status(204)
                            .json({
                                "message" : "Details has been successfully Updated"
                            });
                            return;
                    }
                });
        });

}

module.exports.detailsDeleteOne = function(req, res){
    var detailId = req.params.detailId;

    Detail        
        .findByIdAndRemove(detailId)
        .exec(function(err){
            if(err){
                res
                    .status(404)
                    .json(err);
            } else {
                console.log("Deleted Deleted successfully", detailId);
                res
                    .status(204)
                    .json();
            }
        });
};