import {NowRequest, NowResponse} from "@now/node";

module.exports = async (req: NowRequest, res: NowResponse) => {
	res.status(200).send("Hello from TypeScript! " + new Date().toISOString());
}

