import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import {BrowserRouter as Router, Routes, Route,Redirect } from "react-router-dom";
import HomePage from './pages/HomePage';
import ActivePage from './pages/ActivePage';
import Home from './containers/Dashboard/Home';
import Airdrop from './pages/Airdrop';
import Membership from './pages/Membership';
import Venture from './containers/Venture/Venture';
import DashboardVenture from './containers/Dashboard/Venture';
import DashboardAirdrop from './containers/Dashboard/Airdrop';
import ActiveVenture from './containers/Venture/ActiveVenture';
import MembershipIDO from './containers/Membership/IDO';
import MembershipVenture from './containers/Membership/Venture';
import ProfileKyc from './containers/Dashboard/profile/ProfileKyc';
import MainProject from './pages/MainProject';
import VentureProject from './pages/VentureProject';
import AdminPanel from './containers/admin/AdminPanel';
import CompanyPanel from './pages/CompanyPanel';
import Errorss from './pages/error';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import AdminIDO from './containers/admin/IDO/AdminIDO';
import AdminIDOOpen from './containers/admin/IDO/AdminIDOOpen';
import AdminAirdrop from './containers/admin/Airdrop/AdminAirdrop';
import AdminAirdropOpen from './containers/admin/Airdrop/AdminAirdropOpen';
import AdminVenture from './containers/admin/Venture/AdminVenture';
import AdminVentureEdit from './containers/admin/Venture/AdminVentureEdit';
import AdminVentureOpen from './containers/admin/Venture/AdminVentureOpen';
import AdminVentureFunds from './containers/admin/Venture/AdminVentureFunds';
import AdminAirdropFunds from './containers/admin/Airdrop/AdminAirdropFunds';
import AdminIDOFunds from './containers/admin/IDO/AdminIDOFunds';
import AdminAirdropEdit from './containers/admin/Airdrop/AdminAirdropEdit';
import AdminIDOEdit from './containers/admin/IDO/AdminIDOEdit';
import AdminMembershipNav from './components/AdminMembershipNav';
import MembershipAdd from './containers/admin/Membership/MembershipAdd';
import MembershipActivePlan from './containers/admin/Membership/MembershipActivePlan';
import MembershipPlanEdit from './containers/admin/Membership/MembershipPlanEdit';
import MembershipPlanUser from './containers/admin/Membership/MembershipPlanUser';
import MembershipAddUser from './containers/admin/Membership/MembershipAddUser';
import MembershipCancel from './containers/admin/Membership/MembershipCancel';
import UserDetails from './containers/admin/User/UserDetails';
import UserPending from './containers/admin/User/UserStatus';
import UserStatus from './containers/admin/User/UserStatus';
import AdminLink from './containers/admin/AdminLink';
import AdminHelp from './containers/admin/AdminHelp';
import AdminCommision from './containers/admin/AdminCommision';
import AdminAirdropClose from './containers/admin/Airdrop/AdminAirdropClose';
import AdminIDOClose from './containers/admin/IDO/AdminIDOClose';
import AdminVentureClose from './containers/admin/Venture/AdminVentureClose';


const App = () => {
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  const appRole = useSelector(state => state.role);
  useEffect(()=>{
    console.log(isLoggedIn);
  },[])
 
  return (
    
    <ChakraProvider>
      
      <Router>
        <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="active" element={<ActivePage/>}/>
      
     
      
       {isLoggedIn === false  ?  <>
        </> : appRole != null ? appRole === "Admin" ? <><Route path="/admin/dashboard" element={<AdminPanel/>}/>
        <Route path="/admin/dashboard/ido" element={<AdminIDO/>}/>
        <Route path="/admin/dashboard/ido/open" element={<AdminIDOOpen/>}/>
        <Route path="/admin/dashboard/airdrop" element={<AdminAirdrop/>}/>
        <Route path="/admin/dashboard/airdrop/open" element={<AdminAirdropOpen/>}/>
        <Route path="/admin/dashboard/venture" element={<AdminVenture/>}/>
        <Route path="/admin/dashboard/venture/edit" element={<AdminVentureEdit/>}/>
        <Route path="/admin/dashboard/venture/open" element={<AdminVentureOpen/>}/>
        <Route path="/admin/dashboard/venture/funds" element={<AdminVentureFunds/>}/>
        <Route path="/admin/dashboard/airdrop/edit" element={<AdminAirdropEdit/>}/>
        <Route path="/admin/dashboard/ido/edit" element={<AdminIDOEdit/>}/>
        <Route path="/admin/dashboard/ido/funds" element={<AdminIDOFunds/>}/>
        <Route path="/admin/dashboard/airdrop/funds" element={<AdminAirdropFunds/>}/>
        <Route path="/admin/dashboard/membership" element={<MembershipAdd/>}/>
        <Route path="/admin/dashboard/membership/active" element={<MembershipActivePlan/>}/>
        <Route path="/admin/dashboard/membership/edit" element={<MembershipPlanEdit/>}/>
        <Route path="/admin/dashboard/membership/users" element={<MembershipPlanUser/>}/>
        <Route path="/admin/dashboard/membership/adduser" element={<MembershipAddUser/>}/>
        <Route path="/admin/dashboard/membership/cancel" element={<MembershipCancel/>}/>
        <Route path="/admin/dashboard/user" element={<UserDetails/>}/>
        <Route path="/admin/dashboard/user/pending" element={<UserStatus/>}/>
        <Route path="/admin/dashboard/link" element={<AdminLink/>}/>
        <Route path="/admin/dashboard/help" element={<AdminHelp/>}/>
        <Route path="admin/dashboard/commission" element={<AdminCommision/>}/>
        <Route path="/admin/dashboard/airdrop/close" element={<AdminAirdropClose/>}/>
        <Route path="/admin/dashboard/ido/close" element={<AdminIDOClose/>}/>
        <Route path="/admin/dashboard/venture/close" element={<AdminVentureClose/>}/> </> : appRole === "user" ? <><Route path="/dashboard" element={<Home/>}/><Route path="dashboard/venture" element={<DashboardVenture/>}/>
        <Route path="dashboard/airdrop" element={<DashboardAirdrop/>}/><Route path="dashboard/profile/kyc" element={<ProfileKyc/>}/>
        <Route path="/company/dashboard" element={<CompanyPanel/>}/> </>  :    "" : ""
        
        }
        <Route path="/project/ido" element={<MainProject/>}/>
        <Route path="/project/venture" element={<VentureProject/>}/>
       
        <Route path="/error" element={<Errorss/>}/>
        <Route path="airdrop" element={<Airdrop/>}/>
        <Route path="membership" element={<Membership/>}/>
        <Route path="venture" element={<Venture/>}/>
        <Route path="activeVenture" element={<ActiveVenture/>}/>
        <Route path="membership/all" element={<Membership/>}/>
        <Route path="membership/venture" element={<MembershipVenture/>}/>
        <Route path="membership/ido" element={<MembershipIDO/>}/>
        </Routes>
      </Router>
  </ChakraProvider>
  );
}

export default App;
