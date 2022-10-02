package com.example.atributi;

import androidx.appcompat.app.AppCompatActivity;


import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

import com.example.atributi.R;


public class MainActivity extends AppCompatActivity {
    private EditText ed_text;
    private Button black_button;
    private Button red_button;
    private Button size1_button;
    private Button size2_button;
    private Button white_button;
    private Button yellow_button;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        ed_text = findViewById(R.id.editTextTextPersonName);
        black_button = findViewById(R.id.button);

        black_button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                ed_text.setTextColor(-16777216);
            }
        });
        red_button = findViewById(R.id.Red_button);

        red_button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                ed_text.setTextColor(-65536);
            }


        });
        size1_button = findViewById(R.id.Size1_button);

        size1_button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                ed_text.setTextSize(85);
            }
        });
        size2_button = findViewById(R.id.Size2_button);

        size2_button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                ed_text.setTextSize(24);
            }
        });
        white_button = findViewById(R.id.White_button);

        white_button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                ed_text.setBackgroundColor(200);
            }
        });
        yellow_button = findViewById(R.id.Yellow_button);

        yellow_button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                ed_text.setBackgroundColor(-252);
            }
        });
    }
}
