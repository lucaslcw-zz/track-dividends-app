import moment from 'moment';
import 'moment/locale/pt-br';

moment.locale('pt-br');

export const inDDdays = (date: string) => {
  const now = moment().unix() * 1000;

  const toString = date.toString();
  const day = toString.slice(0, 2);
  const month = toString.slice(3, 5);
  const year = toString.slice(6, 8);

  const newFormat = `${month}/${day}/${year}`;

  const convertFormat = moment(new Date(newFormat), 'DD/MM/YYYY');

  const diffInDays = convertFormat.diff(now, 'days');
  const diffInHours = convertFormat.diff(now, 'hours');

  if (diffInDays <= 0 && diffInHours <= 0) return 'Recebido!';

  if (diffInDays === 0 && diffInHours >= 0) return 'Amanhã';

  if (diffInDays > 0 && diffInHours > 0) return `em ${diffInDays} dias`;

  return '';
};
