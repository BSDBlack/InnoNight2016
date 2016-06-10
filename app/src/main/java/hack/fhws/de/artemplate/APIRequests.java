package hack.fhws.de.artemplate;

import android.net.Uri;
import android.provider.Settings;
import android.util.Log;

import com.wikitude.architect.ArchitectView;

/**
 * Created by steffen on 10.06.16.
 */
public class APIRequests implements ArchitectView.ArchitectUrlListener {
    public static MainActivity main;

    public interface PinnwandOpener {
        public void openPinnwand();
    }

    @Override
    public boolean urlWasInvoked(String s) {
        Log.d("STE", "openPinnwand");
        Uri invokedUri = Uri.parse(s);
        if("getRemainTime".equalsIgnoreCase(invokedUri.getHost())) {
            long time = network.getRemainingTime("BIN", 4, System.currentTimeMillis());
        } else if("openPinnwand".equalsIgnoreCase(invokedUri.getHost())) {
            Log.d("STE", "openPinnwand");
            main.openPinnwand();
        }
        return false;
    }
}
