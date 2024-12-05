import { ObjectId } from 'bson';

export const shapeIntoMongoObjestId = (target: any) => {
	return typeof target === 'string' ? new ObjectId(target) : target;
};
