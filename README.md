# AI Past Question Paper Extractor Tool

![Web Interface]()  
*(You can add a banner image here later)*

---

## Overview
The **AI Past Question Paper Extractor Tool** is a powerful application designed to help students and educators extract and analyze past exam questions from PDF or DOCX files. Using **Google's Gemini AI**, the tool can:
- Extract questions based on specific chapters and topics.
- Analyze the extracted questions to identify important topics, repetitions, and marks distribution.
- Generate downloadable PDF or DOCX files for easy reference.

This tool is perfect for students preparing for exams, as it saves time and helps focus on the most important topics.

---
# Description

Are exams approaching, and you're scrambling to focus on the most important topics? Are you spending hours sifting through past questions, jotting them down, and trying to figure out which ones are truly important—only to end up overwhelmed and out of time?

Don’t worry, **AI Past Question Analyzer** is here to save the day!

This tool is designed to make exam preparation faster and smarter. By simply uploading your study materials in PDF format, it helps you analyze all the past questions related to your syllabus topics. It extracts questions chapter-wise and topic-wise, providing detailed information, including:

- **Marks:** How many marks each question carries.  
- **Year:** The year the question appeared.  
- **Repetition:** The number of times the question has been repeated in past papers.  
- **Importance Score:** A calculated score (out of 10) that highlights the question's significance.  

And that’s not all! Once the questions are analyzed, it will generate a list of very important topics—giving you a crystal-clear roadmap for your studies.

All of this happens in just a few minutes! No more stress, no more wasted time—just efficient, targeted exam preparation.

Get ready to study smarter, not harder, with **AI Question Analyzer**!

---

## Features
- **Upload PDF/DOCX**: Upload past question papers in PDF or DOCX format.
- **Extract Questions**: Extract questions based on chapters and topics.
- **Analyze Questions**: Analyze questions to identify important topics, repetitions, and marks distribution.
- **Download Results**: Download the analyzed questions as a PDF or DOCX file.
- **User-Friendly Interface**: Clean and intuitive web interface with animations and gradients.

---

## How It Helps
1. **Saves Time**: Automates the process of extracting and analyzing past questions.
2. **Focus on Important Topics**: Identifies frequently asked questions and important topics.
3. **Organized Study Material**: Generates well-organized PDFs for easy revision.
4. **AI-Powered Analysis**: Uses Google's Gemini AI for accurate extraction and analysis.

---

## Technologies Used
- **Backend**: Python (Flask)
- **Frontend**: HTML, CSS, JavaScript (Bootstrap, Font Awesome)
- **AI Model**: Google Gemini AI
- **Libraries**: `pdf2image`, `python-docx`, `reportlab`, `dotenv`

---

## How to Run the Project

Follow these steps to set up and run the project on your computer.

---

### Step 1: Prerequisites
Before running the project, ensure you have the following installed:
1. **Python 3.8 or higher**: [Download Python](https://www.python.org/downloads/)
2. **Git**: [Download Git](https://git-scm.com/downloads)
3. **Google Gemini API Key**: Sign up for Google Gemini and get your API key from the [Google Cloud Console](https://console.cloud.google.com/).

---

### Step 2: Clone the Repository
1. Open your terminal or command prompt.
2. Run the following command to clone the repository:
   ```bash
   git clone https://github.com/chhatramani01/AI_PastQuestion_Analyzer.git
   cd AI_PastQuestion_Analyzer
```

# Step 3: Set Up a Virtual Environment

### Create a virtual environment:
```bash
python -m venv venv
```

### Activate the virtual environment:

**On Windows:**
```bash
venv\Scripts\activate
```

**On macOS/Linux:**
```bash
source venv/bin/activate
```

---

# Step 4: Install Dependencies
Install the required Python libraries by running:
```bash
pip install -r requirements.txt
```

---

# Step 5: Set Up Environment Variables
Create a `.env` file in the root directory of the project.

Add your Google Gemini API key to the `.env` file:
```env
GEMINI_API_KEY=your_api_key_here
```

---

# Step 6: Run the Application
Start the Flask development server:
```bash
python app.py
```

Open your browser and go to:
```
http://127.0.0.1:5000
```

---

# Step 7: Use the Tool
1. **Upload a PDF/DOCX File:** Use the upload form to upload a past question paper.
2. **Enter Chapter and Topic:** Specify the chapter and topic you want to extract questions from.
3. **Extract and Analyze:** Click "Extract Questions" to process the file.
4. **Download Results:** Download the analyzed questions as a PDF or DOCX file.

---

# License
This project is licensed under the MIT License. See the `LICENSE` file for details.

---

# Contact
**Author:** Chhatramani Yadav

- **GitHub:** [chhatramani01](https://github.com/chhatramani01)
---

Enjoy using the **AI Past Question Paper Extractor Tool**! If you have any questions or feedback, feel free to reach out. 🚀
