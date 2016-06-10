package hack.fhws.de.artemplate;

import android.content.Context;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Patrick on 10.06.2016.
 */
public class PinwandAdapter extends RecyclerView.Adapter<NotesViewHolder<Note>>{

    public final Context context;
    private List<Note> NotesList;

    public PinwandAdapter(final Context context, final List<Note> NotesList){
        this.context = context;
        this.NotesList = new ArrayList<>(NotesList);
    }


    @Override
    public int getItemCount() {
        return NotesList.size();
    }

    @Override
    public NotesViewHolder<Note> onCreateViewHolder(ViewGroup parent, final int viewType) {
        LayoutInflater inflater = LayoutInflater.from(context);
        View view = null;
                view = inflater.inflate(R.layout.cv_notes, parent, false);
                return new NotesViewHolder(context, view);
    }


    @Override
    public void onBindViewHolder(final NotesViewHolder<Note> holder, final int position) {
        holder.setData(NotesList.get(position));
    }
    @Override
    public void onAttachedToRecyclerView(RecyclerView recyclerView) {
        super.onAttachedToRecyclerView(recyclerView);
    }
}
