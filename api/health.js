export default function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store, max-age=0');
  return res.status(200).json({
    status: 'ok',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
}
