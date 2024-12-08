# StoryCraft

StoryCraft is a web-based application that allows users to generate short stories based on the desired genre and word count. This app uses Google's Gemini API to automatically generate stories with a modern and responsive interface with React and TailwindCSS.


## Preview Project
![Preview StoryCraft](/docs/preview-storycraft.jpg)


## Main Features
- **Genres Select:** Users can select genres such as Fantasy, Sci-Fi, Mystery, Adventure, or Romance.
- **Define Word Count:** Users can choose the length of the story (100-500 words).
- **Generate Story:** Uses the Gemini API to generate stories based on user preferences.
- **Copy to Clipboard:** Copy the generated story to the clipboard for use elsewhere.
- **Responsive UI:** Design a responsive and modern interface using TailwindCSS.
- **Error Handling:** Error notifications if problems occur while connecting to the API.


## Technologies Used
- **React.js:** The main framework for building applications.
- **TailwindCSS:** CSS library for styling the user interface.
- **Gemini API:** API for generating stories based on genre and length.


## Installation
This project was built using React and TailwindCSS. It is a web application and for running on your local environment you should follow these guidelines. 

Prerequisites:
- NPM

How to install StoryCraft:
1. Clone repository.
    ```
    git clone https://github.com/AcilRestu12/StoryCraft.git
    cd StoryCraft
    ```

2. Install dependencies.
    ```
    npm install
    ```

3. Configure API Key.
    - Copy the .env.example file and rename it to .env.
        ```
        cp .env.example .env
        ```
    - Add your Gemini API key to the .env file.
        ```
        REACT_APP_GEMINI_API_KEY=your_gemini_api_key_here
        ```

4. Run the application.
    ```
    npm start
    ```


## Usage
1. Open the app in your browser at http://localhost:3000.
2. Select the genre of the story in the dropdown.
3. Use the slider to specify the desired number of words (100-500).
4. Click the “Generate Story” button to generate the story.
5. Once the story appears, you can copy it with the “Copy Story” button.


## Contribution
Contributions are welcome! If you’d like to contribute, please fork this repository and submit a pull request.


## Contact
If you want to contact me, you can reach me through [ARest](https://arest.tech/).


## License
The project is licensed under the MIT license - see the [LICENSE](LICENSE) file for more details.
