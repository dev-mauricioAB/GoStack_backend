import ICreateNotificantionDTO from '../dtos/ICreateNotificationDTO';
import Notifications from '../infra/typeorm/schemas/Notification';

export default interface INotificationsRepository {
  create(date: ICreateNotificantionDTO): Promise<Notifications>;
}
