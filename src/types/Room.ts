export type Room = {
  id: number;
  roomNumber: number;
  roomTypeId: number;
  floor: number;
  capacity: number;
  description: string;
  pricePerNight: number;
  available: boolean;
  images: string[];
}
