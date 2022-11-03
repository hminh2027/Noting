export class NoteAdapter {
  constructor(note) {
    this.note = note;
  }
  getContent() {
    return { blocks: this.note.content };
  }
  exportContent() {
    return { content: [] };
  }
}
