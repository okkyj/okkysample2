# Decisions
PS: I have not yet used any koa framework. I used mainly express.js and for this I have to look at documentation and some quick tutorials. In addition, I also just see ES7 today.

I used some restaurant POI data, one specific Indonesian restaurant is near your office! It's called mabuhay. I add one other restaurant near it to add it to the viewport. One other restaurant is very far, its in Indonesia, so it should not be shown in the bounding box.

I put some sample POI and setup a mongoDB file to store a collection Poi, which is an object that contains name, and a object coordinate which contains latitude and longitude information. 

Point list and its id:
Brother(Greek restaurant id) 5b3acd6ddd4bbb2d14a7b3f7
Sederhana(Indonesian restaurant in indonesia) 5b3acf31670ba91ab4613b46
Mabuhay(Indonesian restaurant in Berlin) 5b3acf71bf66181e28c9f397


# Question
I am not sure how to create an npm packages so that it can be npm installed. Tutorials suggest publishing it to the npm site. Is there any way to do it locally?

#Open Issues
There is still some bugs in showing all points inside a viewport. But the basic idea is to use Query.prototype.box() that I read in the mongoosejs docs. 

