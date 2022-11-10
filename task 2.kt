package com.example.logging

import android.os.Bundle
import android.util.Log
import android.widget.Button
import android.widget.EditText
import androidx.appcompat.app.AppCompatActivity
import timber.log.Timber
import timber.log.Timber.Forest.plant

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val logbutton:Button = findViewById(R.id.button)
        val timbutton:Button = findViewById(R.id.button2)


        plant(Timber.DebugTree())

        logbutton.setOnClickListener {
            val logText = findViewById<EditText>(R.id.text).text.toString()
            Log.d("From EditText",logText)
        }

        timbutton.setOnClickListener {
            val logText = findViewById<EditText> (R.id.text).text.toString()
            Timber.d(logText)
        }
    }
}

