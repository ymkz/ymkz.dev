type Env = {
	ASSETS: Fetcher;
};

const worker: ExportedHandler<Env> = {
	fetch(request, env) {
		return env.ASSETS.fetch(request);
	},
};

export default worker;
