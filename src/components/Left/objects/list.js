import { CiHome } from "react-icons/ci";
import { CiHashtag } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { AiOutlineLogout } from "react-icons/ai";


const menuItems = [
  { name: 'Home', icon: <CiHome size={'32px'} /> },
  { name: 'Explore', icon: <CiHashtag size={'32px'} /> },
  { name: 'Notifications', icon: <IoIosNotificationsOutline size={'32px'} /> },
  { name: 'Messages', icon: <CiUser size={'32px'} /> },
  { name: 'Grok', icon: <CiBookmark size={'32px'} /> },
  { name: 'Lists', icon: <IoIosNotificationsOutline size={'32px'} />  }, // Add your list icon component
  { name: 'Bookmarks', icon: <CiBookmark size={'32px'} /> },
  { name: 'Communities', icon: <IoIosNotificationsOutline size={'32px'} />  }, // Add your communities icon component
  { name: 'Premium', icon: <IoIosNotificationsOutline size={'32px'} />  }, // Add your premium icon component
  { name: 'Profile', icon: <CiUser size={'32px'} /> },
  { name: 'More', icon: <IoIosNotificationsOutline size={'32px'} />  }, // Add your more icon component
]

export default menuItems
