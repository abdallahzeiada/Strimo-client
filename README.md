# Strimo Client

A modern React-based real-time video calling and chat application built with Stream.io, featuring authentication, notifications, and multi-theme support.

## 🚀 Features

- **Real-time Video Calls**: High-quality video calling powered by Stream.io Video SDK
- **Chat System**: Real-time messaging with Stream Chat
- **User Authentication**: Complete auth system with login/signup
- **Onboarding Flow**: Guided user setup process  
- **Notifications**: Real-time notification system
- **Multi-theme Support**: 30+ themes powered by DaisyUI
- **Responsive Design**: Mobile-first responsive UI
- **Friend System**: Add and manage friends
- **Modern UI**: Clean interface built with Tailwind CSS and DaisyUI

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.1.0
- **Build Tool**: Vite 5.4.8
- **Routing**: React Router 7.6.0
- **Styling**: Tailwind CSS + DaisyUI
- **Video/Chat**: Stream.io SDK (@stream-io/video-react-sdk, stream-chat-react)
- **State Management**: Zustand + TanStack Query
- **HTTP Client**: Axios
- **UI Components**: Lucide React (icons)
- **Notifications**: React Hot Toast

## 🏗️ Project Structure

```
strimo-client/
├── public/
│   └── i.png                 # App icon
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── CallButton.jsx
│   │   ├── ChatLoader.jsx
│   │   ├── FriendCard.jsx
│   │   ├── Layout.jsx
│   │   ├── Navbar.jsx
│   │   ├── NoFriendsFound.jsx
│   │   ├── NoNotificationsFound.jsx
│   │   ├── PageLoader.jsx
│   │   ├── Sidebar.jsx
│   │   └── ThemeSelector.jsx
│   ├── constants/            # App constants
│   │   └── index.js
│   ├── hooks/               # Custom React hooks
│   │   ├── useAuthUser.js
│   │   ├── useLogin.js
│   │   ├── useLogout.js
│   │   └── useSignup.js
│   ├── lib/                 # Utility libraries
│   │   ├── api.js
│   │   ├── axios.js
│   │   └── utils.js
│   ├── pages/               # Page components
│   │   ├── CallPage.jsx
│   │   ├── ChatPage.jsx
│   │   ├── HomePage.jsx
│   │   ├── LoginPage.jsx
│   │   ├── NotificationsPage.jsx
│   │   ├── OnboardingPage.jsx
│   │   └── SignUpPage.jsx
│   ├── store/               # State management
│   │   └── useThemeStore.js
│   ├── App.jsx             # Main app component
│   ├── index.css           # Global styles
│   └── main.jsx            # App entry point
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── eslint.config.js
└── vercel.json
```

## 🎨 Available Themes

The app supports 30+ themes through DaisyUI:

- **Light themes**: light, cupcake, bumblebee, emerald, corporate, garden, lofi, pastel, fantasy, wireframe, cmyk, autumn, lemonade, winter
- **Dark themes**: dark, synthwave, retro, cyberpunk, halloween, forest, aqua, black, luxury, dracula, acid, night, coffee, dim, nord, sunset
- **Special themes**: valentine, business

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:vercel` - Build for Vercel deployment
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 📱 Pages & Features

### Authentication
- **Login Page** (`/login`) - User authentication
- **Sign Up Page** (`/signup`) - User registration
- **Onboarding Page** (`/onboarding`) - First-time user setup

### Main Application
- **Home Page** (`/`) - Main dashboard with friends list
- **Call Page** (`/call/:id`) - Video calling interface
- **Chat Page** (`/chat/:id`) - Real-time messaging
- **Notifications Page** (`/notifications`) - User notifications

### Key Components
- **Layout** - Main app layout with sidebar
- **Navbar** - Top navigation bar
- **Sidebar** - Side navigation menu
- **ThemeSelector** - Theme switching component
- **FriendCard** - Friend list item component
- **CallButton** - Video call initiation button

## 🔐 Authentication Flow

The app implements a complete authentication system:

1. **Unauthenticated users** → Redirected to login/signup
2. **Authenticated but not onboarded** → Redirected to onboarding
3. **Fully authenticated users** → Access to main application

## 🐛 Troubleshooting

### Development Tips

- Use React DevTools for debugging
- Check browser console for errors
- Ensure all environment variables are set correctly

## 📞 Support

For support and questions, please contact the development team => abdallahzeiada0@gmail.com.

---

Built with ❤️ using React, Stream.io, and modern web technologies.