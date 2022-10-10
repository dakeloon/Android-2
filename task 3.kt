package com.example.attributes

import android.graphics.Color
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.EditText

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val text: EditText = findViewById(R.id.text)
        val blackButton: Button = findViewById(R.id.blackButton)
        val redButton: Button = findViewById(R.id.redButton)
        val size1Button: Button = findViewById(R.id.size1Button)
        val size2Button: Button = findViewById(R.id.size2Button)
        val whiteButton: Button = findViewById(R.id.whiteButton)
        val yellowButton: Button = findViewById(R.id.yellowButton)

        blackButton.setOnClickListener {
            text.setTextColor(Color.BLACK) }

        redButton.setOnClickListener {
            text.setTextColor(Color.RED) }

        size1Button.setOnClickListener {
            text.textSize = 8f
        }

        size2Button.setOnClickListener {
            text.textSize = 24f
        }

        whiteButton.setOnClickListener {
            text.setBackgroundColor(Color.WHITE)
        }

        yellowButton.setOnClickListener {
            text.setBackgroundColor(Color.YELLOW)
        }
    }
}
