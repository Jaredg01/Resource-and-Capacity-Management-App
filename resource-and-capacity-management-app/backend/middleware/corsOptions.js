// Configure CORS options
const allowedOrigin = process.env.FRONTEND_URL || null;

const corsOptions = {
  origin: allowedOrigin ? allowedOrigin : false,
  credentials: true
};

export default corsOptions;