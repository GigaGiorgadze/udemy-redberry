function handler(req, res) {
	if (req.method === "POST") {
		const userEmail = req.body.email;

		if (!userEmail || !userEmail.includes("@")) {
			res.status(422).json({ message: "Invalid email adress" });
			return;
		}

		res
			.status(201)
			.json({ message: "now we have your email time to spam u :)" });
	}
}

export default handler;
