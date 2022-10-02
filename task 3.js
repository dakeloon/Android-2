Red_button = findViewById(R.id.Red_button);

        Red_button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                TextView textView = findViewById(R.id.editTextTextPersonName);
                String text = "Name";
                SpannableString ss = new SpannableString(text);
                ForegroundColorSpan fcsBlack = new ForegroundColorSpan(Color.Black);
                ss.setSpan(fcsBlack,0,4, Spanned.SPAN_EXCLUSIVE_EXCLUSIVE);
                textView.setText(ss);
            }
        });
       Size1_button = findViewById(R.id.Size1_button);

        Size1_button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                TextView textView = findViewById(R.id.editTextTextPersonName);
                String text = "Name";
                SpannableString ss = new SpannableString(text);
                ForegroundColorSpan fcsBlack = new ForegroundColorSpan(Color.Black);
                ss.setSpan(fcsBlack,0,4, Spanned.SPAN_EXCLUSIVE_EXCLUSIVE);
                textView.setText(ss);
            }

        });
        Size2_button = findViewById(R.id.Size2_button);

        Size2_button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                TextView textView = findViewById(R.id.editTextTextPersonName);
                String text = "Name";
                SpannableString ss = new SpannableString(text);
                ForegroundColorSpan fcsBlack = new ForegroundColorSpan(Color.Black);
                ss.setSpan(fcsBlack,0,4, Spanned.SPAN_EXCLUSIVE_EXCLUSIVE);
                textView.setText(ss);
            }

        });
        White_button = findViewById(R.id.White_button);

        White_button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                TextView textView = findViewById(R.id.editTextTextPersonName);
                String text = "Name";
                SpannableString ss = new SpannableString(text);
                ForegroundColorSpan fcsBlack = new ForegroundColorSpan(Color.Black);
                ss.setSpan(fcsBlack,0,4, Spanned.SPAN_EXCLUSIVE_EXCLUSIVE);
                textView.setText(ss);
            }

        });
        Yellow_button = findViewById(R.id.Yellow_button);

        Yellow_button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                TextView textView = findViewById(R.id.editTextTextPersonName);
                String text = "Name";
                SpannableString ss = new SpannableString(text);
                ForegroundColorSpan fcsBlack = new ForegroundColorSpan(Color.Black);
                ss.setSpan(fcsBlack,0,4, Spanned.SPAN_EXCLUSIVE_EXCLUSIVE);
                textView.setText(ss);
            }

        });
    }
