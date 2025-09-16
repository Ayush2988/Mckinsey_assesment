import MonthTrackCard from './dashBoard/MonthTrackCard/monthTrackCard';
import MetricsCard from './dashBoard/MetricsCard/metricsCard';
import DeepStaticsCard from './dashBoard/DeepStaticsCard/deepStaticsCard';
import AnalyticsCard from './dashBoard/AnalyticsCard/analyticsCard';
import './App.css';
import SidebarMenu from './dashBoard/SideBarMenu/sideBarMenu';
import SecurityHeader from './dashBoard/Header/securityHeader';

function App() {
  return (
    <div className="App">
      <SecurityHeader />
      {/* <SidebarMenu /> */}
      <div className="app-cards-layout">
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
  );
}

export default App;
