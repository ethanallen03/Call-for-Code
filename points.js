const pointsdatabase = {}; //initial database object
const assignpoints = (user, points) => 
{
	if (!pointsdatabase.hasOwnProperty(user))
	{
		pointsdatabase[user] = points;
	} else {
		pointsdatabase[user] += points; //+=(a = a + 1; a +=1)
	};

	if (pointsdatabase[user] <= 0)
	{
		pointsdatabase[user] = 0;
	};
};

const checkpoints = (user) => 
{
	if (!pointsdatabase.hasOwnProperty(user))
	{
		pointsdatabase[user] = 0;
	}		
	return pointsdatabase[user];
};

const spendpoints = (user, points) =>
{
	if (points > 0)
	{
		points *= -1;
	}

	if (checkpoints(user) > Math.abs(points))
	{
		assignpoints(user, points);
	} else {
		return "You have insuffiecent points!";
	}
};

module.exports = { 
	assignpoints, checkpoints, spendpoints
};
