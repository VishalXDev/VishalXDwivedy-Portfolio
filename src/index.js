import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Error Boundary Component for graceful error handling
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Portfolio Error:', error, errorInfo);
    // You can log this to an error reporting service
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
          <div className="text-center p-8 bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 shadow-2xl">
            <div className="text-6xl mb-4">🚀</div>
            <h2 className="text-2xl font-bold text-white mb-4">Oops! Something went wrong</h2>
            <p className="text-gray-300 mb-6">Don't worry, even the best portfolios have their moments!</p>
            <button 
              onClick={() => window.location.reload()} 
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full font-semibold hover:from-cyan-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Reload Portfolio
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Performance monitoring and analytics
const performanceMonitor = {
  // Track page load performance
  trackPageLoad: () => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      window.addEventListener('load', () => {
        setTimeout(() => {
          const perfData = performance.getEntriesByType('navigation')[0];
          if (perfData) {
            console.log('🚀 Portfolio Performance Metrics:', {
              'Page Load Time': `${Math.round(perfData.loadEventEnd - perfData.fetchStart)}ms`,
              'DOM Ready': `${Math.round(perfData.domContentLoadedEventEnd - perfData.fetchStart)}ms`,
              'First Paint': `${Math.round(perfData.responseEnd - perfData.fetchStart)}ms`
            });
          }
        }, 0);
      });
    }
  },

  // Track user engagement
  trackEngagement: () => {
    let engagementTime = 0;
    let lastActiveTime = Date.now();
    
    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];
    
    const updateEngagement = () => {
      const now = Date.now();
      if (now - lastActiveTime < 5000) { // Active within last 5 seconds
        engagementTime += now - lastActiveTime;
      }
      lastActiveTime = now;
    };

    events.forEach(event => {
      document.addEventListener(event, updateEngagement, true);
    });

    // Log engagement time every 30 seconds
    setInterval(() => {
      if (engagementTime > 0) {
        console.log(`👥 User Engagement: ${Math.round(engagementTime / 1000)}s active time`);
      }
    }, 30000);
  }
};

// Initialize performance monitoring
performanceMonitor.trackPageLoad();
performanceMonitor.trackEngagement();

// Enhanced Web Vitals reporting
const enhancedReportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

// Advanced performance reporting
const logWebVitals = (metric) => {
  const { name, value, rating } = metric;
  
  // Color code based on performance rating
  const colors = {
    good: '🟢',
    'needs-improvement': '🟡',
    poor: '🔴'
  };
  
  console.log(`${colors[rating]} ${name}: ${Math.round(value)}ms (${rating})`);
  
  // You can send this data to analytics services
  // analytics.track('web-vital', { name, value, rating });
};

// Create root with enhanced error handling
const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error('Root element not found! Make sure you have a div with id="root" in your HTML.');
} else {
  const root = ReactDOM.createRoot(rootElement);
  
  // Render with error boundary and performance monitoring
  root.render(
    <React.StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </React.StrictMode>
  );
}

// Enhanced web vitals with custom logging
enhancedReportWebVitals(logWebVitals);

// Add global styles for smooth scrolling and better UX
if (typeof document !== 'undefined') {
  // Smooth scrolling for the entire page
  document.documentElement.style.scrollBehavior = 'smooth';
  
  // Prevent flash of unstyled content
  document.documentElement.style.visibility = 'visible';
  
  // Add loading indicator
  const addLoadingIndicator = () => {
    const loader = document.createElement('div');
    loader.id = 'initial-loader';
    loader.innerHTML = `
      <div style="
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        transition: opacity 0.5s ease-out, visibility 0.5s ease-out;
      ">
        <div style="text-align: center; color: white;">
          <div style="
            width: 50px;
            height: 50px;
            border: 3px solid rgba(255,255,255,0.3);
            border-radius: 50%;
            border-top-color: white;
            animation: spin 1s ease-in-out infinite;
            margin: 0 auto 20px;
          "></div>
          <div style="font-size: 18px; font-weight: 600;">Loading Amazing Portfolio...</div>
        </div>
      </div>
      <style>
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      </style>
    `;
    
    document.body.appendChild(loader);
    
    // Remove loader when page is fully loaded
    window.addEventListener('load', () => {
      setTimeout(() => {
        const loaderElement = document.getElementById('initial-loader');
        if (loaderElement) {
          loaderElement.style.opacity = '0';
          loaderElement.style.visibility = 'hidden';
          setTimeout(() => loaderElement.remove(), 500);
        }
      }, 1000); // Show loader for at least 1 second for better UX
    });
  };
  
  // Add loader only if page is still loading
  if (document.readyState === 'loading') {
    addLoadingIndicator();
  }
}

// Service Worker registration for PWA capabilities (optional)
if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('🔧 SW registered: ', registration);
      })
      .catch((registrationError) => {
        console.log('❌ SW registration failed: ', registrationError);
      });
  });
}

// Console welcome message for developers
console.log(`
🚀 Welcome to this Amazing Portfolio!
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Built with passion and cutting-edge tech:
• React 18+ with Concurrent Features
• Advanced Performance Monitoring  
• Error Boundary Protection
• Smooth Animations & Interactions
• Modern Design Patterns

Performance Metrics will appear below ⬇️
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`);

export default App;