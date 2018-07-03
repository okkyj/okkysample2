const mongoose =require('mongoose')
var Schema = mongoose.Schema;

var PoiSchema =  mongoose.Schema = {
	name: String,
	location:{
        type: 'array',
        items:  {
                    type:Number
                }
	}
}

module.exports = mongoose.model("Poi", PoiSchema)