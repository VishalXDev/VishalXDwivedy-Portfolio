import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Lightweight Error Boundary Component
class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Portfolio Error:", error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-fallback">
          <h2>Something went wrong</h2>
          <button onClick={this.handleReload}>Reload</button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Performance Monitoring (Lightweight)
const initPerformanceMonitoring = () => {
  if (typeof window !== "undefined" && "performance" in window) {
    const trackMetrics = () => {
      const [navigationEntry] = performance.getEntriesByType("navigation");
      if (navigationEntry) {
        console.table({
          "DOM Loaded": `${navigationEntry.domComplete.toFixed(0)}ms`,
          "Page Load": `${navigationEntry.loadEventEnd.toFixed(0)}ms`,
          TTFB: `${navigationEntry.responseStart.toFixed(0)}ms`,
        });
      }
    };

    if (document.readyState === "complete") {
      setTimeout(trackMetrics, 0);
    } else {
      window.addEventListener("load", trackMetrics, { once: true });
    }
  }
};

// Optimized Web Vitals Reporting (only logs in development)
const reportWebVitalsOptimized = (onPerfEntry) => {
  if (
    onPerfEntry &&
    typeof onPerfEntry === "function" &&
    process.env.NODE_ENV === "development"
  ) {
    import("web-vitals")
      .then(({ getCLS, getFID, getLCP, getFCP, getTTFB }) => {
        getCLS(onPerfEntry);
        getFID(onPerfEntry);
        getLCP(onPerfEntry);
        getFCP(onPerfEntry);
        getTTFB(onPerfEntry);
      })
      .catch(() => {
        console.log("Web Vitals tracking failed to load");
      });
  }
};

// Simplified Loading Indicator with ARIA attributes for accessibility
const addLoadingIndicator = () => {
  const loader = document.createElement("div");
  loader.id = "app-loader";
  loader.setAttribute("role", "alert");
  loader.setAttribute("aria-live", "polite");
  loader.setAttribute("aria-busy", "true");
  loader.innerHTML = `
    <div class="loader-content" aria-label="Loading">
      <div class="loader-spinner"></div>
      <span class="sr-only">Loading application...</span>
    </div>
  `;
  document.body.appendChild(loader);

  const removeLoader = () => {
    loader.style.opacity = "0";
    loader.setAttribute("aria-busy", "false");
    setTimeout(() => loader.remove(), 300);
  };

  if (document.readyState === "complete") {
    setTimeout(removeLoader, 300);
  } else {
    window.addEventListener(
      "load",
      () => {
        setTimeout(removeLoader, 300);
      },
      { once: true }
    );
  }
};

// Initialize
const rootElement = document.getElementById("root");
if (rootElement) {
  // Add loading indicator early
  addLoadingIndicator();

  // Initialize performance monitoring
  initPerformanceMonitoring();

  // Create root and render
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </React.StrictMode>
  );

  // Report web vitals (only logs in dev)
  reportWebVitalsOptimized(console.log);
} else {
  console.error("Failed to find the root element");
}
