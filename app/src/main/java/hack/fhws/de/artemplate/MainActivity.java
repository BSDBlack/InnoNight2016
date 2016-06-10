package hack.fhws.de.artemplate;

import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.preference.PreferenceManager;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

import com.wikitude.architect.ArchitectView;
import com.wikitude.architect.StartupConfiguration;

import java.io.IOException;

public class MainActivity extends AppCompatActivity {
    Button but,but2;

    private ArchitectView architectView;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        this.architectView = (ArchitectView)this.findViewById( R.id.architectView );
        final StartupConfiguration config = new StartupConfiguration("mH7+xbxGxP1YKsCLSjCUixKJMmaxwzM9qbXZZDJov1bR6LG0YfyH2WX9gVa3u3E51eGtum5CnO7OpYVcV65hHphO1HSJdgV7oOt7EYKF9uTPoZOfBTJc2jwRPciFWsG3yYIJ9aQI+SUCO+HCoa/hkMUlL8WEXHLcTtsCFjhuu+dTYWx0ZWRfX4AQpyO23RQvV5GAvqSh7YgQs7hMlU7qJzhM0oEA0g8B1iG3UiRnU4hC8cBpUk1WPadlmuDq04U1CRpdwidsKgClRhwgEWJH1IMQSpt3QGzcIWoAT0CkwuDHGmO40tScRpIAdTQPGSTP8DDcMIkrmOQvOep+vkGxw/RxlO54GD+utVMrwLSvF4JXmvNYhKGF1ud14JOecm1NRvdFYrfoKBNKK5n+jKwsULqyHWOCBy+sZGxtN/t3AG9jwMXgGIE7tmASAL+Xam+3I/pHpPECpek7suiaWFDX041Nuwv7KUQ7vF/iqOIzCr1moyfC1SfIh07Vc1GoOAUyNeLo57dc2DzJtvVeJIHNoRJ45Drl59s6slFvmzMb7YwfOvWpgNCufEtp+bZ0iyJobrwbqf27mt+5rQB9I65fp5Pl1K/7z/nnBSERV67RUa6lpcFiDZyl8q6GB5K1fWUN/pYmbq59BmewvL6BAkhLR42jWfM8TU7ooXndBWA0V/k=");
        this.architectView.onCreate( config );
        this.architectView.onPostCreate();
        try {
            this.architectView.load("ARTemplate.html");
        }catch (IOException e) {
            e.printStackTrace();
        }

        but=(Button)findViewById(R.id.but);
        but2=(Button)findViewById(R.id.but2);
        but.setOnClickListener(new View.OnClickListener() {
                                      public void onClick(View v) {
                                          Intent i = new Intent(getApplicationContext(),UserInfoActivity.class);
                                          startActivityForResult(i, 2);
                                      }
        });

        but2.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                Intent i = new Intent(getApplicationContext(),PinwandActivity.class);
                startActivity(i);
            }
        });
        }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data)
    {
        super.onActivityResult(requestCode, resultCode, data);
        // check if the request code is same as what is passed  here it is 2
        if(requestCode==2)
        {
        }
    }

    //Dont forget to  override the lifecycle events and to trigger them on the archtiectView
    //else you get only a black screen

    @Override
    protected void onResume() {
        super.onResume();
        this.architectView.onResume();
    }

    @Override
    protected void onPause() {
        super.onPause();
        this.architectView.onPause();
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        this.architectView.onDestroy();
    }
}
