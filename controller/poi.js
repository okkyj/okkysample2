const Poi = require('../model/Poi')
//show all points
var BoundingBox = require('boundingbox')
exports.getPois = async (ctx) => {
    const pois = await Poi.find({})
    if(!pois){
        throw new Error("There was an error retrieving all POI")
    } else{
        ctx.body = pois
    }
}
//Show all points inside the viewport
exports.getPoi = async (ctx) => {
    var poi = await Poi.findById(ctx.params.id)
	if (!poi) {
		throw new Error("There was an error retrieving POI and Viewport")
	} else {
        //still have bugs for the bbox query. center node has been found
        //and lower left and upper right points is calculated
        center = [poi.location[0], poi.location[1]]
        lowleft = [poi.location[0] -0.1, poi.location[1]-0.1]
        upright = [poi.location[0] +0.1, poi.location[1]+0.1]
        //const query = Poi.find();
        //query.where('location').within().box(lowleft, upright)
        console.log(upright)
        console.log(lowleft)
        console.log(center)
    }
}