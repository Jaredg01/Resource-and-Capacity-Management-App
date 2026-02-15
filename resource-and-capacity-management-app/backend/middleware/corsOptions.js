const allowedOrigin = process.env.FRONTEND_URL || null;

const corsOptions = {
  origin: allowedOrigin ? allowedOrigin : false, // no wildcard fallback
  credentials: true,
};

export default corsOptions;