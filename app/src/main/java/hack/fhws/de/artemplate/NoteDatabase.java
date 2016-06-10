package hack.fhws.de.artemplate;

import java.util.ArrayList;

/**
 * Created by laurafeldmann on 10.06.16.
 */
public class NoteDatabase {

    private static NoteDatabase instance;

    private ArrayList<Note> savednotes;

    public static NoteDatabase getInstance(){
        if (instance==null)
        {
            instance=new NoteDatabase();
        }
        return instance;
    }

    private NoteDatabase() {
        savednotes = new ArrayList<>();
        savednotes.addAll(Note.getInitialNotes());
    }

    public void save (Note note){

        savednotes.add(note);

    }

    public ArrayList<Note> load(){

        return savednotes;
    }

}
