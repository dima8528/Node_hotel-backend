import express from 'express';
import { productController } from '../controllers/room.controller';

export const roomRouter = express.Router();

// roomRouter.get('/newest', productController.getNewestProducts);
roomRouter.get('/cheapest', productController.getCheapestRooms);
roomRouter.get('/', productController.getAllRooms);
roomRouter.get('/:id', productController.getOneRoom);
roomRouter.get('/room-type/:roomType', productController.getByRoomType);
roomRouter.get('/:id/recommended', productController.getRecommendedRooms);
roomRouter.post('/', productController.createNewRoom);
roomRouter.patch('/:id', productController.updateRoom);
roomRouter.delete('/:id', productController.deleteRoom);
