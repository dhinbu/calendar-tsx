import { differenceInDays, endOfMonth, startOfMonth } from "date-fns";
import { format } from "date-fns";
import Cell from "./Cell";

const getDateFormat = (date: string) => {
  const [day, month, year] = date.split("/");
  return new Date(Date.parse(`${Number(month)}/${day}/${year}`));
};

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

interface Props {
  value: string;
  onChange?: (date: Date) => void;
}

const Calendar: React.FC<Props> = ({ value }) => {
  const currentDate = getDateFormat(value);
  const startDate = startOfMonth(currentDate);
  const endDate = endOfMonth(currentDate);
  const numDays = differenceInDays(endDate, startDate) + 1;

  const prefixDays = startDate.getDay();
  const suffixDays = 6 - endDate.getDay();

  return (
    <div className="w-[300px] border-t border-l">
      <div className="grid grid-cols-7 items-center justify-center text-center">
        <Cell className="col-span-7">{format(currentDate, "LLLL yyyy")}</Cell>

        {daysOfWeek.map((day) => (
          <Cell key={day} className="text-sm font-bold">
            {day}
          </Cell>
        ))}

        {Array.from({ length: prefixDays }).map((_, index) => (
          <Cell key={index} />
        ))}

        {Array.from({ length: numDays }).map((_, index) => {
          const date = index + 1;
          const isCurrentDate = date === currentDate.getDate();

          return (
            <Cell key={date} isActive={isCurrentDate}>
              {date}
            </Cell>
          );
        })}

        {Array.from({ length: suffixDays }).map((_, index) => (
          <Cell key={index} />
        ))}
      </div>
    </div>
  );
};

export default Calendar;
