# IMReporter

IMReporter is a **live crime reporting web application** that enables users to **report crimes in their local area** by uploading crime details, images, and descriptions. The application uses **AI to determine relevant Indian legal articles** based on the crime description. It also provides **crime statistics** for various locations and features an interactive **crime map** to visualize reported incidents.

---

## 🚀 Features

- **Crime Reporting**: Users can report crimes with descriptions, images, and locations.
- **AI-Based Legal Article Suggestion**: Automatically suggests applicable Indian legal articles based on the crime.
- **Crime Ratio Analysis**: Displays crime statistics for cities like Jaipur and other locations.
- **Interactive Map**: Provides a **map view** with crime locations and navigation paths.
- **User Authentication**: Secure login/signup system.
- **Anonymous Reporting**: Users can report crimes without revealing their identity.
- **Emergency Contacts**: Quick access to police, CBI, and other emergency contacts.
- **Live Notifications**: Users get updates on new crimes in their area.

---

## 🛠️ Tech Stack

### **Frontend**
- React.js
- React Router

### **Backend**
- Node.js
- Express.js
- MongoDB (Mongoose)
- Cloudinary (for image storage)
- OpenAI (for AI-based legal article suggestion)

### **APIs & Services**
- **Cloudinary**: To store crime report images.
- **Google Maps API** / **Leaflet.js**: For interactive crime mapping.
- **OpenAI API**: To analyze crime descriptions and suggest legal articles.
- **Crime Data API** (Indian Government Open Data): To fetch crime statistics.

---

## 🔧 Installation & Setup

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/your-username/IMReporter.git
cd IMReporter
```

### **2️⃣ Backend Setup**
```sh
cd backend
npm install
```
Create a `.env` file in the `backend/` directory and add:
```env
MONGO_URI=your_mongodb_uri
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
JWT_SECRET=your_jwt_secret
```
Run the backend server:
```sh
npm start
```

### **3️⃣ Frontend Setup**
```sh
cd frontend
npm install
npm start
```

---

## 📌 Usage
- **Report a Crime**: Users can fill out a form, upload images (up to 5), and provide details.
- **View Crime Stats**: Dashboard showing crime trends in different cities.
- **Search Crimes on Map**: Users can explore reports on an interactive map.
- **Receive Alerts**: Get real-time notifications about crime incidents.

---

## 🎯 Future Enhancements
- **Live Crime Heatmap**: Display crime density using color-coded maps.
- **Crime Prediction**: AI-based forecasting for high-risk areas.
- **Multi-Language Support**: Support for Hindi, English, and regional languages.

---

## 🤝 Contributing
Feel free to contribute to IMReporter! If you find issues or have feature requests, submit a pull request or open an issue.

```sh
git checkout -b feature-branch
git commit -m "Added new feature"
git push origin feature-branch
```

---

## 📜 License
This project is **open-source** under the MIT License.

---

## 🌟 Show Some Love
If you like this project, please ⭐ the repository! 😊

