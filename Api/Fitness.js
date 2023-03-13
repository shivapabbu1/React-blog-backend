const fitdata=(req,res)=>{
    res.send(
        [
            {
                "id": 13,
                "title": "Running",
                "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Ludovic_and_Lauren_%288425515069%29.jpg/330px-Ludovic_and_Lauren_%288425515069%29.jpg",
    
                "article": "Regular physical activity such as running can significantly improve mental health, self-confidence, healthy ageing, and quality of life."
                ,
                "category": "Fitness",
                 },
            {
                "id": 13,
                "title": "skateboarding",
                "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Lenna_skates_in_front_of_the_Barclays_Center_-_Brooklyn%2C_NY.jpg/330px-Lenna_skates_in_front_of_the_Barclays_Center_-_Brooklyn%2C_NY.jpg",
          
                "article": "skatebording it's an endurance sport, fitness skating stimulates your entire cardiovascular system, develops heart muscle, and improves blood flow. If done regularly"
                ,
                "category": "Fitness",
                },
            {
                "id": 13,
                "title": "Swimming",
                "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Natacio.jpg/330px-Natacio.jpg",
           
                "article": "Other benefits of swimming · being a relaxing and peaceful form of exercise · alleviating stress · improving coordination, balance and posture ·"
              ,
                "category": "Fitness",
                }
        ]
    )
}
module.exports.apiController=fitdata;