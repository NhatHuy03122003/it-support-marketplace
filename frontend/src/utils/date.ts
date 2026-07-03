import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/vi";
dayjs.extend(relativeTime);
dayjs.locale("vi");

//format datetime vietnam
export function formatDatetoTextFromNow(date:string){
    return dayjs(date).fromNow();
}


