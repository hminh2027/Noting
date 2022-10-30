// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { data } from "../../src/components/Editor/data";
export default function handler(req, res) {
  res.status(200).json(data);
}
