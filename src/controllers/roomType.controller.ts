import { Request, Response } from 'express';
import { roomTypeService } from '../services/roomType.service';

export const roomTypeController = {
  getAllRoomTypes: async (req: Request, res: Response) => {
    try {
      const roomTypes = await roomTypeService.getAllRoomTypes();
      res.status(200).send(roomTypes);
    } catch (error) {
      res.status(500).send({ error: 'Failed to fetch room types' });
    }
  },

  getRoomTypeById: async (req: Request, res: Response) => {
    try {
      const roomType = await roomTypeService.getRoomTypeById(+req.params.id);
      res.status(200).send(roomType);
    } catch (error) {
      res.status(500).send({ error: 'Failed to fetch room type' });
    }
  },

  getRoomTypeByName: async (req: Request, res: Response) => {
    try {
      const roomType = await roomTypeService.getRoomTypeByName(req.params.name);
      res.status(200).send(roomType);
    } catch (error) {
      res.status(500).send({ error: 'Failed to fetch room type' });
    }
  },

  createRoomType: async (req: Request, res: Response) => {
    try {
      const roomType = await roomTypeService.createRoomType(req.body.roomTypeName);
      res.status(201).send(roomType);
    } catch (error) {
      console.error('Error creating room type:', error);
      res.status(500).send({ error: 'Failed to create room type' });
    }
  },

  updateRoomType: async (req: Request, res: Response) => {
    try {
      const roomType = await roomTypeService.updateRoomType(
        +req.params.id,
        req.body.roomTypeName,
      );
      res.status(200).send(roomType);
    } catch (error) {
      res.status(500).send({ error: 'Failed to update room type' });
    }
  },

  deleteRoomType: async (req: Request, res: Response) => {
    try {
      const roomType = await roomTypeService.deleteRoomType(+req.params.id);
      res.status(204).send('Room type deleted successfully');
    } catch (error) {
      res.status(500).send({ error: 'Failed to delete room type' });
    }
  },
}
