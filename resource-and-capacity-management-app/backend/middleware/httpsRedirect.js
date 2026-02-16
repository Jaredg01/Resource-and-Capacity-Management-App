// Redirect HTTP to HTTPS in production
export default function httpsRedirect(req, res, next) {
  const isProduction = process.env.NODE_ENV === "production";
  const forwardedProto = req.headers["x-forwarded-proto"];

  if (isProduction && forwardedProto === "http") {
    return res.redirect("https://" + req.headers.host + req.url);
  }

  next();
}