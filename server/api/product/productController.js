const Product = require('./productModel');

exports.getAll = function(req, res, next){
    Product.find({})
    .then(function(products) {
        res.json(products);
    }, function(err){
        next(err);
    });
  };

  exports.post = function(req, res, next){
    let newProduct = req.body;
    Product.create(newProduct)
    .then(function(product){
        res.json(product);
    }, function(err){
        next(err);
    });
  
  };

exports.put = function(req, res, next){
    let newProduct = req.body;
    var id = req.params.id; 

    Product.findById(id, function(err, product) {
        if(err) next(err);

        Object.assign(product, newProduct);

        product.save(function(err, saved){
            if(err) next(err);
            res.json(saved);
        })
    });
  
  };