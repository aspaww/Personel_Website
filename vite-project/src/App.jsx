import LanguageProvider from './contexts/LanguageContext';
import Toast from './components/common/Toast';
import Header from './components/Header.jsx';
import Profile from './components/Profile.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';

export default function App() {
  return (
    <LanguageProvider>
      <Toast />
      <Header />
      <Skills />
      <Profile />
      <Projects />
    </LanguageProvider>
  );
}

