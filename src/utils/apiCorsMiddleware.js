import Cors from "cors";

export const corsMiddleware = Cors({
	origin: true,
	methods: ["POST", "OPTIONS"],
	preflightContinue: true,
});

export function runMiddleware(req, res, middleware) {
	return new Promise((resolve, reject) => {
		middleware(req, res, (result) => {
			if (result instanceof Error) {
				return reject(result);
			}

			return resolve(result);
		});
	});
}
