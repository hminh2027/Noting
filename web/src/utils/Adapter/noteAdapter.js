class NoteAdapter {
  constructor() {
    this.note = undefined;
  }
  setNote(note) {
    this.note = note;
    return this;
  }
  setTitle(title) {
    this.note.title = title;
    return this;
  }
  convertContentToBlock() {
    this.note = {
      ...this.note,
      blocks: { blocks: JSON.parse(this.note.content) },
    };

    return this;
  }
  convertBlockToContent() {
    this.note = {
      ...this.note,
      content: JSON.stringify(this.note.blocks.blocks),
    };
    return this;
  }
  getNote() {
    return this.note;
  }
  setBlocks(blocks) {
    this.note.blocks = { blocks: blocks };
    this.convertBlockToContent();
    return this;
  }
  setContent(content) {
    this.note.content = content;
    this.convertContentToBlock();
    return this;
  }
  getPatchacbleNote() {
    const { snapshots, comments, sharedNotes, blocks, ...noteToReturn } =
      this.note;
    return noteToReturn;
  }
}
export const noteAdapter = new NoteAdapter();
