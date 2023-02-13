import Calendar from "./component/calendarComponent";

const App = () => {
  return (
    <div className="mt-16 flex flex-col items-center">
      <Calendar value={"24/02/2023"} />
    </div>
  );
};

export default App;
