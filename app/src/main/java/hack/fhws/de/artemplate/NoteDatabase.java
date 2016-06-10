package hack.fhws.de.artemplate;

import java.util.ArrayList;

/**
 * Created by laurafeldmann on 10.06.16.
 */
public class NoteDatabase {

    private ArrayList<Note> savednotes;

    public NoteDatabase() {
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
