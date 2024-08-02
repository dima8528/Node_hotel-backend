import { Request, Response } from 'express';
import { roomService } from '../services/room.service';

export const roomController = {
  getAllRooms: async (req: Request, res: Response) => {
    try {
      const rooms = await roomService.getAllRooms();
      res.status(200).send(rooms);
    } catch (error) {
      res.status(500).send({ error: 'Failed to fetch rooms' });
    }
  },

  getOneRoom: async (req: Request, res: Response) => {
    try {
      const room = await roomService.getRoomById(+req.params.id);

      if (!room) {
        return res.status(404).send({ error: 'Product not found' });
      }

      res.status(200).send(room);
    } catch (error) {
      res.status(500).send({ error: 'Failed to fetch room' });
    }
  },

  getByRoomType: async (req: Request, res: Response) => {
    try {
      const data = await roomService.getByRoomType(
        req.params.roomType,
        req.query,
      );
      res.status(200).send(data);
    } catch (error) {
      console.error('Error in getByRoomType: ', error);
      res.status(500).send({
        error: 'Failed to fetch rooms by type',
      });
    }
  },

  getRecommendedRooms: async (req: Request, res: Response) => {
    try {
      const rooms = await roomService.getRecommendedRooms(+req.params.id);
      res.status(200).send(rooms);
    } catch (error) {
      res.status(500).send({
        error: 'Failed to fetch recommended rooms',
      });
    }
  },

  getCheapestRooms: async (req: Request, res: Response) => {
    try {
      const rooms = await roomService.getRoomsByPrice('asc');
      res.status(200).send(rooms);
    } catch (error) {
      res.status(500).send({
        error: 'Failed to fetch the cheapest rooms',
      });
    }
  },

  getBestRooms: async (req: Request, res: Response) => {
    try {
      const rooms = await roomService.getBestRooms();
      res.status(200).send(rooms);
    } catch (error) {
      res.status(500).send({
        error: 'Failed to fetch the best rooms',
      });
    }
  },

  getMostExpensiveRooms: async (req: Request, res: Response) => {
    try {
      const rooms = await roomService.getRoomsByPrice('desc');

      res.status(200).send(rooms);
    } catch (error) {
      res.status(500).send({
        error: 'Failed to fetch the most expensive rooms',
      });
    }
  },

  createNewRoom: async (req: Request, res: Response) => {
    try {
      const room = await roomService.createNewRoom(req.body);
      res.status(200).send(room);
    } catch (error) {
      res.status(500).send({ error: 'Failed to create room' });
    }
  },

  bookRooms: async (req: Request, res: Response) => {
    try {
      const room = await roomService.bookRooms(req.body);
      res.status(200).send(room);
    } catch (error) {
      res.status(500).send({ error: 'Failed to book rooms' });
    }
  },

  updateRoom: async (req: Request, res: Response) => {
    try {
      const room = await roomService.updateRoom(+req.params.id, req.body);
      res.status(200).send(room);
    } catch (error) {
      res.status(500).send({ error: 'Failed to update room' });
    }
  },

  deleteRoom: async (req: Request, res: Response) => {
    try {
      await roomService.deleteRoom(+req.params.id);
      res.status(200);
    } catch (error) {
      console.error(error);

      res.status(500).send({ error: 'Failed to delete room' });
    }
  },
};
