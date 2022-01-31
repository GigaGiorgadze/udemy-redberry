import fs from "fs";
import path from "path";

function handler(req, res) {
	if (req.method === "POST") {
		const email = req.body.email;
		const feedbackText = req.body.text;

		const newFeedback = {
			id: new Date().toISOString(),
			email,
			text: feedbackText,
		};

		// store this in a database
		const filepath = path.join(process.cwd(), "data", "feedback.json");
		const fileData = fs.readFileSync(filepath);
		const data = JSON.parse(fileData);
		data.push(newFeedback);
		fs.writeFileSync(filepath, JSON.stringify(data));
		res
			.status(201)
			.json({ message: "feedback has been added", feedback: newFeedback });
	} else {
		res.status(200).json({ message: "This works?, hope so" });
	}
}

export default handler;
