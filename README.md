# 🏋️ IronRush - Gym Helper Web App

**IronRush** is your go-to virtual gym companion! This React-based fitness web app helps users explore exercises based on **equipment type**, **muscle groups**, and **body parts**. Whether you're at the gym or working out from home, **IronRush** ensures you never run out of inspiration.

🔎 Search. 🧠 Learn. 💪 Train.

🌐 [Live Demo → IronRush](https://iron-rush.vercel.app/)

![IronRush Banner](https://github.com/user-attachments/assets/96fdcd20-6e2b-4b29-9c36-195205dd18b8)


---

## 📖 About

**IronRush** simplifies your fitness journey by offering:

- A search-powered homepage with curated exercises.
- A deep dive into each exercise with details, animations, and video tutorials.
- Suggestions for similar exercises targeting the same muscle group.
- Easy access to YouTube videos for visual guidance.
- Clean UI with responsive design — built for all screen sizes.

Whether you're a beginner or a seasoned lifter, **IronRush** helps you push through every rep with confidence.

---

## ✨ Features

- 🔍 **Search Bar** – Quickly find exercises by name, equipment, or target muscle.
- 🏋️ **Browse by Muscle / Equipment** – Discover exercises filtered by your available gear or focus area.
- 📄 **Exercise Detail Page** – Get a description, muscle target, animation, and related YouTube videos.
- 📺 **Video Integration** – Watch relevant tutorials powered by the YouTube API.
- 🔁 **Similar Exercises and Muscle group Exercises** – Suggestions based on targeted muscle group.
- 📱 **Mobile-Friendly Design** – Optimized for desktop, tablet, and mobile devices.

---

## 🛠️ Technologies Used

- ⚛️ **React** – For building reusable UI components.
- 💨 **Tailwind CSS** – Utility-first styling for clean, responsive layouts.
- 📦 **RAPID API - ExerciseDB** – Source of structured exercise data.
- 📹 **YouTube API** – For relevant video tutorials and guides.
- 🔄 **React Router** – For dynamic routing to exercise detail pages.
- 🚀 **Vite** – Blazing fast development environment.

---

## 📸 Screenshots
![Homepage](https://github.com/user-attachments/assets/62a62b3d-40db-4e88-934f-6c0dc4623123)

![Search](https://github.com/user-attachments/assets/7a5f78f3-eef6-4f25-ad49-595145b425f3)

![Exercises](https://github.com/user-attachments/assets/192b29db-e461-4c66-baf9-beb03334727e)

![Particular exercises deatils](https://github.com/user-attachments/assets/2c2df0f4-af29-4fdb-8cdb-1203492fe43c)

![Youtube videos and similar exercises](https://github.com/user-attachments/assets/8fae913a-eee7-45b4-bdca-f7abe4cd5f79)

---

## 📁 Folder Structure

```

src/
├── components/
│   ├── BodyPart.jsx
│   ├── Details.jsx
│   ├── ExerciseCart.jsx
│   ├── SimilarExercises.jsx
│   └── ExerciseVideo.jsx
│   └── Exercises.jsx
│   └── Footer.jsx
│   └── HeroBanner.jsx
│   └── HorizontalScrollbar.jsx
│   └── Loader.jsx
│   └── Navbar.jsx
│   └── SearchExercises.jsx
├── pages/
│   ├── Home.jsx
│   └── ExerciseDetail.jsx
├── utils/
│   └── fetchData.jsx
├── App.jsx
└── main.jsx

````

---

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/ironrush.git
cd ironrush
````

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file and add your API keys:

```env
VITE_RAPID_API_KEY=your_rapid_api_key
VITE_YOUTUBE_API_KEY=your_youtube_api_key
```

4. Run the app locally:

```bash
npm run dev
```

---

## 🔌 Sample Exercise API Response (ExerciseDB via RAPID API)

```json
{
  "bodyPart": "chest",
  "equipment": "barbell",
  "gifUrl": "https://example.com/barbell-bench-press.gif",
  "id": "0025",
  "name": "barbell bench press",
  "target": "pectorals"
}
```

---

## 🙏 Acknowledgements

* [RAPID API - ExerciseDB](https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb/) – Free exercise data.
* [YouTube Data API](https://developers.google.com/youtube/v3) – Embedded fitness videos.
* [Tailwind CSS](https://tailwindcss.com/) – Clean utility-first design system.
* [React](https://reactjs.org/) – Robust UI library.
* [Vite](https://vitejs.dev/) – Fast dev tooling.

---

## ✍️ About the Author

Created by **Dheeraj Ananth Kumar** — fitness tech enthusiast and full-stack developer.
Check out more of my work on [GitHub](https://github.com/DheerajAnanthKumar).
