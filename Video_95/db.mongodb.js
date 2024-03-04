use("crudDB")
db.createCollection("courses")
db.courses.insertOne({
    name : "Dhyey",
    college : "DAIICT",
    branch : "MnC"
})
db.courses.insertMany(
    [
        { "name": "John Doe", "age": 25, "city": "Sample City" },
        { "name": "Jane Smith", "age": 30, "city": "Testville" },
        { "name": "Alex Johnson", "age": 22, "city": "Mockington" },
        { "name": "Emma White", "age": 28, "city": "Faketown" },
        { "name": "Ryan Black", "age": 35, "city": "Dummyburg" },
        { "name": "Sophia Brown", "age": 27, "city": "Exampleville" },
        { "name": "Chris Green", "age": 32, "city": "Trialton" },
        { "name": "Olivia Gray", "age": 29, "city": "Fiction City" },
        { "name": "Daniel Red", "age": 26, "city": "Simulationtown" },
        { "name": "Ella Blue", "age": 31, "city": "Testington" }
      ]
      
)
db.courses.updateMany({age:28},{$set:{age:70}});
let a = db.courses.find({city: {$gt: "Trialton"}});
console.log(a)
