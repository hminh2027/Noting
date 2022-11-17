class SnapshotAdapter {
  constructor() {
    this.snapshot = undefined;
  }
  setSnapshot(snapshot) {
    this.snapshot = snapshot;
    return this;
  }
  convertContentToBlock() {
    this.snapshot.blocks = { blocks: JSON.parse(this.snapshot.content) };
    return this;
  }
  getSnapshot() {
    return this.snapshot;
  }
}
export const snapshotAdapter = new SnapshotAdapter();
