import GradientPanel from './dashBoard/GradientPanel/gradientPanel';
import SecurityHeader from './dashBoard/Header/securityHeader';
import MonthTrackCard from './dashBoard/MonthTrackCard/monthTrackCard';
import MetricsCard from './dashBoard/MetricsCard/metricsCard';
import DeepStaticsCard from './dashBoard/DeepStaticsCard/deepStaticsCard';
import AnalyticsCard from './dashBoard/AnalyticsCard/analyticsCard';
import './App.css';

function App() {
  return (
    <div className="app-main-flex">
      <GradientPanel />
      <div className="app-dashboard-area">
        <SecurityHeader />
        <div className="app-cards-flex">
          <div className="app-cards-left">
            <MonthTrackCard />
            <MetricsCard />
            <DeepStaticsCard />
            
          </div>
          <div className="app-cards-right">
            <AnalyticsCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
