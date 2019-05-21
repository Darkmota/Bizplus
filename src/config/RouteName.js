import HomePage from "../views/HomePage";
import ContactUs from "../views/ContactUs";
import Information from "../views/Information";
import BusinessField from "../views/BusinessField";
import Welfare from "../views/Welfare";
import RecruitmentInformation from "../views/RecruitmentInformation";
// 福利计划子页面
import Education from '../views/SubWelfare/Education'
import Culture from '../views/SubWelfare/Culture'
// import Education from '../wiews/SubWelfare/Education'
// import Culture from '../wiews/SubWelfare/Culture'

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
        name: "company_profile"
      },
      {
        name: "business_philosophy"
      },
      {
        name: "representative_s_greetings"
      },
      {
        name: "privacy_policy"
      },
      {
        name: "organizational_chart"
      },
      {
        name: "access"
      },
      {
        name: "company_culture"
      }
    ]
  },
  {
    name: "business_field",
    component: BusinessField,
    children: [
      {
        name: "business_summary"
      },
      {
        name: "quality_control"
      },
      {
        name: "project_management"
      },
      {
        name: "development_language_and_environment"
      },
      {
        name: "foreign_temporary_staffing_business"
      },
      {
        name: "commission_proposal"
      },
      {
        name: "other_business"
      },
      {
        name: "development_performance"
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
        name: "leisure_and_entertainment",
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
