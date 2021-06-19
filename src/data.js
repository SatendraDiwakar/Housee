// import houses
import house1 from './images/houses/house-1.jpg'
import house2 from './images/houses/house-2.jpeg'
import house3 from './images/houses/house-3.jpeg'
import house4 from './images/houses/house-4.jpg'
import house5 from './images/houses/house-5.jpg'
import house6 from './images/houses/house-6.jpg'
import house7 from './images/houses/house-7.jpg'
import house8 from './images/houses/house-8.jpg'
import house9 from './images/houses/house-9.jpg'
import house10 from './images/houses/house-10.jpg'
import house11 from './images/houses/house-11.jpeg'
import house12 from './images/houses/house-12.jpg'
import house13 from './images/houses/house-13.jpg'
import house14 from './images/houses/house-14.jpg'
import house15 from './images/houses/house-15.jpg'
import house16 from './images/houses/house-16.jpg'
import house17 from './images/houses/house-17.jpg'
import house18 from './images/houses/house-18.jpg'
import house19 from './images/houses/house-19.jpg'
import house20 from './images/houses/house-20.jpg'
import house21 from './images/houses/house-21.jpg'

//import interiors
import details1 from './images/interior/details-1.jpeg'
import details2 from './images/interior/details-2.jpeg'
import gal1 from './images/interior/gal-1.jpg'
import gal2 from './images/interior/gal-2.jpg'
import gal3 from './images/interior/gal-3.jpg'
import gal4 from './images/interior/gal-4.jpeg'
import gal5 from './images/interior/gal-5.jpeg'
import gal6 from './images/interior/gal-6.jpeg'
import gal7 from './images/interior/gal-7.jpeg'
import room1 from './images/interior/room-1.jpeg'
import room2 from './images/interior/room-2.jpg'
import room3 from './images/interior/room-3.jpeg'
import room4 from './images/interior/room-4.jpeg'
import room5 from './images/interior/room-5.jpeg'
import room6 from './images/interior/room-6.jpeg'
import room7 from './images/interior/room-7.jpeg'
import room8 from './images/interior/room-8.jpeg'
import room9 from './images/interior/room-9.jpeg'
import room10 from './images/interior/room-10.jpeg'

export const data = {
  /* interior data */
  interiors: [
    [
      room1, room2, gal1, details1
    ],
    [
      room3, room4, gal2, gal6, details2
    ],
    [
      room5, room6, gal3, details1
    ],
    [
      room7, room8, gal4, details2
    ],
    [
      room9, room10, gal5, gal7, details1
    ]
  ],
  /* house data */
  houses: [
    {
      id: "1",
      houseImage: house1,
      name: "Housee-1",
      price: 900,
      rating: 4.9,
      pets: true,
      breakfast: true,
      description:
        "The house has everything you need for a comfortable stay. 24-hour room service, free Wi-Fi in all rooms, 24-hour security, daily housekeeping, 24-hour front desk are just some of the facilities on offer. Guestrooms are designed to provide an optimal level of comfort with welcoming decor and some offering convenient amenities like linens, mirror, sewing kit, slippers, towels. Entertain the hotel's recreational facilities, including fitness center, steamroom."
    },
    {
      id: "2",
      houseImage: house2,
      name: "Housee-2",
      price: 700,
      rating: 4.7,
      pets: true,
      breakfast: true,
      description:
        "The house has everything you need for a comfortable stay. 24-hour room service, free Wi-Fi in all rooms, 24-hour security, daily housekeeping, 24-hour front desk are just some of the facilities on offer. Guestrooms are designed to provide an optimal level of comfort with welcoming decor and some offering convenient amenities like linens, mirror, sewing kit, slippers, towels. Entertain the hotel's recreational facilities, including fitness center, steamroom."
    },
    {
      id: "3",
      houseImage: house3,
      name: "Housee-3",
      price: 800,
      rating: 4.8,
      pets: false,
      breakfast: false,
      description:
        "The house has everything you need for a comfortable stay. 24-hour room service, free Wi-Fi in all rooms, 24-hour security, daily housekeeping, 24-hour front desk are just some of the facilities on offer. Guestrooms are designed to provide an optimal level of comfort with welcoming decor and some offering convenient amenities like linens, mirror, sewing kit, slippers, towels. Entertain the hotel's recreational facilities, including fitness center, steamroom."
    },
    {
      id: "4",
      houseImage: house4,
      name: "Housee-4",
      price: 700,
      rating: 4.6,
      pets: false,
      breakfast: false,
      description:
        "The house has everything you need for a comfortable stay. 24-hour room service, free Wi-Fi in all rooms, 24-hour security, daily housekeeping, 24-hour front desk are just some of the facilities on offer. Guestrooms are designed to provide an optimal level of comfort with welcoming decor and some offering convenient amenities like linens, mirror, sewing kit, slippers, towels. Entertain the hotel's recreational facilities, including fitness center, steamroom."
    },
    {
      id: "5",
      houseImage: house5,
      name: "Housee-5",
      price: 900,
      rating: 4.8,
      pets: true,
      breakfast: true,
      description:
        "The house has everything you need for a comfortable stay. 24-hour room service, free Wi-Fi in all rooms, 24-hour security, daily housekeeping, 24-hour front desk are just some of the facilities on offer. Guestrooms are designed to provide an optimal level of comfort with welcoming decor and some offering convenient amenities like linens, mirror, sewing kit, slippers, towels. Entertain the hotel's recreational facilities, including fitness center, steamroom."
    },
    {
      id: "6",
      houseImage: house6,
      name: "Housee-6",
      price: 600,
      rating: 4.9,
      pets: false,
      breakfast: false,
      description:
        "The house has everything you need for a comfortable stay. 24-hour room service, free Wi-Fi in all rooms, 24-hour security, daily housekeeping, 24-hour front desk are just some of the facilities on offer. Guestrooms are designed to provide an optimal level of comfort with welcoming decor and some offering convenient amenities like linens, mirror, sewing kit, slippers, towels. Entertain the hotel's recreational facilities, including fitness center, steamroom."
    },
    {
      id: "7",
      houseImage: house7,
      name: "Housee-7",
      price: 700,
      rating: 4.6,
      pets: true,
      breakfast: true,
      description:
        "The house has everything you need for a comfortable stay. 24-hour room service, free Wi-Fi in all rooms, 24-hour security, daily housekeeping, 24-hour front desk are just some of the facilities on offer. Guestrooms are designed to provide an optimal level of comfort with welcoming decor and some offering convenient amenities like linens, mirror, sewing kit, slippers, towels. Entertain the hotel's recreational facilities, including fitness center, steamroom."
    },
    {
      id: "8",
      houseImage: house8,
      name: "Housee-8",
      price: 800,
      rating: 4.5,
      pets: true,
      breakfast: true,
      description:
        "The house has everything you need for a comfortable stay. 24-hour room service, free Wi-Fi in all rooms, 24-hour security, daily housekeeping, 24-hour front desk are just some of the facilities on offer. Guestrooms are designed to provide an optimal level of comfort with welcoming decor and some offering convenient amenities like linens, mirror, sewing kit, slippers, towels. Entertain the hotel's recreational facilities, including fitness center, steamroom."
    },
    {
      id: "9",
      houseImage: house9,
      name: "Housee-9",
      price: 600,
      rating: 4.7,
      pets: false,
      breakfast: false,
      description:
        "The house has everything you need for a comfortable stay. 24-hour room service, free Wi-Fi in all rooms, 24-hour security, daily housekeeping, 24-hour front desk are just some of the facilities on offer. Guestrooms are designed to provide an optimal level of comfort with welcoming decor and some offering convenient amenities like linens, mirror, sewing kit, slippers, towels. Entertain the hotel's recreational facilities, including fitness center, steamroom."
    },
    {
      id: "10",
      houseImage: house10,
      name: "Housee-10",
      price: 1000,
      rating: 4.9,
      pets: true,
      breakfast: true,
      description:
        "The house has everything you need for a comfortable stay. 24-hour room service, free Wi-Fi in all rooms, 24-hour security, daily housekeeping, 24-hour front desk are just some of the facilities on offer. Guestrooms are designed to provide an optimal level of comfort with welcoming decor and some offering convenient amenities like linens, mirror, sewing kit, slippers, towels. Entertain the hotel's recreational facilities, including fitness center, steamroom."
    },
    {
      id: "11",
      houseImage: house11,
      name: "Housee-11",
      price: 1000,
      rating: 4.8,
      pets: true,
      breakfast: true,
      description:
        "The house has everything you need for a comfortable stay. 24-hour room service, free Wi-Fi in all rooms, 24-hour security, daily housekeeping, 24-hour front desk are just some of the facilities on offer. Guestrooms are designed to provide an optimal level of comfort with welcoming decor and some offering convenient amenities like linens, mirror, sewing kit, slippers, towels. Entertain the hotel's recreational facilities, including fitness center, steamroom."
    },
    {
      id: "12",
      houseImage: house12,
      name: "Housee-12",
      price: 700,
      rating: 4.6,
      pets: false,
      breakfast: false,
      description:
        "The house has everything you need for a comfortable stay. 24-hour room service, free Wi-Fi in all rooms, 24-hour security, daily housekeeping, 24-hour front desk are just some of the facilities on offer. Guestrooms are designed to provide an optimal level of comfort with welcoming decor and some offering convenient amenities like linens, mirror, sewing kit, slippers, towels. Entertain the hotel's recreational facilities, including fitness center, steamroom."
    },
    {
      id: "13",
      houseImage: house13,
      name: "Housee-13",
      price: 800,
      rating: 4.8,
      pets: false,
      breakfast: false,
      description:
        "The house has everything you need for a comfortable stay. 24-hour room service, free Wi-Fi in all rooms, 24-hour security, daily housekeeping, 24-hour front desk are just some of the facilities on offer. Guestrooms are designed to provide an optimal level of comfort with welcoming decor and some offering convenient amenities like linens, mirror, sewing kit, slippers, towels. Entertain the hotel's recreational facilities, including fitness center, steamroom."
    },
    {
      id: "14",
      houseImage: house14,
      name: "Housee-14",
      price: 700,
      rating: 4.9,
      pets: false,
      breakfast: false,
      description:
        "The house has everything you need for a comfortable stay. 24-hour room service, free Wi-Fi in all rooms, 24-hour security, daily housekeeping, 24-hour front desk are just some of the facilities on offer. Guestrooms are designed to provide an optimal level of comfort with welcoming decor and some offering convenient amenities like linens, mirror, sewing kit, slippers, towels. Entertain the hotel's recreational facilities, including fitness center, steamroom."
    },
    {
      id: "15",
      houseImage: house15,
      name: "Housee-15",
      price: 1000,
      rating: 4.5,
      pets: true,
      breakfast: true,
      description:
        "The house has everything you need for a comfortable stay. 24-hour room service, free Wi-Fi in all rooms, 24-hour security, daily housekeeping, 24-hour front desk are just some of the facilities on offer. Guestrooms are designed to provide an optimal level of comfort with welcoming decor and some offering convenient amenities like linens, mirror, sewing kit, slippers, towels. Entertain the hotel's recreational facilities, including fitness center, steamroom."
    },
    {
      id: "16",
      houseImage: house16,
      name: "Housee-16",
      price: 1000,
      rating: 4.6,
      pets: true,
      breakfast: true,
      description:
        "The house has everything you need for a comfortable stay. 24-hour room service, free Wi-Fi in all rooms, 24-hour security, daily housekeeping, 24-hour front desk are just some of the facilities on offer. Guestrooms are designed to provide an optimal level of comfort with welcoming decor and some offering convenient amenities like linens, mirror, sewing kit, slippers, towels. Entertain the hotel's recreational facilities, including fitness center, steamroom."
    },
    {
      id: "17",
      houseImage: house17,
      name: "Housee-17",
      price: 1000,
      rating: 4.7,
      pets: true,
      breakfast: true,
      description:
        "The house has everything you need for a comfortable stay. 24-hour room service, free Wi-Fi in all rooms, 24-hour security, daily housekeeping, 24-hour front desk are just some of the facilities on offer. Guestrooms are designed to provide an optimal level of comfort with welcoming decor and some offering convenient amenities like linens, mirror, sewing kit, slippers, towels. Entertain the hotel's recreational facilities, including fitness center, steamroom."
    },
    {
      id: "18",
      houseImage: house18,
      name: "Housee-18",
      price: 800,
      rating: 4.9,
      pets: true,
      breakfast: true,
      description:
        "The house has everything you need for a comfortable stay. 24-hour room service, free Wi-Fi in all rooms, 24-hour security, daily housekeeping, 24-hour front desk are just some of the facilities on offer. Guestrooms are designed to provide an optimal level of comfort with welcoming decor and some offering convenient amenities like linens, mirror, sewing kit, slippers, towels. Entertain the hotel's recreational facilities, including fitness center, steamroom."
    },
    {
      id: "19",
      houseImage: house19,
      name: "Housee-19",
      price: 1000,
      rating: 4.8,
      pets: true,
      breakfast: true,
      description:
        "The house has everything you need for a comfortable stay. 24-hour room service, free Wi-Fi in all rooms, 24-hour security, daily housekeeping, 24-hour front desk are just some of the facilities on offer. Guestrooms are designed to provide an optimal level of comfort with welcoming decor and some offering convenient amenities like linens, mirror, sewing kit, slippers, towels. Entertain the hotel's recreational facilities, including fitness center, steamroom."
    },
    {
      id: "20",
      houseImage: house20,
      name: "Housee-20",
      price: 900,
      rating: 4.7,
      pets: false,
      breakfast: false,
      description:
        "The house has everything you need for a comfortable stay. 24-hour room service, free Wi-Fi in all rooms, 24-hour security, daily housekeeping, 24-hour front desk are just some of the facilities on offer. Guestrooms are designed to provide an optimal level of comfort with welcoming decor and some offering convenient amenities like linens, mirror, sewing kit, slippers, towels. Entertain the hotel's recreational facilities, including fitness center, steamroom."
    },
    {
      id: "21",
      houseImage: house21,
      name: "Housee-21",
      price: 700,
      rating: 4.5,
      pets: true,
      breakfast: true,
      description:
        "The house has everything you need for a comfortable stay. 24-hour room service, free Wi-Fi in all rooms, 24-hour security, daily housekeeping, 24-hour front desk are just some of the facilities on offer. Guestrooms are designed to provide an optimal level of comfort with welcoming decor and some offering convenient amenities like linens, mirror, sewing kit, slippers, towels. Entertain the hotel's recreational facilities, including fitness center, steamroom."
    }
  ],
};
