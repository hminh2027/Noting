import Header from "@editorjs/header";
import List from "@editorjs/list";
import CheckList from "@editorjs/checklist";
import Code from "@editorjs/code";
import Delimiter from "@editorjs/delimiter";
import Embed from "@editorjs/embed";
import ImageTool from "@editorjs/image";
import InlineCode from "@editorjs/inline-code";
import Link from "@editorjs/link";
import Marker from "@editorjs/marker";
import Paragraph from "@editorjs/paragraph";
import Quote from "@editorjs/quote";
import Raw from "@editorjs/raw";
import Table from "@editorjs/table";
export const EditorTools = {
  header: Header,
  list: List,
  checklist: CheckList,
  code: Code,
  delimiter: Delimiter,
  embed: Embed,
  image: {
    class: ImageTool,
    // config: {
    //   endpoints: {
    //     byFile: "http://localhost:8008/uploadFile", // Your backend file uploader endpoint
    //     byUrl: "http://localhost:8008/fetchUrl", // Your endpoint that provides uploading by Url
    //   },
    // },
  },
  "inline-code": InlineCode,
  link: Link,
  marker: Marker,
  paragraph: Paragraph,
  quote: Quote,
  raw: Raw,
  table: Table,
};
