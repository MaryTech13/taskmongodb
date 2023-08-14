const mongodb = require ('mongodb') 
const mongoClient = mongodb.MongoClient 
const connectionUrl = 'mongodb://127.0.0.1:27017' 
const dbname = "task-1"
 mongoClient.connect(connectionUrl , (error,res1) =>{
   if(error){
     return console.log('error has occured') 
    }
 console.log('All Perf')

  const db = res1.db(dbname)

// insertOne '2 doc'

db.collection('users').insertOne({
        name : 'layla',
        age : 21
      },(error , data) =>{
        if(error){
            console.log('unable to insert data')
        }
        console.log(data.insertedId)
      })
      db.collection('users').insertOne({
        name : 'sara',
        age : 25
      },(error , data) =>{
        if(error){
            console.log('unable to insert data')
        }
        console.log(data.insertedId)
      })
      
      // insertMany '10 doc '


      db.collection('users').insertMany(
        [{
            name : 'abdussamed',
            age : 27
        },
        {
            name : 'mariem',
            age : 27
        },
        {
            name : 'sara',
            age : 27
        },
        {
            name : 'arwa',
            age : 27
        },
        {
            name : 'ali',
            age : 27
        },
        {
            name : 'islam',
            age : 40
        },
    
        {
            name : 'rahma',
            age : 32
        },
        {
            name : 'abubaker',
            age : 35

        },
        {
            name : 'ranya',
            age : 32
        },
        {
            name : 'rim',
            age : 18
        }], (error , data)=>{
            if(error){
                console.log('unable to insert data')
            }})

            // find

            db.collection('users').find({age:27}).toArray((error, users)=>{
                    if(error){
                        return console.log('error has occured')
                    }
                    console.log(users)})

         // limit

         db.collection('users').find({age:27}).limit(3).toArray((error, users)=>{
                if(error){
                    return console.log('error has occured')
                }
                console.log(users)})        
        
        //$set 

        db.collection('users').updateOne({_id :mongodb.ObjectId("64da527dd9987904297a275b")},{
            $set:{name : "Oumama"}, 
            $inc:{age : 4}
        })
        db.collection('users').updateOne({_id :mongodb.ObjectId("64da527dd9987904297a275c")},{
            $set:{name : "Walid"}, 
            $inc:{age : 4}
        })
        db.collection('users').updateOne({_id :mongodb.ObjectId("64da527dd9987904297a275d")},{
            $set:{name : "Ramyy"}, 
            $inc:{age : 4}
        })

        db.collection('users').updateOne({_id :mongodb.ObjectId("64da527dd9987904297a275e")},{
            $set:{name : "Ashraf"}, 
            $inc:{age : 4}
        })

      //updatMany

      db.collection('users').updateMany({},{  
            $inc:{age: 10}
        }) 
        
        //deleteMany

        db.collection('users').deleteMany({age:41})
        .then((data1) => {console.log(data1.deletedCount)}) 
        .catch((error)=>console.log(error))


})