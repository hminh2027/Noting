// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import httpProxy from "http-proxy";

export const config = {
  api: {
    bodyParser: false,
  },
};
const proxy = httpProxy.createProxyServer();
export default function handler(req, res) {
  req.headers.cookie = "";
  proxy.web(req, res, {
    target: "https://jsonplaceholder.typicode.com/",
    changeOrigin: true,
    selfHandleResponse: false,
  });
  //   res.status(200).json({ name: "John Doe" });
}
