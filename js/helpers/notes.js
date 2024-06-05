
class NotesHelper {
    constructor () {
        this.notes = [];
    }

    add(note) {
        const newId = "12345";
        const newNote = {id: newId, note};
        this.notes.push(newNote);
        return newID;
    }
    
    delete(noteId) {
        const index = this.notes.findIndex(note => note.id === noteId);
        if (index !== -1) {
            this.notes.splice(index, 1);
            return true;
        }
        return false;
    }


    getList(roomId) {
        return this.notes.filter(note => note.roomCode === roomId)
    }
}