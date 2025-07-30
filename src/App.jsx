import React from 'react';
import { StoreProvider, useStore } from './context/StoreContext';
import TemplateList from './components/TemplateList';
import Cart from './components/Cart';
import SubtitlePreview from './components/SubtitlePreview';
import './App.css';

const Toast = () => {
  const { toast, setToast } = useStore();

  React.useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 2000);
      return () => clearTimeout(timer);
    }
  }, [toast, setToast]);

  if (!toast) return null;

  return (
    <div className={`toast toast-${toast.type}`}>
      {toast.message}
    </div>
  );
};

function App() {
  return (
    <StoreProvider>
      <div className="app-container">
        <h1>DripLink Subtitle Template</h1>
        <div className="main-content">
          <TemplateList />
          <Cart />
          <SubtitlePreview />
        </div>
        <Toast />
      </div>
    </StoreProvider>
  );
}

export default App;
