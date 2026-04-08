import { INodeType, INodeTypeDescription, NodeConnectionTypes } from 'n8n-workflow';

export class JsonPlaceholder implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'JSONPlaceholder',
		name: 'jsonPlaceholder',
		icon: 'file:jsonplaceholder.svg',
		group: ['output'],
		version: 1,
		description: 'Fetch a post from JSONPlaceholder API',
		defaults: {
			name: 'JSONPlaceholder',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		requestDefaults: {
			baseURL: 'https://jsonplaceholder.typicode.com',
			headers: {
				Accept: 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Post ID',
				name: 'postId',
				type: 'number',
				required: true,
				default: 1,
				description: 'The ID of the post to fetch',
				routing: {
					request: {
						method: 'GET',
						url: '=/posts/{{$value}}',
					},
				},
			},
		],
	};
}
