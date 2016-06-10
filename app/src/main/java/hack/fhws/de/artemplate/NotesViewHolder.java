package hack.fhws.de.artemplate;

import android.content.Context;
import android.support.v7.widget.RecyclerView;
import android.view.View;
import android.widget.TextView;

/**
 * Created by Patrick on 10.06.2016.
 */
public class NotesViewHolder <T extends Note> extends RecyclerView.ViewHolder{
    private final Context context;
    private final TextView note;

    public NotesViewHolder(final Context context, final View view) {
        super(view);
        this.context = context;
        this.note= (TextView) view.findViewById(R.id.note);
    }

    public void setData(Note notes) {
        this.note.setText(notes.getNote());
    }
}
