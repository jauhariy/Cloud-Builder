import { CreateVpcCommand, DescribeVpcsCommand, DeleteVpcCommand } from "@aws-sdk/client-ec2"; 
import { validateVPCOptions } from "../validation/validationVPC.js"

// Creates a new VPC
export async function createVpc(ec2Client, {
	name,
	...options
}) {
	const validatedOptions = await validateVPCOptions(options);
	const command = new CreateVpcCommand(validatedOptions);
	const response = await ec2Client.send(command);
	return response;
}

// Returns information on VPC based on VpcId
export async function describeVpcs(ec2Client, vpcIds) {
	const command = new DescribeVpcsCommand({VpcIds: vpcIds});
    const response = await ec2Client.send(command);
    return response;
}

// Terminates an instance by ID
export async function deleteVPC(ec2Client,vpcId) {	  
	
	const command = new DeleteVpcCommand({
		VpcId: vpcId
	});

	try {
	  	await ec2Client.send(command);
	//   	await waitUntilVpc??ConnectionDeleted( doesn't work for vpc, find an alternative, please
	// 		{ client: ec2Client },
	// 		{ InstanceIds: [instanceI] },
	//   );
	  console.log(`🧹 Instance with ID ${vpcId} terminated.\n`);
	} catch (err) {
	  console.warn(`Failed to terminate instance ${vpcId}.`, err);
	}
};