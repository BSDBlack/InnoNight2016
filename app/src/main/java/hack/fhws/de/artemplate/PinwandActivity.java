package hack.fhws.de.artemplate;

import android.app.FragmentManager;
import android.content.DialogInterface;
import android.content.Intent;
import android.os.Bundle;
import android.support.design.widget.FloatingActionButton;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.view.View;

import java.util.List;


public class PinwandActivity extends AppCompatActivity {

    private NoteDatabase db = NoteDatabase.getInstance();
    private List<Note> NotesList = db.load();
    private PinwandAdapter adapter;
    private RecyclerView rv_notes;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.rv_notes);

        rv_notes=(RecyclerView)findViewById(R.id.rv_notes);
        LinearLayoutManager llm = new LinearLayoutManager(this);
        //llm.setOrientation(LinearLayout.VERTICAL);
        rv_notes.setLayoutManager(llm);

        adapter = new PinwandAdapter(getBaseContext(), NotesList);

        rv_notes.setAdapter(adapter);

        FloatingActionButton fab = (FloatingActionButton) findViewById(R.id.fab);
        assert fab != null;
        fab.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                showDialog(view);
            }
        });

    }

    public void showDialog(View view){
        FragmentManager manager = getFragmentManager();
        NoteDialogFragment noteErstellenDialog = new NoteDialogFragment();
        noteErstellenDialog.show(manager, "Note erstellen");

    }


}
