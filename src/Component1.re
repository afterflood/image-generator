let str = React.string;

let renderForm =
    (
      time,
      setTime,
      numbers,
      setNumbers,
      caption1,
      setCaption1,
      caption2,
      setCaption2,
    ) =>
  <div>
    <div className="text-2xl font-semibold"> {"Image Generator" |> str} </div>
    <div className="w-full mt-4">
      <label className="block mb-2" htmlFor="caption1">
        {"Location" |> str}
      </label>
      <input
        id="caption1"
        value=caption1
        placeholder="waynadu melppadi"
        onChange={event => setCaption1(ReactEvent.Form.target(event)##value)}
        className="appearance-none h-10 mt-1 block w-full text-gray-800 border border-gray-400 rounded py-2 px-4 text-sm bg-gray-100 hover:bg-gray-200 focus:outline-none focus:bg-white focus:border-primary-400"
      />
    </div>
    <div className="w-full mt-4">
      <label className="block mb-2" htmlFor="caption1">
        {"Requirment" |> str}
      </label>
      <input
        id="caption2"
        value=caption2
        onChange={event => setCaption2(ReactEvent.Form.target(event)##value)}
        placeholder="Food for 100 people"
        className="appearance-none h-10 mt-1 block w-full text-gray-800 border border-gray-400 rounded py-2 px-4 text-sm bg-gray-100 hover:bg-gray-200 focus:outline-none focus:bg-white focus:border-primary-400"
      />
    </div>
    <div>
      <label className="block mb-2" htmlFor="time">
        {"Message recieved at" |> str}
      </label>
      <input
        id="time"
        value=time
        onChange={event => setTime(ReactEvent.Form.target(event)##value)}
        placeholder="Friday 4 PM "
        className="appearance-none h-10 mt-1 block w-full text-gray-800 border border-gray-400 rounded py-2 px-4 text-sm bg-gray-100 hover:bg-gray-200 focus:outline-none focus:bg-white focus:border-primary-400"
      />
    </div>
    <div className="w-full mt-4">
      <label className="block mb-2" htmlFor="numbers">
        {"number" |> str}
      </label>
      <input
        id="numbers"
        value=numbers
        placeholder="0000000000,000000000"
        onChange={event => setNumbers(ReactEvent.Form.target(event)##value)}
        className="appearance-none h-10 mt-1 block w-full text-gray-800 border border-gray-400 rounded py-2 px-4 text-sm bg-gray-100 hover:bg-gray-200 focus:outline-none focus:bg-white focus:border-primary-400"
      />
    </div>
  </div>;

let renderView = (caption1, caption2, time, numbers) =>
  <div className="w-full">
    <div className="text-2xl font-semibold"> {"Image" |> str} </div>
    <div className="text-2xl font-semibold"> {caption1 |> str} </div>
    <div className="text-4xl font-bold"> {caption2 |> str} </div>
    <div className="text-md"> {"Message recieved at " ++ time |> str} </div>
    <div className="text-md"> {"Call for more info" |> str} </div>
    <div className="text-3xl"> {numbers |> str} </div>
    <div className="text-3xl"> {"footer" |> str} </div>
  </div>;

[@react.component]
let make = () => {
  let (showForm, setShowForm) = React.useState(() => true);
  let (caption1, setCaption1) = React.useState(() => "");
  let (caption2, setCaption2) = React.useState(() => "");
  let (time, setTime) = React.useState(() => "");
  let (numbers, setNumbers) = React.useState(() => "");
  <div
    className="h-screen flex flex-col justify-center items-center flex-wrap bg-white">
    <div
      className="max-w-xl w-full rounded overflow-hidden shadow-lg px-20 py-10">
      {
        showForm ?
          <div>
            {
              renderForm(
                time,
                setTime,
                numbers,
                setNumbers,
                caption1,
                setCaption1,
                caption2,
                setCaption2,
              )
            }
          </div> :
          <div> {renderView(caption1, caption2, time, numbers)} </div>
      }
    </div>
    <div
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
      onClick={_ => setShowForm(form => !form)}>
      {"Generate Image" |> str}
    </div>
  </div>;
};
