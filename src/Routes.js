import { AnimatePresence, motion } from 'framer-motion';
import React, { Suspense, lazy } from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';

import Badges from './example-pages/Badges';
import Buttons from './example-pages/Buttons';
import Dropdowns from './example-pages/Dropdowns';
import FormsControls from './example-pages/FormsControls';
import FormsLayout from './example-pages/FormsLayout';
import Icons from './example-pages/Icons';
import NavigationMenus from './example-pages/NavigationMenus';
import Pagination from './example-pages/Pagination';
import ProgressBars from './example-pages/ProgressBars';
import RegularTables1 from './example-pages/RegularTables1';
import RegularTables4 from './example-pages/RegularTables4';
import Scrollable from './example-pages/Scrollable';
import UtilitiesHelpers from './example-pages/UtilitiesHelpers';
import Kelas from './pages/Kelas/index.js';
import Peserta from './pages/Peserta/index.js';
import { LeftSidebar, PresentationLayout } from './layout-blueprints';

// Layout Blueprints


// Example Pages


const DashboardDefault = lazy(() => import('./example-pages/DashboardDefault'));
const Cards3 = lazy(() => import('./example-pages/Cards3'));
const ListGroups = lazy(() => import('./example-pages/ListGroups'));
const LandingPage = lazy(() => import('./example-pages/LandingPage'));
const Modals = lazy(() => import('./example-pages/Modals'));
const Notifications = lazy(() => import('./example-pages/Notifications'));
const Carousels = lazy(() => import('./example-pages/Carousels'));
const Popovers = lazy(() => import('./example-pages/Popovers'));
const Tooltips = lazy(() => import('./example-pages/Tooltips'));
const Tabs = lazy(() => import('./example-pages/Tabs'));
const ApexCharts = lazy(() => import('./example-pages/ApexCharts'));
const Maps = lazy(() => import('./example-pages/Maps'));

const Routes = () => {
  const location = useLocation();

  const pageVariants = {
    initial: {
      opacity: 0,
      scale: 0.99
    },
    in: {
      opacity: 1,
      scale: 1
    },
    out: {
      opacity: 0,
      scale: 1.01
    }
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.4
  };

  return (
    <AnimatePresence>
      <Suspense
        fallback={
          <div className="d-flex align-items-center vh-100 justify-content-center text-center font-weight-bold font-size-lg py-3">
            <div className="w-50 mx-auto">
              Please wait while we load the live preview examples
            </div>
          </div>
        }>
        <Switch>
          <Redirect exact from="/" to="/dashboard" />
          <Route path={['/LandingPage']}>
            <PresentationLayout>
              <Switch location={location} key={location.pathname}>
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}>
                  <Route path="/LandingPage" component={LandingPage} />
                </motion.div>
              </Switch>
            </PresentationLayout>
          </Route>

          <Route
            path={[
              '/dashboard',
              '/kelas',
              '/peserta',
              '/Buttons',
              '/Dropdowns',
              '/NavigationMenus',
              '/ProgressBars',
              '/Pagination',
              '/Scrollable',
              '/Badges',
              '/Icons',
              '/UtilitiesHelpers',
              '/Cards3',
              '/ListGroups',
              '/Modals',
              '/Notifications',
              '/Carousels',
              '/Popovers',
              '/Tooltips',
              '/Tabs',
              '/RegularTables1',
              '/RegularTables4',
              '/FormsLayout',
              '/FormsControls',
              '/ApexCharts',
              '/Maps'
            ]}>
            <LeftSidebar>
              <Switch location={location} key={location.pathname}>
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}>
                  <Route path="/dashboard" component={DashboardDefault} />
                  <Route path="/kelas" component={Kelas} />
                  <Route path="/peserta" component={Peserta} />
                  <Route path="/Buttons" component={Buttons} />
                  <Route path="/Dropdowns" component={Dropdowns} />
                  <Route path="/NavigationMenus" component={NavigationMenus} />
                  <Route path="/ProgressBars" component={ProgressBars} />
                  <Route path="/Pagination" component={Pagination} />
                  <Route path="/Scrollable" component={Scrollable} />
                  <Route path="/Badges" component={Badges} />
                  <Route path="/Icons" component={Icons} />
                  <Route
                    path="/UtilitiesHelpers"
                    component={UtilitiesHelpers}
                  />
                  <Route path="/Cards3" component={Cards3} />
                  <Route path="/ListGroups" component={ListGroups} />
                  <Route path="/Modals" component={Modals} />
                  <Route path="/Notifications" component={Notifications} />
                  <Route path="/Carousels" component={Carousels} />
                  <Route path="/Popovers" component={Popovers} />
                  <Route path="/Tooltips" component={Tooltips} />
                  <Route path="/Tabs" component={Tabs} />
                  <Route path="/RegularTables1" component={RegularTables1} />
                  <Route path="/RegularTables4" component={RegularTables4} />
                  <Route path="/FormsLayout" component={FormsLayout} />
                  <Route path="/FormsControls" component={FormsControls} />
                  <Route path="/ApexCharts" component={ApexCharts} />
                  <Route path="/Maps" component={Maps} />
                </motion.div>
              </Switch>
            </LeftSidebar>
          </Route>
        </Switch>
      </Suspense>
    </AnimatePresence>
  );
};

export default Routes;
