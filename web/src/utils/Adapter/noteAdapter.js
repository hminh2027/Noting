class NoteAdapter {
  constructor() {
    this.note = undefined;
  }
  setNote(note) {
    this.note = note;
    return this;
  }
  convertContentToBlock() {
    this.note = { ...this.note, blocks: JSON.parse(this.note.content) };
    return this;
  }
  converBlockToContent() {
    this.note = { ...this.note, content: JSON.stringify(this.note.blocks) };
    return this;
  }
  getNote() {
    return this.note;
  }
  exportContent() {
    return { content: [] };
  }
}
export const noteAdapter = new NoteAdapter();
