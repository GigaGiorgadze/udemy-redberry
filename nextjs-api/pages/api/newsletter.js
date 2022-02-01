import { MongoClient } from "mongodb";
import { password } from "../../databaseCreds";

async function handler(req, res) {
	if (req.method === "POST") {
		const userEmail = req.body.email;

		if (!userEmail || !userEmail.includes("@")) {
			res.status(422).json({ message: "Invalid email adress" });
			return;
		}
		const client = await MongoClient.connect(
			`mongodb+srv://giga:${password}@cluster0.7chb3.mongodb.net/nextEvents?retryWrites=true&w=majority`
		);
		const db = client.db();

		await db.collection("emails").insertOne({ email: userEmail });

		client.close();

		res
			.status(201)
			.json({ message: "now we have your email time to spam u :)" });
	}
}

export default handler;
