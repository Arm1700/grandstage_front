import { MdOutlinePlace } from "react-icons/md";
import { MdOutlineContactMail } from "react-icons/md";
import { BsStopwatch } from "react-icons/bs";

const contactArray = [
  {
    id: 1,
    title: 'Address',
    color: '#2e67f5',
    Icon: MdOutlinePlace,
    description: '725 E Broadway, Glendale, CA, United States, 91205'
  },
  {
    id: 2,
    title: 'Contact Info',
    color: '#5ebb3e',
    Icon: MdOutlineContactMail,
    description: 'Number: +1(747) 236-8888 \n Email: grandeducationalcenter@gmail.com'
  },
  {
    id: 3,
    title: 'Work Times',
    Icon: BsStopwatch,
    color: '#ffbf25',
    description: 'Monday - Friday: 09:00 - 20:00 \nSunday & Saturday: 10:30 - 22:00  '
  }
]

export default contactArray