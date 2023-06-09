import "./App.css";
import {
  Header,
  RatingsPill,
  Ad,
  Toggle,
  IconButton,
  GirlsRate,
  GuysRate,
  Sidebar,
  ImageToRate,
  PopupSignIn,
  LargeButton,
} from "./components/index";
import { users } from "./components/users";

// Sets the logged in status to true or false to optinally dispaly the right elements
const LoggedInStatus = false;
// This is just to update the index of the array that's being called quickly
const arrayIndex = 2;

function App() {
  return (
    <>
      {/* <PopupSignIn /> */}
      <Header isLoggedIn={LoggedInStatus} />
      <div className="xl:max-w-[1280px] h-fill mx-auto px-4 flex justify-between gap-x-4">
        <Sidebar isLoggedIn={LoggedInStatus} />
        <div className="w-full md:w-8/12 lg:w-5/12 gap-y-2">
          <ImageToRate
            ratings={users[arrayIndex].ratings}
            img={users[arrayIndex].img}
          />
          {/* Toggle and button */}
          <div className="flex flex-row gap-x-2 pt-4">
            <Toggle />
            <button className="w-full justify-center text-white font-semibold text-lg bg-pink rounded-full py-2">
              Yeah, {users[arrayIndex].sex === "female" ? "she's" : "he's"} a 7
            </button>
          </div>
        </div>
        <Ad />
      </div>
    </>
  );
}

export default App;
