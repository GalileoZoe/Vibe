// import { Injectable } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
// import { Model } from 'mongoose';
// import { Device, DeviceDocument } from './schema/device.schema';
// import * as admin from 'firebase-admin';

// @Injectable()
// export class DeviceService {
//   constructor(
//     @InjectModel(Device.name) private deviceModel: Model<DeviceDocument>,
//   ) {
//     if (!admin.apps.length) {
//       admin.initializeApp({
//         credential: admin.credential.cert(require('../../firebase-service-account.json')),
//       });
//     }
//   }

//   // register or update device
//   async registerDevice(data: {
//     userId: string;
//     deviceId: string;
//     fcmToken: string;
//     deviceModel?: string;
//     os?: string;
//     appVersion?: string;
//   }) {
//     return this.deviceModel.findOneAndUpdate(
//       { userId: data.userId, deviceId: data.deviceId },
//       { ...data, active: true },
//       { new: true, upsert: true },
//     );
//   }

//   async deactivateDevice(deviceId: string) {
//     return this.deviceModel.findOneAndUpdate(
//       { deviceId },
//       { active: false },
//       { new: true },
//     );
//   }

//   async getTokensByUser(userId: string): Promise<string[]> {
//     const devices = await this.deviceModel.find({ userId, active: true });
//     return devices.map(d => d.fcmToken);
//   }

//   // send push notification
//   async sendPushToUser(userId: string, title: string, message: string, data = {}) {
//     const tokens = await this.getTokensByUser(userId);

//     if (tokens.length === 0) return { success: false, msg: 'No tokens' };

//     const payload = {
//       notification: { title, body: message },
//       data: { ...data },
//     };

//     return admin.messaging().sendEachForMulticast({
//       tokens,
//       ...payload,
//     });
//   }
// }
