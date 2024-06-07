import express from 'express';
import { roomTypeController } from '../controllers/roomType.controller';

export const roomTypeRouter = express.Router();

roomTypeRouter.get('/', roomTypeController.getAllRoomTypes);
roomTypeRouter.get('/:id', roomTypeController.getRoomTypeById);
roomTypeRouter.post('/', roomTypeController.createRoomType);
roomTypeRouter.patch('/:id', roomTypeController.updateRoomType);
roomTypeRouter.delete('/:id', roomTypeController.deleteRoomType);
