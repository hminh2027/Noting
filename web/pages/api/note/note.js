import { notes } from "../../../src/const";
export default function handler(req, res) {
  res.status(200).json(notes);
}
