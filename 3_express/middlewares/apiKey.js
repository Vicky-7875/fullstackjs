function apiKey(req, res, next) {
  const api_key = "1234567";
  //   console.log(req.bo dy);///get from form data
  console.log(req.query.api_key); //from url
  const userApiKey = req.query.api_key;
  if (userApiKey && userApiKey === api_key) {
    next();
  } else {
    res.json({ message: "Not Allowed" });
  }
}

module.exports = apiKey;
