package com.example.toasthandler

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.Button
import com.example.toasthandler.R
import android.widget.Toast

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val mainbtn:Button = findViewById(R.id.button_ok)
        mainbtn.setOnClickListener {
            Toast.makeText(this, "Кнопка ок", Toast.LENGTH_LONG).show()
        }

    }
}
