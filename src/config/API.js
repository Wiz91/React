const API = {
  Auth: {
    Login: "/account/login",
    Register: "/api/register"
  },
  Doctors: {
    GetAllDoctorList:"/account/view-all/doctor",
    AddDoctor:"/account/doctor/registration",
    DeleteDoctor:"/account/doctor-delete",
    UpdateDoctor:"/account/doctor-update/information"
  },

  Clinic: {
    Staff: {
      GetAllStaffList: "/account/view-all/staff",
      AddStaff: "/account/staff/registration",
      DeleteStaff:'/account/staff-delete',
      UpdateStaff:'/account/staff-update/information'
    }
  }
};


export default API;
