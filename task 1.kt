package com.example.toasthandler

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.Button
import com.example.toasthandler.R
import android.widget.Toast

class MainActivity : AppCompatActivity() {
    private var main_btn: Button? = null
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        main_btn = findViewById(R.id.button_ok)
        main_btn?.setOnClickListener {
            Toast.makeText(this, "Кнопка ок", Toast.LENGTH_LONG).show()
        }

    }
}
