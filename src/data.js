export const GALLERY_IMAGES = [
  '/gallery/1.jpg',
  '/gallery/2.jpg',
  '/gallery/3.jpg',
  '/gallery/4.jpg',
  '/gallery/5.jpg',
  '/gallery/6.jpg',
  '/gallery/7.jpg',
  '/gallery/8.jpg',
  '/gallery/9.jpg',
  '/gallery/10.jpg',
  '/gallery/11.jpg',
  '/gallery/12.jpg',
  '/gallery/13.jpg',
  '/gallery/14.jpg',
  '/gallery/15.jpg',
  '/gallery/16.jpg',
  '/gallery/17.jpg',
  '/gallery/18.jpg',
  '/gallery/19.jpg',
  '/gallery/20.jpg',
  '/gallery/21.jpg',
  '/gallery/22.jpg',
  '/gallery/23.jpg',
  '/gallery/24.jpg',
  '/gallery/25.jpg',
  '/gallery/26.jpg',
  '/gallery/27.jpg',
  '/gallery/28.jpg',
  '/gallery/29.jpg',
  '/gallery/30.jpg',
  '/gallery/31.jpg',
  '/gallery/32.jpg',
  '/gallery/33.jpg',
  '/gallery/34.jpg',
  '/gallery/35.jpg',
  '/gallery/36.jpg',
  '/gallery/37.jpg',
  '/gallery/38.jpg',
  '/gallery/39.jpg',
]

export const WHATSAPP_NUMBER = '923284884150' // 03284884150 in international format

export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/thearqamschools',
  instagram: 'https://instagram.com/thearqamschools',
}

// NOTE: All campuses currently point to the same temporary location
// (Saddar Gol Chakkar, Lahore) until each campus's exact address is
// provided. Update `mapQuery` per campus once the real address is available.
// "Saddar Gol Chakkar" is the correct spelling (not "Sadar Gol Chakar" /
// "Sadder Gool Chaker").
const DEFAULT_MAP_QUERY = 'Saddar Gol Chakkar, Lahore, Pakistan'

export const CAMPUSES = [
  {
    id: 'saddar-bazar',
    name: 'Saddar Bazar Campus',
    image: '/campuses/saddar-bazar.jpg',
    description:
      'Easily accessible for families in the surrounding area, it combines quality education with a focus on discipline, character building, and academic excellence.',
    mapQuery: DEFAULT_MAP_QUERY,
  },
  {
    id: 'gulshan-ravi',
    name: 'Gulshan Ravi Campus',
    image: '/campuses/gulshan-ravi.jpg',
    description:
      'Serving the Gulshan Ravi community, this campus provides a full spectrum of education from Kindergarten through Matriculation, with experienced faculty and a supportive atmosphere.',
    mapQuery: DEFAULT_MAP_QUERY,
  },
  {
    id: 'chungi',
    name: 'Chungi Campus',
    image: '/campuses/chungi.jpg',
    description:
      'The Chungi Campus is a trusted educational hub for families in the area, offering classes from KG to Matric. It focuses on modern teaching methods with core values to prepare students for future success.',
    mapQuery: DEFAULT_MAP_QUERY,
  },
  {
    id: 'ferozpur-road',
    name: 'Ferozpur Road Campus',
    image: '/campuses/ferozpur-road.jpg',
    description:
      'This campus welcomes students from KG to Matric in a well-equipped and student-friendly setting. It aims to foster curiosity, confidence, and academic growth through a balanced and engaging curriculum.',
    mapQuery: DEFAULT_MAP_QUERY,
  },
  {
    id: 'pak-arab-society',
    name: 'Pak Arab Society Campus',
    image: '/campuses/pak-arab-society.jpg',
    description:
      'Conveniently located in Pak Arab Society, this campus caters to students from Kindergarten to Matriculation. It provides an encouraging environment where children can build strong academic and personal skills for lifelong success.',
    mapQuery: DEFAULT_MAP_QUERY,
  },
]

export const BRANCHES = [
  {
    city: 'Lahore',
    name: 'Lahore Campus',
    address: 'Plot No. 1, Street No. 4, Amir Town, Harbanspura, Lahore, Pakistan',
    phone: '+92-042-37161332',
    email: 'arqam.ho.lhr@gmail.com',
    hours: 'Mon – Thu: 8:00 AM – 3:00 PM · Fri: 8:00 AM – 12:30 PM',
  },
  {
    city: 'Faisalabad',
    name: 'Faisalabad Campus',
    address: 'Sanora Colony, Samanabad, Faisalabad, Pakistan',
    phone: '+92-041-2660265',
    email: 'thearqamschools@gmail.com',
    hours: 'Mon – Thu: 8:00 AM – 3:00 PM · Fri: 8:00 AM – 12:30 PM',
  },
]
