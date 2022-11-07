class NoteAdapter {
  constructor() {
    this.note = undefined;
  }
  setNote(note) {
    this.note = note;
    return this;
  }
  convertContentToBlock() {
    return { blocks: JSON.parse(this.note.content) };
  }
  converBlockToContent() {
    return {};
  }
  exportContent() {
    return { content: [] };
  }
}
export const noteAdapter = new NoteAdapter();
