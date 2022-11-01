import EditorJs from "@natterstefan/react-editor-js";
import { EditorTools } from "./EditorTools";
import { Button } from "@chakra-ui/react";
import { data as NoteData } from "./data";
const NoteEditor = ({ data, onChange, onReady }) => {
  const editor = null;

  // const onReady = () => {
  //   // https://editorjs.io/configuration#editor-modifications-callback
  //   console.log("Editor.js is ready to work!");
  // };

  // const onChange = (api, event) => {
  //   console.log(api, event);
  //   // https://editorjs.io/configuration#editor-modifications-callback
  //   console.log("Now I know that Editor's content changed!");
  // };

  // const onSave = async () => {
  //   // https://editorjs.io/saving-data
  //   try {
  //     const outputData = await editor.save();
  //     console.log("Article data: ", outputData);
  //   } catch (e) {
  //     console.log("Saving failed: ", e);
  //   }
  // };
  return (
    <div>
      {/* docs: https://editorjs.io/configuration */}
      <EditorJs
        data={data}
        holder="custom-editor-container"
        onReady={onReady}
        onChange={onChange}
        editorInstance={(editorInstance) => {
          editor = editorInstance;
        }}
        tools={EditorTools}
      >
        <div id="custom-editor-container" />
      </EditorJs>
    </div>
  );
};
export default NoteEditor;
