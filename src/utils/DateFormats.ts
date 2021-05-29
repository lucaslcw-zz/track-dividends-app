import moment from 'moment';

export const inDDdays = (timestamp: number | undefined) => {
  if (timestamp !== undefined) {
    const momentUnix = moment().unix() * 1000;
    const timestampUnix = moment(timestamp * 1000);
    const diffInDays = timestampUnix.diff(momentUnix, 'days');

    if (diffInDays <= 0) {
      return `Recebido!`
    } else {
      return `em ${diffInDays} dias`;
    }
  } else {
    return '';
  }
}