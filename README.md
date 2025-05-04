# 🕉️ Sloka Directory

- The **Sloka Directory** is a digital collection of sacred Hindu slokas (verses), organized by deity and sloka title, and stored in plain text files.  
- This project aims to preserve these verses in a simple, structured, and language-accessible format for spiritual seekers, learners, and developers.  
- All content is stored in plain text format, and a structured JSON index is included to make it easier for programs or apps to parse and render the collection.  

## 📁 Folder Structure

Slokas are organized by deity or theme (e.g., `ramachandra`, `shiva`), with each sloka placed in its own folder. Each sloka is available in multiple languages using the following naming pattern:

### File Naming Convention

Each file is named using the pattern: `<sloka-name>-<language-code>.txt`

- `en` – English transliteration or translation  
- `te` – Telugu script

## 📑 Sloka Index (sloka-index.json)

A JSON file named `sloka-index.json` provides a programmatic reference to all available slokas, grouped by deity and annotated with available language versions.

This file can be used to:
	•	Generate sloka listings in frontend apps
	•	Create search/filter functionality
	•	Ensure data consistency across tools or UIs

## 🧘 Purpose

This repository serves as:

- A spiritual reference for daily chanting or reading
- A study aid for those learning Sanskrit or Indian scriptures
- A content base for devotional or educational apps
- A simple archive to preserve cultural and scriptural knowledge

## 🛠️ How to Use

- Browse by deity or category inside the `slokas/` directory.
- Open any `.txt` file to read the sloka in your preferred language/script.
- Copy and reuse content for apps, websites, or study.
- Extend the collection by contributing new slokas.

## 🤝 Contributing

You are welcome to contribute slokas in any script or language. To maintain consistency:

- Organize slokas under appropriate folders (e.g., `rama`, `shiva`).
- Name files using the `<sloka-name>-<language-code>.txt` format.
- Verify the accuracy of slokas and translations.
- Use UTF-8 encoding and plain text format.

## 📄 License

This repository is open-sourced under the [MIT License](LICENSE). Please use the content respectfully, especially when reusing or sharing publicly.
