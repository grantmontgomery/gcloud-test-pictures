exports.getPictures = async (req, res) => {
  try {
    res.set("Access-Control-Allow-Origin", "*");
    if (req.method === "OPTIONS") {
      res.set("Access-Control-Allow-Methods", "GET, POST");
      res.set("Access-Control-Allow-Headers", "Content-Type");
      res.set("Access-Control-Max-Age", "3600");
    }

    res.status(200).send("Gcloud test pictures serverless function");
  } catch (error) {
    res.status(500).send(error.message);
  }
};
