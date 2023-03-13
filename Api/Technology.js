const get=(req,res)=>{
    res.send([
        {
            "id": 7,
            "title": "IOT",
            "img":"https://www.simplilearn.com/ice9/free_resources_article_thumb/iot-explained-what-it-is-how-it-works-and-its-applications-banner.jpg", 
            "category": "Technology",
            "article":"Iot Explained.What it is, How it works, Why it matters."
               },
        {
            "id": 8,
            "title": "Datascience",
            "img": "https://www.simplilearn.com/ice9/free_resources_article_thumb/Data-Science-vs.-Big-Data-vs.jpg",
            "category": "Technology",
            "article":"Data Science vs Big Data vs Data Analytics"
    
        },
        {
            "id": 9,
            "title": "fullstack developmentt",
            "img":"https://cdn.educba.com/academy/wp-content/uploads/2019/11/full-stack-web-developer.png",
            "category": "Technology",
            "article":"The Rise of Full Stack Freelancing" 
     
              }
    ]);
}
module.exports.apiController=get;