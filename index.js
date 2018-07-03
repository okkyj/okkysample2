const   Koa	 	 = require('koa'),
		mongoose = require('mongoose'),
		convert = require('koa-convert'),
		bodyParser = require('koa-bodyparser'),
		router	= require('koa-simple-router')
		error 	 = require('koa-json-error'),
		logger	= require('koa-logger'),
		koaRes = require('koa-res')
		handleError = require('koa-handle-error'),
		BoundingBox = require('boundingbox'),
		poi = require('./controller/poi'),
		Poi = require('./model/Poi'),
		app = new Koa();
		

mongoose.Promise = require('bluebird')	
mongoose
.connect('mongodb://user1:user001@ds121861.mlab.com:21861/poidb')
.then((response) => {
	console.log('mongo connection created')
})
.catch((err) => {
	console.log("Error connecting to Mongo")
	console.log(err);
})

//error handling
app.use(async (ctx,next) =>{
	try{
		await next()
	} catch(err){
		ctx.status = err.status || 500
		ctx.body= err.message
		ctx.app.emit('error', err, ctx)
	}
})
//logging
app.use(logger())
//body parsing
app.use(bodyParser())
//format response as JSON
app.use(convert(koaRes()))
//configure router
app.use(router(_ =>{
	_.get('/saysomething', async(ctx )=> {
		ctx.body='hello world'
	}),
	_.get('throwerror', async (ctx)=> {
		throw new Error('Aggh! Error!')
	}),
	//show all points
	_.get('/pois', poi.getPois)
	//show all points in a viewport
	_.get('/pois/:id',poi.getPoi)
}))




//  var Poi = mongoose.model("Poi", poiSchema);

	// var interest = new Poi(
	// 	{
	// 	name: "Brother",
	// 	location:[
	// 		52.48986,
	// 		13.360069500000009
	// 	]
	// 	}
	// );
	
	// var interest = new Poi(
	// 	{
	// 	name: "Mabuhay",
	// 	location:[
	// 		52.5042363,
	// 		13.376169000000004
	// 	]
	// 	}
	// );

	// var interest = new Poi(
	// 	{
	// 	name: "Sederhana",
	// 	location:[
	// 		-6.8907129,
	// 		107.57447509999997
	// 	]
	// 	}
	// );

	
// interest.save(function(err,interest){
//     if(err){
//         console.log("SOMETHING WENT WRONG")
//     } else {
//         console.log("WE JUST SAVED A POI TO THE DB:")
//         console.log(interest)
//     }
// });

	



app.listen(3000, ()=>{
	console.log("Now serving port 3000")
});	