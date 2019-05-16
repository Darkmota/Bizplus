import HomePage from '../views/HomePage'
import ContactUs from '../views/ContactUs'
import Information from '../views/Information'
import BusinessField from '../views/BusinessField'
import Welfare from '../views/Welfare'
import RecruitmentInformation from '../views/RecruitmentInformation'


const RouteName = [
  {
    name: 'homepage',
    component: HomePage
  },
  {
    name: 'information',
    component: Information,
    children: [
      'company_profile',
      'business_philosophy',
      'representative_s_greetings',
      'privacy_policy',
      'organizational_chart',
      'access',
      'company_culture'
    ]
  },
  {
    name: 'business_field',
    component: BusinessField,
    children: [
      'business_summary',
      'quality_control',
      'project_management',
      'development_language_and_environment',
      'foreign_temporary_staffing_business',
      'commission_proposal',
      'other_business',
      'development_performance'
    ]
  },
  {
    name: 'welfare',
    component: Welfare,
    children: [
      'education',
      'leisure_and_entertainment'
    ]
  },
  {
    name: 'recruitment_information',
    component: RecruitmentInformation
  },
  {
    name: 'contact_us',
    component: ContactUs
  }
]

export default RouteName