const {Router} = require('express')
const router = Router()

const Product = require("../moduls/product.mongoose")

router.get('/api/products', async (request, response) => {
    const products = await Product.find();

    response.status(200).json({success: true, data: products});
});


// router.get('/api/products/:article', async (request, response) => {
//     const {article} = request.params;
//     const product = await Product.findById(article);
//     response.status(200).json({success: true, data: product});
// });

router.get('/api/products/:id', async (request, response) => {
    Product
        .findById(request.params.id, request.body)
        .then(result => {
            response
                .status(200)
                .json(result)
        })


    // const {article} = request.params;
    // const product = await Product.findById(article);
    // response.status(200).json({success: true, data: product});
});


module.exports = router