package hack.fhws.de.artemplate;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by laurafeldmann on 10.06.16.
 */
public class Note {

    private String note;

    public Note(String note) {
        this.note = note;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public static List<Note> getInitialNotes(){
        List<Note> l = new ArrayList<>();
        for (int i = 0; i <= 10; i++){
            l.add(new Note("Notiz:" + i ));

        }

        return l;
    }
}
