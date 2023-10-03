import Index from "./components/index";
import Feedback from "./components/user.feedback";
import YourFeedback from "./components/user.feedback.your";
import EditFeedback from "./components/user.feedback.edit";
import DashboardFeedback from "./components/Admin/feedback/feedback.dashboard";

import UserLogin from "./components/user.login";
import UserRegistration from "./components/user.registration";
import UserProfile from "./components/user.profile";
import UserProfileEdit from "./components/user.profile.edit";

import About from "./components/user.About";
import Admin from "./components/Admin/admin";
import AdminLogin from "./components/Admin/admin.login";
import AdminReg from "./components/Admin/admin.reg";

import EmployeeProfile from "./components/Admin/employees/emplooyee.profile";
import EmployeeDashboard from "./components/Admin/employees/EmployeeDashboard";
import EmployeeView from "./components/Admin/employees/EmployeeView";
import EmployeeEdit from "./components/Admin/employees/employee.profile.edit";
import EmployeeAddStepone from "./components/Admin/employees/employee.admin.add.stepone";
import EmployeeAddStepTwo from "./components/Admin/employees/employee.admin.add.stepsecond";

import VehicleDashboard from "./components/Admin/vehicle/vehicle.dashboard";
import Vehiclecategory from "./components/Admin/vehicle/vehicle.category";

import VehicleAdd from "./components/Admin/vehicle/vehicle.add";
import VehicleEdit from "./components/Admin/vehicle/vehicle.edit";
import VehicleRequest from "./components/Admin/vehicleimport/vehicle.request";
import UserDashboard from "./components/Admin/user/UserDashboard";

import ImportDashboard from "./components/Admin/vehicleimport/import.dashboard";
import ImportEdit from "./components/Admin/vehicleimport/import.vehicle.edit";
import ImportAdd from "./components/Admin/vehicleimport/import.vehicle.Add";

import MaintanceDashboard from "./components/Admin/maintance/maintance.dashboad";
import ServiceCenter from "./components/Admin/maintance/maintance.add.service.center";
import ServiceCenterEdit from "./components/Admin/maintance/maintance.edit.service.center";
import BookingDashboard from "./components/Admin/maintance/bookingDashboard";
import BookingReport from "./components/Admin/maintance/bookingReport";
import Feedbackreport from "./components/Admin/feedback/feedback.report";

import FeedbackView from "./components/Admin/feedback/feedback.view";

import MarketingDashboard from "./components/Admin/marketing/MarketingDashboard";
import MarketingAdd from "./components/Admin/marketing/Marketing.Add";
import MarketingEdit from "./components/Admin/marketing/Marketing.Edit";
import CustomerAdDashboard from "./components/Admin/marketing/customer.ad.Dashboard";

import userAdminDashboard from "./components/userAdmin/userAdminDashboard";
import serviceCenters from "./components/userAdmin/serviceCenters";
import serviceBooking from "./components/userAdmin/serviceBooking";
import serviceBookingEdit from "./components/userAdmin/serviceBookingEdit";
import Advertisment from "./components/userAdmin/advertisment";
import AdvertismentEdit from "./components/userAdmin/advertismentEdit";
import UserViewAdvertisement from "./components/userAdmin/userViewAdvertisement";
import UserViewOneAdvertisement from "./components/userAdmin/userViewOneAdvetisment";
import importVehicleUser from "./components/userAdmin/importVehicleUser";
import ImportVehicleOne from "./components/userAdmin/import.vehicle.one";

import Payment from "./components/userAdmin/userPayment";
import PaymentDashboard from "./components/Admin/payment/paymentDashboard";
import PaymentView from "./components/Admin/payment/paymentView";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { NotFound } from "./components/NotFound";

function App() {
  const user = sessionStorage.getItem("user_name");
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route
          path="/Feedback"
          exact
          element={
            user ? (
              <Feedback />
            ) : (
              // Redirect to the login page if the user is not logged in
              <Navigate to="/UserLogin" />
            )
          }
        />

        <Route
          path="/YourFeedback"
          exact
          element={
            user ? (
              <YourFeedback />
            ) : (
              // Redirect to the login page if the user is not logged in
              <Navigate to="/UserLogin" />
            )
          }
        />
        <Route
          path="/EditFeedback"
          exact
          element={
            user ? (
              <EditFeedback />
            ) : (
              // Redirect to the login page if the user is not logged in
              <Navigate to="/UserLogin" />
            )
          }
        />
        <Route path="/UserLogin" exact element={<UserLogin />} />
        <Route path="/UserRegistration" exact element={<UserRegistration />} />

        <Route path="/About" exact element={<About />} />
        <Route
          path="/Admin"
          exact
          element={
            user ? (
              <Admin />
            ) : (
              // Redirect to the login page if the user is not logged in
              <Navigate to="/UserLogin" />
            )
          }
        />
        <Route
          path="/AdminLogin"
          exact
          element={
            user ? (
              <AdminLogin />
            ) : (
              // Redirect to the login page if the user is not logged in
              <Navigate to="/UserLogin" />
            )
          }
        />
        <Route
          path="/AdminReg"
          exact
          element={
            user ? (
              <AdminReg />
            ) : (
              // Redirect to the login page if the user is not logged in
              <Navigate to="/UserLogin" />
            )
          }
        />

        <Route
          path="/EmployeeProfile"
          exact
          element={
            user ? (
              <EmployeeProfile />
            ) : (
              // Redirect to the login page if the user is not logged in
              <Navigate to="/UserLogin" />
            )
          }
        />
        <Route
          path="/EmployeeDashboard"
          exact
          element={
            user ? (
              <EmployeeDashboard />
            ) : (
              // Redirect to the login page if the user is not logged in
              <Navigate to="/UserLogin" />
            )
          }
        />
        <Route
          path="/EmployeeView"
          exact
          element={
            user ? (
              <EmployeeView />
            ) : (
              // Redirect to the login page if the user is not logged in
              <Navigate to="/UserLogin" />
            )
          }
        />
        <Route
          path="/EmployeeEdit"
          exact
          element={
            user ? (
              <EmployeeEdit />
            ) : (
              // Redirect to the login page if the user is not logged in
              <Navigate to="/UserLogin" />
            )
          }
        />
        <Route
          path="/EmployeeAddStepone"
          exact
          element={
            user ? (
              <EmployeeAddStepone />
            ) : (
              // Redirect to the login page if the user is not logged in
              <Navigate to="/UserLogin" />
            )
          }
        />
        <Route
          path="/EmployeeAddStepTwo"
          exact
          element={
            user ? (
              <EmployeeAddStepTwo />
            ) : (
              // Redirect to the login page if the user is not logged in
              <Navigate to="/UserLogin" />
            )
          }
        />

        <Route
          path="/VehicleDashboard"
          exact
          element={
            user ? (
              <VehicleDashboard />
            ) : (
              // Redirect to the login page if the user is not logged in
              <Navigate to="/UserLogin" />
            )
          }
        />
        <Route
          path="/Vehiclecategory"
          exact
          element={
            user ? (
              <Vehiclecategory />
            ) : (
              // Redirect to the login page if the user is not logged in
              <Navigate to="/UserLogin" />
            )
          }
        />

        <Route
          path="/VehicleAdd"
          exact
          element={
            user ? (
              <VehicleAdd />
            ) : (
              // Redirect to the login page if the user is not logged in
              <Navigate to="/UserLogin" />
            )
          }
        />
        <Route
          path="/VehicleEdit"
          exact
          element={
            user ? (
              <VehicleEdit />
            ) : (
              // Redirect to the login page if the user is not logged in
              <Navigate to="/UserLogin" />
            )
          }
        />
        <Route
          path="/ImportDashboard"
          exact
          element={
            user ? (
              <ImportDashboard />
            ) : (
              // Redirect to the login page if the user is not logged in
              <Navigate to="/UserLogin" />
            )
          }
        />
        <Route
          path="/ImportVehicleEdit"
          exact
          element={
            user ? (
              <ImportEdit />
            ) : (
              // Redirect to the login page if the user is not logged in
              <Navigate to="/UserLogin" />
            )
          }
        />
        <Route
          path="/ImportAdd"
          exact
          element={
            user ? (
              <ImportAdd />
            ) : (
              // Redirect to the login page if the user is not logged in
              <Navigate to="/UserLogin" />
            )
          }
        />
        <Route
          path="/MaintanceDashboard"
          exact
          element={
            user ? (
              <MaintanceDashboard />
            ) : (
              // Redirect to the login page if the user is not logged in
              <Navigate to="/UserLogin" />
            )
          }
        />
        <Route
          path="/ServiceCenter"
          exact
          element={
            user ? (
              <ServiceCenter />
            ) : (
              // Redirect to the login page if the user is not logged in
              <Navigate to="/UserLogin" />
            )
          }
        />
        <Route
          path="/ServiceCenterEdit"
          exact
          element={
            user ? (
              <ServiceCenterEdit />
            ) : (
              // Redirect to the login page if the user is not logged in
              <Navigate to="/UserLogin" />
            )
          }
        />
        <Route
          path="/DashboardFeedback"
          exact
          element={
            user ? (
              <DashboardFeedback />
            ) : (
              // Redirect to the login page if the user is not logged in
              <Navigate to="/UserLogin" />
            )
          }
        />

        <Route
          path="/FeedbackView"
          exact
          element={
            user ? (
              <FeedbackView />
            ) : (
              // Redirect to the login page if the user is not logged in
              <Navigate to="/UserLogin" />
            )
          }
        />
        <Route
          path="/MarketingDashboard"
          exact
          element={
            user ? (
              <MarketingDashboard />
            ) : (
              // Redirect to the login page if the user is not logged in
              <Navigate to="/UserLogin" />
            )
          }
        />
        <Route
          path="/MarketingAdd"
          exact
          element={
            user ? (
              <MarketingAdd />
            ) : (
              // Redirect to the login page if the user is not logged in
              <Navigate to="/UserLogin" />
            )
          }
        />
        <Route
          path="/MarketingEdit"
          exact
          element={
            user ? (
              <MarketingEdit />
            ) : (
              // Redirect to the login page if the user is not logged in
              <Navigate to="/UserLogin" />
            )
          }
        />
        <Route
          path="/userAdminDashboard"
          exact
          element={
            user ? (
              <userAdminDashboard />
            ) : (
              // Redirect to the login page if the user is not logged in
              <Navigate to="/UserLogin" />
            )
          }
        />
        <Route
          path="/serviceCenters"
          exact
          element={
            user ? (
              <serviceCenters />
            ) : (
              // Redirect to the login page if the user is not logged in
              <Navigate to="/UserLogin" />
            )
          }
        />
        <Route
          path="/serviceBooking"
          exact
          element={
            user ? (
              <serviceBooking />
            ) : (
              // Redirect to the login page if the user is not logged in
              <Navigate to="/UserLogin" />
            )
          }
        />
        <Route
          path="/serviceBookingEdit"
          exact
          element={
            user ? (
              <serviceBookingEdit />
            ) : (
              // Redirect to the login page if the user is not logged in
              <Navigate to="/UserLogin" />
            )
          }
        />
        <Route
          path="/Advertisment"
          exact
          element={
            user ? (
              <Advertisment />
            ) : (
              // Redirect to the login page if the user is not logged in
              <Navigate to="/UserLogin" />
            )
          }
        />
        <Route
          path="/AdvertismentEdit"
          exact
          element={
            user ? (
              <AdvertismentEdit />
            ) : (
              // Redirect to the login page if the user is not logged in
              <Navigate to="/UserLogin" />
            )
          }
        />
        <Route
          path="/UserViewAdvertisement"
          exact
          element={
            user ? (
              <UserViewAdvertisement />
            ) : (
              // Redirect to the login page if the user is not logged in
              <Navigate to="/UserLogin" />
            )
          }
        />
        <Route
          path="/UserViewOneAdvertisement"
          exact
          element={
            user ? (
              <UserViewOneAdvertisement />
            ) : (
              // Redirect to the login page if the user is not logged in
              <Navigate to="/UserLogin" />
            )
          }
        />
        <Route
          path="/Payment"
          exact
          element={
            user ? (
              <Payment />
            ) : (
              // Redirect to the login page if the user is not logged in
              <Navigate to="/UserLogin" />
            )
          }
        />
        <Route
          path="/BookingDashboard"
          exact
          element={
            user ? (
              <BookingDashboard />
            ) : (
              // Redirect to the login page if the user is not logged in
              <Navigate to="/UserLogin" />
            )
          }
        />
        <Route
          path="/BookingReport"
          exact
          element={
            user ? (
              <BookingReport />
            ) : (
              // Redirect to the login page if the user is not logged in
              <Navigate to="/UserLogin" />
            )
          }
        />

        <Route
          path="/CustomerAdDashboard"
          exact
          element={
            user ? (
              <CustomerAdDashboard />
            ) : (
              // Redirect to the login page if the user is not logged in
              <Navigate to="/UserLogin" />
            )
          }
        />
        <Route
          path="/VehicleRequest"
          exact
          element={
            user ? (
              <VehicleRequest />
            ) : (
              // Redirect to the login page if the user is not logged in
              <Navigate to="/UserLogin" />
            )
          }
        />
        <Route
          path="/importVehicleUser"
          exact
          element={
            user ? (
              <importVehicleUser />
            ) : (
              // Redirect to the login page if the user is not logged in
              <Navigate to="/UserLogin" />
            )
          }
        />
        <Route path="/ImportVehicleOne" exact element={<ImportVehicleOne />} />
        <Route
          path="/PaymentDashboard"
          exact
          element={
            user ? (
              <PaymentDashboard />
            ) : (
              // Redirect to the login page if the user is not logged in
              <Navigate to="/UserLogin" />
            )
          }
        />
        <Route
          path="/PaymentView"
          exact
          element={
            user ? (
              <PaymentView />
            ) : (
              // Redirect to the login page if the user is not logged in
              <Navigate to="/UserLogin" />
            )
          }
        />
        <Route
          path="/Feedbackreport"
          exact
          element={
            user ? (
              <Feedbackreport />
            ) : (
              // Redirect to the login page if the user is not logged in
              <Navigate to="/UserLogin" />
            )
          }
        />
        <Route
          path="/UserProfile"
          exact
          element={
            user ? (
              <UserProfile />
            ) : (
              // Redirect to the login page if the user is not logged in
              <Navigate to="/UserLogin" />
            )
          }
        />
        <Route
          path="/UserProfileEdit"
          exact
          element={
            user ? (
              <UserProfileEdit />
            ) : (
              // Redirect to the login page if the user is not logged in
              <Navigate to="/UserLogin" />
            )
          }
        />
        <Route
          path="/UserDashboard"
          exact
          element={
            user ? (
              <UserDashboard />
            ) : (
              // Redirect to the login page if the user is not logged in
              <Navigate to="/UserLogin" />
            )
          }
        />

        <Route path="/NotFound" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/NotFound" />} />

        {/* Block specific routes */}
        <Route path="/._darcs" element={<Navigate to="/UserLogin" />} />
        <Route path="/.bzr" element={<Navigate to="/UserLogin" />} />
        <Route path="/.hg" element={<Navigate to="/UserLogin" />} />
        <Route path="/BitKeeper" element={<Navigate to="/UserLogin" />} />
      </Routes>
    </Router>
  );
}

export default App;
