import { notes } from "../../../src/utils/const";
export default function handler(req, res) {
  res.status(200).json(notes);
}
