const { PrismaClient } = require('@prisma/client');
// const { v4: uuidv4 } = require('uuid');

// const users = [
//   {
//     id: 1,
//     firstName: 'Dima',
//     lastName: 'Haidash',
//     email: 'dmytro.haidash.work@gmail.com',
//     password: '123456',
//     role: 'user',
//     activationToken: uuidv4(),
//   },
// ];

const roomTypes = [
  {
    id: 1,
    roomTypeName: 'Standard',
  },
  {
    id: 2,
    roomTypeName: 'Lux',
  },
  {
    id: 3,
    roomTypeName: 'Premium',
  },
];

const room1_imgs = [
  'img/room-1/1.jpg',
  'img/room-1/2.jpg',
  'img/room-1/3.jpg',
  'img/room-1/4.jpg',
  'img/room-1/5.jpg'
];

const room2_imgs = [
  'img/room-2/1.jpg',
  'img/room-2/2.jpg',
  'img/room-2/3.jpg',
  'img/room-2/4.jpg',
  'img/room-2/5.webp'
];

const room3_imgs = [
  'img/room-3/1.jpg',
  'img/room-3/2.jpg',
  'img/room-3/3.jpg',
  'img/room-3/4.jpg',
  'img/room-3/5.jpg'
];

const room4_imgs = [
  'img/room-4/1.jpg',
  'img/room-4/2.jpg',
  'img/room-4/3.jpg',
  'img/room-4/4.jpg',
  'img/room-4/5.jpg'
];

const room5_imgs = [
  'img/room-5/1.jpg',
  'img/room-5/2.jpg',
  'img/room-5/3.jpg',
  'img/room-5/4.jpg',
  'img/room-5/5.jpg'
];

const room6_imgs = [
  'img/room-6/1.jpg',
  'img/room-6/2.jpg',
  'img/room-6/3.jpg',
  'img/room-6/4.jpg',
  'img/room-6/5.jpg'
];

const room7_imgs = [
  'img/room-7/1.jpg',
  'img/room-7/2.jpg',
  'img/room-7/3.jpg',
  'img/room-7/4.jpg',
  'img/room-7/5.jpg'
];

const room8_imgs = [
  'img/room-8/1.jpg',
  'img/room-8/2.jpg',
  'img/room-8/3.jpg',
  'img/room-8/4.jpg',
  'img/room-8/5.jpg'
];

const room9_imgs = [
  'img/room-9/1.jpg',
  'img/room-9/2.jpg',
  'img/room-9/3.jpg',
  'img/room-9/4.jpg',
  'img/room-9/5.jpg'
];

const room10_imgs = [
  'img/room-10/1.jpg',
  'img/room-10/2.jpg',
  'img/room-10/3.jpg',
  'img/room-10/4.jpg',
  'img/room-10/5.jpg'
];

const room11_imgs = [
  'img/room-11/1.jpg',
  'img/room-11/2.jpg',
  'img/room-11/3.jpg',
  'img/room-11/4.jpg',
  'img/room-11/5.jpg'
];

const room12_imgs = [
  'img/room-12/1.jpg',
  'img/room-12/2.jpg',
  'img/room-12/3.jpg',
  'img/room-12/4.jpg',
  'img/room-12/5.jpg'
];

const room13_imgs = [
  'img/room-13/1.jpg',
  'img/room-13/2.jpg',
  'img/room-13/3.jpg',
  'img/room-13/4.jpg',
  'img/room-13/5.jpg'
];

const room14_imgs = [
  'img/room-14/1.jpg',
  'img/room-14/2.jpg',
  'img/room-14/3.jpg',
  'img/room-14/4.jpg',
  'img/room-14/5.jpg'
];

const room15_imgs = [
  'img/room-15/1.jpg',
  'img/room-15/2.jpg',
  'img/room-15/3.jpg',
  'img/room-15/4.jpg',
  'img/room-15/5.jpg'
];

const room16_imgs = [
  'img/room-16/1.jpg',
  'img/room-16/2.jpg',
  'img/room-16/3.jpg',
  'img/room-16/4.jpg',
  'img/room-16/5.jpg'
];

const room17_imgs = [
  'img/room-17/1.jpg',
  'img/room-17/2.jpg',
  'img/room-17/3.jpg',
  'img/room-17/4.jpg',
  'img/room-17/5.jpg'
];

const room18_imgs = [
  'img/room-18/1.jpg',
  'img/room-18/2.jpg',
  'img/room-18/3.jpg',
  'img/room-18/4.jpg',
  'img/room-18/5.jpg'
];

const room19_imgs = [
  'img/room-19/1.jpg',
  'img/room-19/2.jpg',
  'img/room-19/3.jpg',
  'img/room-19/4.jpg',
  'img/room-19/5.jpg'
];

const room20_imgs = [
  'img/room-20/1.jpg',
  'img/room-20/2.jpg',
  'img/room-20/3.jpg',
  'img/room-20/4.jpg',
  'img/room-20/5.jpg'
];

const room21_imgs = [
  'img/room-21/1.jpg',
  'img/room-21/2.jpg',
  'img/room-21/3.jpg',
  'img/room-21/4.jpg',
  'img/room-21/5.jpg'
];

const room22_imgs = [
  'img/room-22/1.jpg',
  'img/room-22/2.jpg',
  'img/room-22/3.jpg',
  'img/room-22/4.jpg',
  'img/room-22/5.jpg'
];

const rooms = [
  {
    // id: 1,
    roomName: 'Double Room',
    roomNumber: 101,
    roomTypeId: 1,
    floor: 1,
    capacity: 2,
    pricePerNight: 30,
    available: true,
    images: room1_imgs,
  },

  {
    // id: 2,
    roomName: 'Double Room',
    roomNumber: 102,
    roomTypeId: 1,
    floor: 1,
    capacity: 2,
    pricePerNight: 30,
    available: true,
    images: room2_imgs,
  },

  {
    // id: 3,
    roomName: 'Quad Room',
    roomNumber: 103,
    roomTypeId: 1,
    floor: 1,
    capacity: 4,
    pricePerNight: 60,
    available: true,
    images: room3_imgs,
  },

  {
    // id: 4,
    roomName: 'Quad Room',
    roomNumber: 104,
    roomTypeId: 1,
    floor: 1,
    capacity: 4,
    pricePerNight: 60,
    available: true,
    images: room4_imgs,
  },

  {
    // id: 5,
    roomName: 'Sextuple Room',
    roomNumber: 105,
    roomTypeId: 1,
    floor: 1,
    capacity: 6,
    pricePerNight: 90,
    available: true,
    images: room5_imgs,
  },

  {
    // id: 6,
    roomName: 'Double Room',
    roomNumber: 106,
    roomTypeId: 1,
    floor: 1,
    capacity: 2,
    pricePerNight: 30,
    available: true,
    images: room6_imgs,
  },

  {
    // id: 7,
    roomName: 'Double Room',
    roomNumber: 107,
    roomTypeId: 1,
    floor: 1,
    capacity: 2,
    pricePerNight: 30,
    available: true,
    images: room7_imgs,
  },

  {
    // id: 8,
    roomName: 'Double Room',
    roomNumber: 108,
    roomTypeId: 1,
    floor: 1,
    capacity: 2,
    pricePerNight: 30,
    available: true,
    images: room8_imgs,
  },

  {
    // id: 9,
    roomName: 'Double Room',
    roomNumber: 109,
    roomTypeId: 1,
    floor: 1,
    capacity: 2,
    pricePerNight: 30,
    available: true,
    images: room9_imgs,
  },

  {
    // id: 10,
    roomName: 'Sextuple Room',
    roomNumber: 110,
    roomTypeId: 1,
    floor: 1,
    capacity: 6,
    pricePerNight: 90,
    available: true,
    images: room10_imgs,
  },

  {
    // id: 11,
    roomName: 'Sextuple Room',
    roomNumber: 111,
    roomTypeId: 1,
    floor: 1,
    capacity: 6,
    pricePerNight: 90,
    available: true,
    images: room11_imgs,
  },

  {
    // id: 12,
    roomName: 'Sextuple Room',
    roomNumber: 112,
    roomTypeId: 1,
    floor: 1,
    capacity: 6,
    pricePerNight: 90,
    available: true,
    images: room12_imgs,
  },

  {
    // id: 13,
    roomName: 'Double Room',
    roomNumber: 201,
    roomTypeId: 1,
    floor: 2,
    capacity: 2,
    pricePerNight: 30,
    available: true,
    images: room13_imgs,
  },

  {
    // id: 14,
    roomName: 'Quad Room',
    roomNumber: 202,
    roomTypeId: 1,
    floor: 2,
    capacity: 4,
    pricePerNight: 60,
    available: true,
    images: room14_imgs,
  },

  {
    // id: 15,
    roomName: 'Quad Room',
    roomNumber: 203,
    roomTypeId: 2,
    floor: 2,
    capacity: 4,
    pricePerNight: 80,
    available: true,
    images: room15_imgs,
  },

  {
    // id: 16,
    roomName: 'Double Room',
    roomNumber: 204,
    roomTypeId: 2,
    floor: 2,
    capacity: 2,
    pricePerNight: 40,
    available: true,
    images: room16_imgs,
  },

  {
    // id: 17,
    roomName: 'Sextuple Room',
    roomNumber: 205,
    roomTypeId: 2,
    floor: 2,
    capacity: 6,
    pricePerNight: 120,
    available: true,
    images: room17_imgs,
  },

  {
    // id: 18,
    roomName: 'Quad Room',
    roomNumber: 206,
    roomTypeId: 2,
    floor: 2,
    capacity: 4,
    pricePerNight: 80,
    available: true,
    images: room18_imgs,
  },

  {
    // id: 19,
    roomName: 'Double Room',
    roomNumber: 207,
    roomTypeId: 3,
    floor: 2,
    capacity: 2,
    pricePerNight: 60,
    available: true,
    images: room19_imgs,
  },

  {
    // id: 20,
    roomName: 'Quad Room',
    roomNumber: 208,
    roomTypeId: 3,
    floor: 2,
    capacity: 4,
    pricePerNight: 120,
    available: true,
    images: room20_imgs,
  },

  {
    // id: 21,
    roomName: 'Sextuple Room',
    roomNumber: 209,
    roomTypeId: 3,
    floor: 2,
    capacity: 6,
    pricePerNight: 180,
    available: true,
    images: room21_imgs,
  },

  {
    // id: 22,
    roomName: 'Sextuple Room',
    roomNumber: 22,
    roomTypeId: 3,
    floor: 2,
    capacity: 6,
    pricePerNight: 180,
    available: true,
    images: room22_imgs,
  },
];

const prisma = new PrismaClient();

async function main() {
  await prisma.roomType.deleteMany();
  await prisma.room.deleteMany();

  for (const roomType of roomTypes) {
    await prisma.roomType.create({
      data: roomType,
    });
  }

  for (const room of rooms) {
    await prisma.room.create({
      data: {
        roomName: room.roomName,
        roomNumber: room.roomNumber,
        floor: room.floor,
        capacity: room.capacity,
        pricePerNight: room.pricePerNight,
        available: room.available,
        images: room.images,
        roomType: {
          connect: { id: room.roomTypeId }
        }
      }
    });
  }

  // for (const user of users) {
  //   await prisma.user.create({
  //     data: user,
  //   });
  // }

  console.log('Database seeded!');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async err => {
    console.error(err);
    await prisma.$disconnect();
    process.exit(1);
  });
