'use strict';

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/product', { useNewUrlParser: true });
var Schema = new mongoose.Schema;
// ({ name: 'string', size: 'string' })


var ProductInfo = new Schema({
   id: Number,
   details: {
      highlights: [ String ],
      description: String,
      specifications: {
         otherCharacteristics: Object,
         TCIN: Number,
         UPC: Number,
         itemNumber: Number
      },
      qA: {
         questions: [
            {
               text: String,
               postDate: Date,
               user: String,
               answers: [
                  {
                     answer: String,
                     helpful: Number,
                     notHelpful: Number,
                  }
               ],
            }
         ],
      },
      shippingAndReturns: {
         shippingOptions: {
            getByDate: Date,
            description: String
         },
         shippingDetails: String,
         returnDetails: String
      },
   }
});

//var productInfodb = 'mongodb://localhost/productInfo'
//mongoose.connect('productInfo')

var Product = mongoose.model('Product', ProductInfo);