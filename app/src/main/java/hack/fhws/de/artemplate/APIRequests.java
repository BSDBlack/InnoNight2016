package hack.fhws.de.artemplate;

import android.net.Uri;
import android.provider.Settings;

import com.wikitude.architect.ArchitectView;

/**
 * Created by steffen on 10.06.16.
 */
public class APIRequests implements ArchitectView.ArchitectUrlListener {
    static ArchitectView view;

    static void setView(ArchitectView view) { APIRequests.view = view; }

    @Override
    public boolean urlWasInvoked(String s) {
        Uri invokedUri = Uri.parse(s);
        if("getRemainTime".equalsIgnoreCase(invokedUri.getHost())) {
            long time = network.getRemainingTime("BIN", 4, System.currentTimeMillis());
            view.callJavascript("alert('Baaaaa')");
        }
        return false;
    }
}
