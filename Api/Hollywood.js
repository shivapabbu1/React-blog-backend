const hollydata=(req,res)=>{
    res.send([
        {
            "id": 4,
            "title": "2012",
            "img": "http://gonewiththetwins.com/new/wp-content/uploads/2014/01/2012.jpg",
            "category": "Hollywood",
            "article":"A frustrated writer struggles to keep his family alive when a series of global catastrophes threatens to annihilate mankind."


             },
        {
            "id": 5,
            "title": "matrix",
            "img": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/the-matrix-1574173308.jpg",
            "category": "Hollywood",
            "article":"When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life."
             },
        {
            "id": 6,
            "title": "harrypoter",
            "img": "https://assets.gadgets360cdn.com/pricee/assets/product/202112/harry_potter_return_to_hogwarts_1640957863.jpg",
            "category": "Hollywood",
            "article":"Harry Potter is an orphaned boy brought up by his unkind Muggle (non-magical) aunt and uncle."
            
        }
    ])
}
module.exports.apiController=hollydata;