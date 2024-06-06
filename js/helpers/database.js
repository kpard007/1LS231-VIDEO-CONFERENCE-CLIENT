class DatabaseHelper{
    static chats = [];
    static notes = [];
    
    static saveChat(chat){
        this.chats.push(chat)
        return true;

    }

    static getChats(roomCode){
/*
        var action;
        var message;
        var name;
        var picture;   
      [action,message,[name,picture]]=basedatos(roomCode); */

        data =["action"="chat",
                "message"="xyz",
                "sender"={"name":"joen DOe",
                         "picture":"images/avatar.jpeg"}]
        return data;
    }

    static addNote(note){
        this.chats.push(note)
        var noteId = "123456";
        return noteId;
    }

    static editNote(note){
        return true;

    }

    static deleteNote(idNote){
        return true;

    }


    static getNotes(roomCode){

        /*
        var sender;
        var picture;
        var content;
        var color;  */

        note = ["sender"={"name":"XYZ",
               "picture":"images/avatar.jpeg"},
               "content"={"mesage":"XYZ",
               "color":"#000"}
               ]
          
    }
}

export default DatabaseHelper;