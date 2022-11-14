import EditorJs from "@natterstefan/react-editor-js";
import { patchNote } from "../../service/note";
import { noteAdapter } from "../../utils/Adapter";
import { EditorTools } from "./EditorTools";

const NoteEditor = ({ note, onReady }) => {
  const editor = null;

  // const onReady = () => {
  //   // https://editorjs.io/configuration#editor-modifications-callback
  //   console.log("Editor.js is ready to work!");
  // };
  let timer;
  const onChangeHandler = async (api, event) => {
    // https://editorjs.io/configuration#editor-modifications-callback
    // console.log("Now I know that Editor's content changed!", event);
    clearTimeout(timer);

    timer = setTimeout(async () => {
      const outputData = await editor.save();

      const newNote = noteAdapter
        .setNote(note)
        .setBlocks(outputData.blocks)
        .getPatchacbleNote();
      console.log(newNote);
      patchNote(newNote);
    }, 1000);
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
        data={note.blocks}
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
