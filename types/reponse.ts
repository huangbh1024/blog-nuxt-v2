export type Response<T> = {
	code: number;
	data: T;
	message: string;
	timestamp: string;
	path: string;
};
