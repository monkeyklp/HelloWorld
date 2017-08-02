package com.monkey.helloworld;

import android.content.Context;
import android.content.Intent;

import com.facebook.react.ReactActivity;

import javax.annotation.Nullable;

/**
 * Created by monkey on 17/8/1.
 */

public class RnActivity extends ReactActivity {

    public static void startActivity(Context context){
        Intent intent = new Intent(context, RnActivity.class);
        context.startActivity(intent);
    }

    @Nullable
    @Override
    protected String getMainComponentName() {
        return "SimpleApp";
    }
}
