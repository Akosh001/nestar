import { ObjectId } from 'bson';

export const availableAgentSorts = ['createdAt', 'updatedAt', 'memberLikes', 'memberViews', 'memberRank'];

export const shapeIntoMongoObjestId = (target: any) => {
	return typeof target === 'string' ? new ObjectId(target) : target;
};
