import express from 'express';
import { roomController } from '../controllers/room.controller';

export const roomRouter = express.Router();

// roomRouter.get('/newest', productController.getNewestProducts);
roomRouter.get('/cheapest', roomController.getCheapestRooms);
roomRouter.get('/best', roomController.getBestRooms);
roomRouter.get('/', roomController.getAllRooms);
roomRouter.get('/:id', roomController.getOneRoom);
roomRouter.get('/type/:roomType', roomController.getByRoomType);
roomRouter.get('/:id/recommended', roomController.getRecommendedRooms);
roomRouter.post('/', roomController.createNewRoom);
roomRouter.patch('/', roomController.bookRooms);
roomRouter.patch('/:id', roomController.updateRoom);
roomRouter.delete('/:id', roomController.deleteRoom);
