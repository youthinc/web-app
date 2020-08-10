import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebookF,
  faFacebookSquare,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCircle as faCircleRegular,
  faClock as faClockRegular,
} from "@fortawesome/free-regular-svg-icons";
import {
  faArrowLeft,
  faArrowRight,
  faArrowUp,
  faBan,
  faBriefcase,
  faBuilding,
  faCalendar,
  faCheck,
  faCheckCircle,
  faChevronLeft,
  faChevronRight,
  faCircle,
  faClock,
  faEnvelope,
  faGlobe,
  faHistory,
  faList,
  faListOl,
  faLock,
  faLockOpen,
  faMapMarkerAlt,
  faMinus,
  faMinusCircle,
  faPaperPlane,
  faPencilAlt,
  faPhone,
  faPlus,
  faPlusCircle,
  faPrint,
  faSearch,
  faSignInAlt,
  faSignOutAlt,
  faThumbsUp,
  faTimes,
  faTrashAlt,
  faUser,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

export const configureIcons = () => {
  library.add(
    faPlus,
    faMinus,
    faTimes,
    faChevronLeft,
    faChevronRight,
    faArrowLeft,
    faArrowRight,
    faLock,
    faLockOpen,
    faListOl,
    faCheck,
    faBan,
    faCircle,
    faClockRegular,
    faHistory,
    faList,
    faSignOutAlt,
    faPrint,
    faPencilAlt,
    faSignInAlt,
    faEnvelope,
    faSearch,
    faPlusCircle,
    faMinusCircle,
    faTrashAlt,
    faClock,
    faUser,
    faFacebookF,
    faArrowUp,
    faPaperPlane,
    faThumbsUp,
    faCalendar,
    faUsers,
    faCircleRegular,
    faCheckCircle,
    faPhone,
    faBriefcase,
    faGlobe,
    faMapMarkerAlt,
    faBuilding,
    faFacebookSquare,
    faInstagram,
    faLinkedin,
    faTwitter,
    faYoutube
  );
};
