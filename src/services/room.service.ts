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
    { sortBy, perPage, page, type }: any,
  ) => {
    try {
      let order: 'asc' | 'desc' = 'asc';

      if (!type) {
        type = 'All';
      }
      
      if (!sortBy) {
        sortBy = 'id';
      }

      if (!perPage) {
        perPage = 16;
      }

      if (!page) {
        page = 1;
      }

      if (sortBy === 'All') {
        sortBy = 'id';
        order = 'asc';
      }

      if (sortBy === 'Best') {
        sortBy = 'roomTypeId';
        order = 'desc';
      }

      if (sortBy === 'Cheapest') {
        sortBy = 'pricePerNight';
        order = 'asc';
      }

      const roomTypeResult = await prisma.roomType.findUnique({
        where: {
          roomTypeName: type,
        },
        select: {
          id: true,
        },
      });      
  
      if (!roomTypeResult && type !== 'All') {
        return { rooms: [], totalCount: 0, totalPages: 0 };
      }
  
      const roomTypeId = roomTypeResult?.id;
  
      const totalCount = type === 'All' 
        ? await prisma.room.count() 
        : await prisma.room.count({
            where: {
              roomTypeId: roomTypeId,
            },
          });
  
      const roomsOnPage = perPage ? perPage : totalCount;
      
      const totalPages = Math.ceil(totalCount / roomsOnPage) || 1;
      
      const rooms = type === 'All'
        ? await prisma.room.findMany({
            orderBy: { [sortBy]: order },
            skip: +roomsOnPage * (+page - 1),
            take: +roomsOnPage,
          }) 
        : await prisma.room.findMany({
            where: {
              roomTypeId: roomTypeId,
            },
            orderBy: {
              [sortBy]: order,
            },
            skip: +roomsOnPage * (+page - 1),
            take: +roomsOnPage,
          });
  
      return { rooms, totalCount, totalPages };
    } catch (error) {
      console.error("Error in getByRoomType service: ", error); // Логирование ошибки
      throw new Error('Database query failed');
    }
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

      take: 10,
    });

    return rooms;
  },

  getBestRooms: async () => {
    const rooms = await prisma.room.findMany({
      orderBy: {
        roomTypeId: 'desc',
      },

      take: 10,
    });

    return rooms;
  },

  createNewRoom: async (data: any) => {
    const room = await prisma.room.create({
      data,
    });

    return room;
  },

  bookRooms: async (rooms: any) => {
    for (const room of rooms) {
      await prisma.room.update({
        where: {
          id: room.id,
        },
        data: {
          available: false,
        },
      });
    }
  },

  deleteRoom: async (id: number) => {
    await prisma.room.delete({
      where: {
        id,
      },
    });
  },
};
