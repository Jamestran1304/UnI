//Layouts

//Pages
import User from "../Pages/Home/User";
import AddUser from "../Pages/Home/AddUser";
import EditUser from "../Pages/Home/EditUser";
import ViewUser from "../Pages/Home/ViewUser";
import Login from "../Pages/Login/Login";
import Category from "../Pages/Categories/Category";
import AddCategory from "../Pages/Categories/AddCategory";
import EditCategory from "../Pages/Categories/EditCategory";
import Department from "../Pages/Departments/Department";
import AddDepartment from "../Pages/Departments/AddDepartment";
import EditDepartment from "../Pages/Departments/EditDepartment";
import Role from "../Pages/Role/Role";
import AddRole from "../Pages/Role/AddRole";
import EditRole from "../Pages/Role/EditRole";
import StaffSubmission from "../Pages/StaffSubmission2/StaffSubmission";
import ListStaffSubmission from "../Pages/StaffSubmission/ListStaffSubmission";
import DetailsStaffSubmission from "../Pages/StaffSubmission/DetailsStaffSubmission";
import ListofIdeas from "../Pages/StaffSubmission2/ListofIdeas";
import Submission from "../Pages/Submission/Submission";
import AddSubmission from "../Pages/Submission/AddSubmission";
import EditSubmission from "../Pages/Submission/EditSubmission";

// Staff Page 1
import HomePageStaff1 from "../StaffPages1/Home/HomePageStaff1";
import AccountStaff1 from "../StaffPages1/AccountStaff1/AccountStaff1";
import ChangePasswordStaff from "../StaffPages1/AccountStaff1/ChangePasswordStaff";
import EmailStaff from "../StaffPages1/AccountStaff1/EmailStaff";
import PersonalDataStaff from "../StaffPages1/AccountStaff1/PersonalDataStaff";
import ProfileStaff from "../StaffPages1/AccountStaff1/ProfileStaff";
import TwoFactorAuthenticationStaff from "../StaffPages1/AccountStaff1/TwoFactorAuthenticationStaff";
import StaffSubmission1 from "../StaffPages1/StaffSubmissionPage1/StaffSubmission1";
import DetailsStaffSubmission1 from "../StaffPages1/StaffSubmissionPage1/DetailsStaffSubmission1";
import ListStaffSubmission1 from "../StaffPages1/StaffSubmissionPage1/ListStaffSubmission1";

// Staff Page 2
import HomePageStaff from "../StaffPages2/Home/HomePageStaff";
import Profile from "../StaffPages2/AccountInfo/Profile";
import ChangePassword from "../StaffPages2/AccountInfo/ChangePassword";
import Email from "../StaffPages2/AccountInfo/Email";
import TwoFactorAuthentication from "../StaffPages2/AccountInfo/TwoFactorAuthentication";
import PersonalData from "../StaffPages2/AccountInfo/PersonalData";
import StaffSubmissionPage from "../StaffPages2/StaffSubmissionPage2/StaffSubmissionPage";
import ListStaffSubmissionPage from "../StaffPages2/StaffSubmissionPage2/ListStaffSubmissionPage";
import DetailsStaffSubmissionPage from "../StaffPages1/StaffSubmissionPage1/DetailsStaffSubmission1";

const publicRoutes = [
  { path: "/", component: User },
  { path: "/addUser", component: AddUser },
  { path: "/editUser/:id", component: EditUser },
  { path: "/viewUser/:id", component: ViewUser },
  { path: "/category", component: Category },
  { path: "/addCategory", component: AddCategory },
  { path: "/editCategory/:id", component: EditCategory },
  { path: "/login", component: Login },
  { path: "/department", component: Department },
  { path: "/addDepartment", component: AddDepartment },
  { path: "/editDepartment/:id", component: EditDepartment },
  { path: "/role", component: Role },
  { path: "/addRole", component: AddRole },
  { path: "/editRole/:id", component: EditRole },
  { path: "/staffSubmission", component: StaffSubmission },
  { path: "/liststaffsubmission", component: ListStaffSubmission },
  { path: "/detailsstaffsubmission", component: DetailsStaffSubmission },
  { path: "/listOfIdeas/:id", component: ListofIdeas },
  { path: "/submission", component: Submission },
  { path: "/addSubmission", component: AddSubmission },
  { path: "/editSubmission/:id", component: EditSubmission },

  // Staff Page 1
  { path: "/homepagestaff1", component: HomePageStaff1 },
  { path: "/staffsubmission1", component: StaffSubmission1 },
  { path: "/liststaffsubmission1", component: ListStaffSubmission1 },
  { path: "/detailsstaffsubmission1", component: DetailsStaffSubmission1 },
  { path: "/accountstaff1", component: AccountStaff1 },
  { path: "/changepasswordstaff", component: ChangePasswordStaff },
  { path: "/emailstaff", component: EmailStaff },
  { path: "/personaldatastaff", component: PersonalDataStaff },
  { path: "/profilestaff", component: ProfileStaff },
  {
    path: "/twofactorauthenticationstaff",
    component: TwoFactorAuthenticationStaff,
  },
  // Staff Page 2
  { path: "/homepagestaff", component: HomePageStaff },
  { path: "/profile", component: Profile },
  { path: "/changepassword", component: ChangePassword },
  { path: "/email", component: Email },
  { path: "/twofactorauthentication", component: TwoFactorAuthentication },
  { path: "/personaldata", component: PersonalData },
  { path: "/staffsubmissionpage1", component: StaffSubmissionPage },
  { path: "/liststaffsubmissionpage", component: ListStaffSubmissionPage },
  {
    path: "/detailsstaffsubmissionpage",
    component: DetailsStaffSubmissionPage,
  },
];

export { publicRoutes };

