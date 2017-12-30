/**
 * Description:
 */


export type HeadingModel = {
	name: string,
	slug: string,
	size?: number
};

class HeadingType<HeadingModel> {
	constructor(args : HeadingModel) {
		this.name = args.name;
		this.slug = args.slug;
		this.size = args.size || 1;
	}
}

export default HeadingType;