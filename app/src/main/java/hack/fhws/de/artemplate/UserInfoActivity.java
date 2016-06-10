package hack.fhws.de.artemplate;

import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

/**
 * Created by Patrick on 10.06.2016.
 */
public class UserInfoActivity extends AppCompatActivity{
    EditText ed1,ed2,ed3,ed4;
    Button b1;
    public static final String MyPREFERENCES = "MyPrefs" ;
    public static final String Name = "Username";
    public static final String EMail = "Email";
    public static final String Studienfach = "Studienfach";
    public static final int Semester = 1;
    SharedPreferences sharedpreferences;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_user_info);

        ed1=(EditText)findViewById(R.id.editText);
        ed2=(EditText)findViewById(R.id.editText2);
        ed3=(EditText)findViewById(R.id.editText3);
        ed4=(EditText)findViewById(R.id.editText4);

        b1=(Button)findViewById(R.id.button);
        sharedpreferences = getSharedPreferences(MyPREFERENCES, Context.MODE_PRIVATE);

        b1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String n  = ed1.getText().toString();
                String ph  = ed2.getText().toString();
                String stu  = ed3.getText().toString();
                int sem  = Integer.parseInt(ed4.getText().toString());

                SharedPreferences.Editor editor = sharedpreferences.edit();

                editor.putString(Name, n);
                editor.putString(EMail, ph);
                editor.putString(Studienfach, stu);
                editor.putInt(String.valueOf(Semester), sem);
                editor.commit();
                Intent intent=new Intent();
                setResult(2,intent);
                finish();
            }
        });
    }

}

