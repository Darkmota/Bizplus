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
      'organizational_chart',
      'security'
    ]
  },
  {
    name: 'business_field',
    component: BusinessField,
    children: [
      'business_summary',
      'temporary_staffing',
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
      'company_culture'
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