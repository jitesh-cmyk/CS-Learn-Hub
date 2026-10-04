window.subjectCourse = {
  subject: "MongoDB",
  modules: [
    ["Introduction to MongoDB", "What is MongoDB|Features & Advantages|MongoDB vs SQL"],
    ["NoSQL Database", "What is NoSQL|Types of NoSQL Databases|Benefits of NoSQL"],
    ["MongoDB Installation & Setup", "MongoDB Installation|MongoDB Compass|MongoDB Atlas"],
    ["MongoDB Architecture", "Database|Collection|Document|Field"],
    ["Documents & BSON", "JSON vs BSON|Document Structure|Data Types"],
    ["MongoDB CRUD Operations", "Create|Read|Update|Delete"],
    ["Database & Collection Management", "Create Database|Create Collection|Drop Database & Collection"],
    ["Insert Documents", "insertOne()|insertMany()|Insert Data Examples"],
    ["Query Documents", "find()|Query Conditions|Comparison Operators"],
    ["Update Documents", "updateOne()|updateMany()|Update Operators"],
    ["Delete Documents", "deleteOne()|deleteMany()|Delete Conditions"],
    ["MongoDB Operators", "Comparison Operators|Logical Operators|Array Operators"],
    ["Indexes", "What is Indexing|Creating Indexes|Advantages of Indexes"],
    ["Aggregation", "Aggregation Pipeline|$match|$group|$sort"],
    ["Data Relationships", "Embedded Documents|References|One-to-One & One-to-Many"],
    ["MongoDB with Applications", "Node.js & MongoDB|Connecting Database|CRUD with Application"],
    ["Practical MongoDB Projects", "Student Database|User Management System|Product Management System"]
  ].map(([title, topics]) => ({
    title,
    topics: topics.split("|").map((topic) => topic.trim())
  }))
};
