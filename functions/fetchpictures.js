exports.getPictures = async (req, res) => {
  try {
    if (req.method !== "GET") throw new Error("Only get request enabled.");
    const unsplashPictures = new URL("https://api.unsplash.com/search/photos");

    const response = await fetch(unsplashPictures);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
