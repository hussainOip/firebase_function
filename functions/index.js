const functions = require("firebase-functions");
const config = require('./config');
const db = require('./db.connection');
const PostSchema = require('./models/post.schema');
const cors = require('cors')({origin: true});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});


/**
 * Takes user input ‘search’ string out of the query parameters and passes the value to
 * MongoDB’s text query.
 *
 * @method GET searchPost
 * @return {Array} posts
 */
exports.searchPost = functions.https.onRequest((request, response) =>{
  cors(request, response, ()=>{
    db().then(async res=>{
      var regex = /^[a-zA-Z ]*$/;
      if(regex.test(request.query.search)){
        const postData = await PostSchema.find({title: {$regex: request.query.search, $options: 'i'} });
        console.log(postData,'HELLO');
        if(postData.length > 0){
          response.send({data: postData, success: true});
        }else {
          response.send({success: false, msg: 'Post Not Found'});
          return;
        }
      }else {
        response.send({success: false, msg: 'Invalid Search Params'});
      }
      console.log("DB CONNECTED");
    }).catch(err=>{
      console.log(err);
      response.send({success: false, msg: 'Internal Server Error'+err});
      return;
    })
  });
});