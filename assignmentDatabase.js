let database = [];
const sampleObject = 
      {
	dueDate: new Date,
	fileName: "homework.txt",
	fileType: "txt",
	className: "Spanish 3"
};
database.push(sampleObject);
const getAll = () => 
{
	return database;
};
const searchClass = (className) => 
{
	let temp = [];
	database.forEach((element)=> 
                   {
		if (element.className == className)
    {
			temp.push(element);
		}
	});
	return temp;
}
const addNew = (fileName, className, dueDate) => 
{
	const assignment = 
        {
		dueDate,
		fileName,
		fileType: fileName.split(".") [-1],
		className
	}
	database.push(assignment);
}
