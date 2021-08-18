/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import th from 'dayjs/locale/th'

dayjs.extend(relativeTime)
dayjs.locale(th)

const dayTh = dayjs

export default dayTh
