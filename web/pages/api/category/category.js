import { noteCategories } from "../../../src/utils/const";
export default function handler(req, res) {
  res.status(200).json(noteCategories);
}
