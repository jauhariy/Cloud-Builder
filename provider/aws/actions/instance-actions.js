import { RunInstancesCommand, DescribeInstancesCommand } from "@aws-sdk/client-ec2"; 

// Creates a new instance or runs existing instance depending on options
export async function createInstance(ec2Client, {
	...options
}) {
	// validation of the options object can take place here
	const command = new RunInstancesCommand(options);
	const response = await ec2Client.send(command);
	return response;
}

// Returns information on instance based on InstanceId
export async function describeInstances(ec2Client, instanceIds) {
	const command = new DescribeInstancesCommand({InstanceIds: instanceIds});
    const response = await ec2Client.send(command);
    return response;
}
