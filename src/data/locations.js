import annaNagarWestImg from '../assets/anna-nagar-west.jpg';
import aminjikaraiImg from '../assets/aminjikarai.jpg';
import ayappakkamImg from '../assets/ayappakkam.jpeg';
// Anna Nagar West Gallery Imports
import anw1 from '../assets/gallery/anna-nagar-west/1.jpg';
import anw2 from '../assets/gallery/anna-nagar-west/2.jpg';
import anw3 from '../assets/gallery/anna-nagar-west/3.jpg';
import anw4 from '../assets/gallery/anna-nagar-west/4.jpg';
import anw5 from '../assets/gallery/anna-nagar-west/5.jpg';

import anw6 from '../assets/gallery/anna-nagar-west/6.jpg';
import anw7 from '../assets/gallery/anna-nagar-west/7.jpg';
import anw8 from '../assets/gallery/anna-nagar-west/8.jpg';

const annaNagarWestGallery = [anw1, anw2, anw3, anw4, anw5, anw6, anw7, anw8];

// Aminjikarai Gallery Imports
import ami1 from '../assets/gallery/aminjikarai/1.jpg';
import ami2 from '../assets/gallery/aminjikarai/2.jpg';
import ami3 from '../assets/gallery/aminjikarai/3.jpg';
import ami4 from '../assets/gallery/aminjikarai/4.jpg';
import ami5 from '../assets/gallery/aminjikarai/5.jpg';
import ami6 from '../assets/gallery/aminjikarai/6.jpg';
import ami7 from '../assets/gallery/aminjikarai/7.jpg';
import ami8 from '../assets/gallery/aminjikarai/8.jpg';

const aminjikaraiGallery = [ami1, ami2, ami3, ami4, ami5, ami6, ami7, ami8];

const loadGallery = (modules) =>
    Object.entries(modules)
        .sort(([pathA], [pathB]) => pathA.localeCompare(pathB, undefined, { numeric: true, sensitivity: 'base' }))
        .map(([, image]) => image);

const ayappakkamGallery = loadGallery(
    import.meta.glob('../assets/gallery/ayappakam/*.{jpg,jpeg,png,JPG,JPEG,PNG}', {
        eager: true,
        import: 'default'
    })
);

export const operatingHours = {
    weekdays: 'Mon - Sat: 5:30 AM - 9:30 PM',
    sunday: 'Sunday: 7:00 AM - 1:00 PM'
};

export const locations = [
    {
        id: 'anna-nagar-west',
        name: 'Anna Nagar West',
        tagline: 'Premium Facility',
        description: 'Our premium facility located in the heart of Anna Nagar. Experience elite training with top-tier equipment and expert coaches.',
        address: 'F factor, W, 677, E Main Rd, D-Sector, Anna Nagar West Extension, Chennai, Tamil Nadu 600101',
        phone: '+91 99627 37222',
        email: 'annanagar@focus313fitness.com',
        timings: { ...operatingHours },
        googleRating: 4.9,
        mapUrl: 'https://maps.google.com/maps?q=13.092141,80.197279&z=15&output=embed',
        mapUrl: 'https://maps.google.com/maps?q=13.092141,80.197279&z=15&output=embed',
        instagram: 'https://www.instagram.com/focus313_annanagarwest/',
        facebook: 'https://www.facebook.com/club360annanagarwest',
        image: annaNagarWestImg,
        galleryImages: annaNagarWestGallery,
        features: ['Premium & Imported Equipment', 'Certified Trainers', 'Nutritional Guidance', 'CrossFit Zone', 'Cardio Theater'],
        trainers: [
            { name: 'Rahul', specialty: 'Strength & Conditioning' },
            { name: 'Priya', specialty: 'Yoga & Flexibility' },
            { name: 'Karthik', specialty: 'Functional Training' }
        ],
        plans: [
            { name: 'Monthly', price: '₹3,000', features: ['Gym Access', 'General Training'] },
            { name: 'Quarterly', price: '₹8,000', features: ['Gym Access', 'Diet Plan', 'General Training'] },
            { name: 'Yearly', price: '₹20,000', features: ['All Access', 'Personal Training Sessoins (2)', 'Diet Plan'] }
        ]
    },
    {
        id: 'aminjikarai',
        name: 'Aminjikarai',
        tagline: 'Core Strength Studio',
        description: 'The core strength studio designed for serious fitness enthusiasts. Focus on building raw strength and endurance.',
        address: 'Second Floor, 28/8, Nelson Manickam Rd, Railway Colony, Aminjikarai, Chennai, Tamil Nadu 600029',
        phone: '+91 73059 58313',
        email: 'aminjikarai@focus313fitness.com',
        timings: { ...operatingHours },
        googleRating: 5.0,
        mapUrl: 'https://maps.google.com/maps?q=13.068254,80.226243&z=15&output=embed',
        mapUrl: 'https://maps.google.com/maps?q=13.068254,80.226243&z=15&output=embed',
        instagram: 'https://www.instagram.com/focus313_aminjikarai/',
        facebook: 'https://www.facebook.com/profile.php?id=61585927071026',
        image: aminjikaraiImg,
        galleryImages: aminjikaraiGallery,
        features: ['Heavy Weights Section', 'Personal Training', 'Group Classes', 'Shower Facilities'],
        trainers: [
            { name: 'Suresh', specialty: 'Bodybuilding' },
            { name: 'Anita', specialty: 'HIIT Specialist' }
        ],
        plans: [
            { name: 'Monthly', price: '₹2,500', features: ['Gym Access', 'General Training'] },
            { name: 'Quarterly', price: '₹6,500', features: ['Gym Access', 'General Training'] },
            { name: 'Yearly', price: '₹18,000', features: ['All Access', 'Diet Plan'] }
        ]
    },
    {
        id: 'ayappakkam',
        name: 'Ayappakkam',
        tagline: 'Performance Center - Coming Soon',
        description: 'Our performance center dedicated to athletic development and functional fitness. Unlock your true potential.',
        address: 'No. 277/3B, School St, Gayathri Nagar, Ayappakkam, Chennai, Tamil Nadu 600077',
        phone: '+91 99442 34313',
        email: 'ayappakkam@focus313fitness.com',
        timings: { ...operatingHours },
        googleRating: 5.0,
        mapUrl: 'https://maps.google.com/maps?q=13.098013,80.132236&z=15&output=embed',
        instagram: 'https://www.instagram.com/focus313_ayappakkam/',
        facebook: 'https://www.facebook.com/people/Focus313-ayapakkam/61583546918268/',
        image: ayappakkamImg,
        galleryImages: ayappakkamGallery,
        features: ['Functional Training Area', 'Cardio Zone', 'Steam Room', 'Locker Facility'],
        trainers: [
            { name: 'Vikram', specialty: 'Athletic Performance' },
            { name: 'Meena', specialty: 'Zumba & Dance Fitness' }
        ],
        plans: [
            { name: 'Monthly', price: '₹2,000', features: ['Gym Access', 'General Training'] },
            { name: 'Quarterly', price: '₹5,500', features: ['Gym Access', 'General Training'] },
            { name: 'Yearly', price: '₹15,000', features: ['All Access', 'Diet Plan'] }
        ]
    }
];
