onst express = require('express');
const bodyParser = require('body-parser');

const Mongoose = require("mongoose");


Mongoose.connect("mongodb://localhost/ProductInfo")

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var Schema = new Mongoose.Schema;


const ProductInfo = Mongoose.model('product', {
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

 app.use(express.static(__dirname + '/../react-client/dist'));

app.post('/product', async (request, response) => {
  try {
  var product = new ProductInfo(request.body);
  var result = await product.save();
  response.send(result);
  } catch (error) {
    response.status(500).send(error)
  }
})


app.get('/', (req, res) => {
  res.send(req.body)
});


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
