import HomePage from "../views/HomePage";
import ContactUs from "../views/ContactUs";
import Information from "../views/Information";
import BusinessField from "../views/BusinessField";
import Welfare from "../views/Welfare";
import RecruitmentInformation from "../views/RecruitmentInformation";
// 福利计划子页面
import Education from "../views/SubWelfare/Education";
import Culture from "../views/SubWelfare/Culture";
// 企业情报子页面
import OrganizationChart from "../views/SubInformation/OrganizationChart";
import CompanyProfile from "../views/SubInformation/CompanyProfile";

// 事业概要子页面
import Achievements from "../views/SubBusinessField/Achievements";
import BusinessIntro from "../views/SubBusinessField/BusinessIntro";
import OtherServices from "../views/SubBusinessField/OtherServices";
import TalentDispatch from "../views/SubBusinessField/TalentDispatch";

const RouteName = [
  {
    name: "homepage",
    component: HomePage
  },
  {
    name: "information",
    component: Information,
    children: [
      {
        name: "company_profile",
        component: CompanyProfile
      },
      {
        name: "organizational_chart",
        component: OrganizationChart
      },
      {
        name: "security"
      }
    ]
  },
  {
    name: "business_field",
    component: BusinessField,
    children: [
      {
        name: "business_summary",
        component: BusinessIntro
      },
      {
        name: "temporary_staffing",
        component: TalentDispatch
      },
      {
        name: "commission_proposal"
      },
      {
        name: "other_business",
        component: OtherServices
      },
      {
        name: "development_performance",
        component: Achievements
      }
    ]
  },
  {
    name: "welfare",
    component: Welfare,
    children: [
      {
        name: "education",
        component: Education
      },
      {
        name: "company_culture",
        component: Culture
      }
    ]
  },
  {
    name: "recruitment_information",
    component: RecruitmentInformation
  },
  {
    name: "contact_us",
    component: ContactUs
  }
];

// const RouteName = [
//   {
//     name: 'homepage',
//     component: HomePage
//   },
//   {
//     name: 'information',
//     component: Information,
//     children: [
//       'company_profile',
//       'business_philosophy',
//       'representative_s_greetings',
//       'privacy_policy',
//       'organizational_chart',
//       'access',
//       'company_culture'
//     ]
//   },
//   {
//     name: 'business_field',
//     component: BusinessField,
//     children: [
//       'business_summary',
//       'quality_control',
//       'project_management',
//       'development_language_and_environment',
//       'foreign_temporary_staffing_business',
//       'commission_proposal',
//       'other_business',
//       'development_performance'
//     ]
//   },
//   {
//     name: 'welfare',
//     component: Welfare,
//     children: [
//       'education',
//       'leisure_and_entertainment'
//     ]
//   },
//   {
//     name: 'recruitment_information',
//     component: RecruitmentInformation
//   },
//   {
//     name: 'contact_us',
//     component: ContactUs
//   }
// ]

export default RouteName;
