import prisma from '../utils/db';

export const roomTypeService = {
  getAllRoomTypes: async () => {
    const roomTypes = await prisma.roomType.findMany();
    return roomTypes;
  },

  getRoomTypeById: async (id: number) => {
    const roomType = await prisma.roomType.findUnique({
      where: {
        id,
      },
    });
    return roomType;
  },

  getRoomTypeByName: async (name: string) => {
    const roomType = await prisma.roomType.findUnique({
      where: {
        roomTypeName: name,
      },
    });
    return roomType;
  },

  createRoomType: async (name: string) => {
    const roomType = await prisma.roomType.create({
      data: {
        roomTypeName: name,
      },
    });
    return roomType;
  },

  updateRoomType: async (id: number, name: string) => {
    const roomType = await prisma.roomType.update({
      where: {
        id,
      },
      data: {
        roomTypeName: name,
      },
    });
    return roomType;
  },

  deleteRoomType: async (id: number) => {
    const roomType = await prisma.roomType.delete({
      where: {
        id,
      },
    });
    return roomType;
  },
};
