import EditorJs from "@natterstefan/react-editor-js";
import { EditorTools } from "./EditorTools";

const NoteEditor = ({ note, onChange, onReady }) => {
  console.log(note);
  const editor = null;

  // const onReady = () => {
  //   // https://editorjs.io/configuration#editor-modifications-callback
  //   console.log("Editor.js is ready to work!");
  // };

  const onChangeHandler = (api, event) => {
    console.log(editor);
    // console.log(api, event);
    // https://editorjs.io/configuration#editor-modifications-callback
    // console.log("Now I know that Editor's content changed!");
  };

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
        data={{ blocks: note.blocks }}
        holder="custom-editor-container"
        onReady={onReady}
        onChange={onChangeHandler}
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
