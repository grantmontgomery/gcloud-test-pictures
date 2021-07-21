const { fetch } = require("node-fetch");

exports.getPictures = async (req, res) => {
  try {
    res.set("Access-Control-Allow-Origin", "*");
    if (req.method === "OPTIONS") {
      res.set("Access-Control-Allow-Methods", "GET, POST");
      res.set("Access-Control-Allow-Headers", "Content-Type");
      res.set("Access-Control-Max-Age", "3600");
      res.status(204).send();
    }

    const unsplashAPIURL = new URL("https://api.unsplash.com/search/photos");

    unsplashAPIURL.searchParams.append("query", req.body.query);

    const response = await fetch(unsplashAPIURL, {
      headers: {
        Authorization: `Client-ID ${process.env.REACT_APP_CLIENT_ID}`,
      },
    });
    const responseJSON = await response.json();

    res.status(200).send(responseJSON);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
