import prisma from '../utils/db';

export const roomService = {
  getAllRooms: async () => {
    const rooms = await prisma.room.findMany();

    return rooms;
  },

  getRoomById: async (id: number) => {
    const room = await prisma.room.findUnique({
      where: {
        id,
      },
    });

    return room;
  },

  getByRoomType: async (
    roomType: string,
    { sortBy = 'id', perPage, page = 1 }: any,
  ) => {
    const roomTypeId = await prisma.roomType.findUnique({
      where: {
        roomTypeName: roomType,
      },
      select: {
        id: true,
      },
    })
    const totalCount = await prisma.room.count({
      where: {
        roomTypeId: roomTypeId?.id,
      },
    });

    const roomsOnPage = perPage ? perPage : totalCount;

    const totalPages = Math.ceil(totalCount / roomsOnPage) || 1;

    const rooms = await prisma.room.findMany({
      where: {
        roomTypeId: roomTypeId?.id,
      },

      orderBy: {
        [sortBy]: 'desc',
      },

      skip: +roomsOnPage * (+page - 1),
      take: +roomsOnPage,
    });
    return { rooms, totalCount, totalPages };
  },

  getRecommendedRooms: async (id: number) => {
    const targetRoom = await prisma.room.findUnique({
      where: {
        id,
      },
    });

    const rooms = prisma.room.findMany({
      where: {
        roomTypeId: targetRoom?.roomTypeId,
        NOT: {
          id,
        },
      },
      take: 10,
    });

    return rooms;
  },

  // getNewestProducts: async () => {
  //   const products = await prisma.product.findMany({
  //     orderBy: {
  //       year: 'desc',
  //     },
  //     take: 10,
  //   });
  //   return products;
  // },

  getRoomsByPrice: async (orderBy: 'asc' | 'desc') => {
    const rooms = await prisma.room.findMany({
      orderBy: {
        pricePerNight: orderBy,
      },
    });

    return rooms;
  },

  createNewRoom: async (data: any) => {
    const room = await prisma.room.create({
      data,
    });

    return room;
  },

  updateRoom: async (id: number, data: any) => {
    const room = await prisma.room.update({
      where: {
        id,
      },
      data,
    });
    return room;
  },

  deleteRoom: async (id: number) => {
    await prisma.room.delete({
      where: {
        id,
      },
    });
  },
};
