exports.validateUser = (req, res, next) => {
  let { name } = req.body;

  const nameRegex = /^[A-Za-z ]{2,30}$/;

  if (!name) {
    return res
      .status(308)
      .send(
        '<script>alert("Name are required"); window.location.href="/"</script>'
      );
  }

  req.body.name = name = name.trim();

  if (!nameRegex.test(name)) {
    return res
      .status(308)
      .send(
        '<script>alert("Your name must be alphabetic and in between 2 to 30"); window.location.href="/"</script>'
      );
  }

  next();
};
