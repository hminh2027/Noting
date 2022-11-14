class NoteAdapter {
  constructor() {
    this.note = undefined;
  }
  setNote(note) {
    this.note = note;
    console.log(this.note);

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
    // return {
    //   id: this.note.id,
    //   content: this.note.content,
    //   isTemplate: this.note.isTemplate,
    //   isPublic: this.note.isPublic,
    //   categoryId: this.note.categoryId,
    //   title: this.note.title,
    // };
    const { sharedNotes, blocks, ...noteToReturn } = this.note;
    return noteToReturn;
  }
}
export const noteAdapter = new NoteAdapter();
