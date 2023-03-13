const fooddata=(req,res)=>{
    res.send(
    [
        {
            "id": 10,
            "title": "biryani",
            "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR76dzfRW6VjXWfQlgAGxMxwew2A3JQFbC-YQ&usqp=CAU",
            "category": "Food",
            "article": "biryani is a spiced mix of meat and rice, traditionally cooked over an open fire in a leather pot. "
    
             },
        {
            "id": 11,
            "title": "kebab",
            "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSEBV4evZFMfYnO45FuvEp2HMILAiwzGbwIw&usqp=CAU" ,
            "category": "Food",
            "article":"Kebabs consist of cut up or ground meat, sometimes with vegetables and various other accompaniments."
            

                  },
        {
            "id": 12,
            "title": "mandi",
            "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBm4ueDUuOZzULi9HFRXqkp3pNUDHRysG25w&usqp=CAU",
            "category": "Food",
            "article": "Mandi is a delicious combination of rice, chicken and a mixture of spices. ",

                  }
    ]
    )
}
module.exports.apiController=fooddata;