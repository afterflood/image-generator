let str = React.string;

let foodImg: string = [%raw "require('./food.png')"];

let helpImg: string = [%raw "require('./help.png')"];

type selectedImage =
  | Food
  | Help;

let selectedClasses = bool =>
  bool ? "p-4 border shadow bg-yellow-100" : "p-4 border shadow ";

let renderImage = image =>
  switch (image) {
  | Food => foodImg
  | Help => helpImg
  };
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
      image,
      setImage,
    ) =>
  <div>
    <div className="text-2xl font-semibold"> {"Image Generator" |> str} </div>
    <label className="block mb-2 mt-4" htmlFor="caption1">
      {"Select Image" |> str}
    </label>
    <div className="w-full mt-4 w-full mt-4 flex px-10 justify-between">
      <div
        onClick={_ => setImage(_ => Food)}
        className={selectedClasses(image == Food)}>
        <img src=foodImg />
      </div>
      <div
        onClick={_ => setImage(_ => Help)}
        className={selectedClasses(image == Help) ++ " ml-2"}>
        <img src=helpImg />
      </div>
    </div>
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

let renderView = (caption1, caption2, time, numbers, image) =>
  <div className="flex flex-col w-full items-center justifycenter">
    <div className="px-10"> <img src={renderImage(image)} /> </div>
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
  let (image, setImage) = React.useState(() => Food);
  let (numbers, setNumbers) = React.useState(() => "");
  let elementId = "image-to-print";
  <div
    className="h-screen flex flex-col justify-center items-center flex-wrap bg-white">
    <div
      id="image-to-print"
      className="bg-white max-w-xl w-full rounded overflow-hidden shadow-lg px-20 py-10">
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
                image,
                setImage,
              )
            }
          </div> :
          <div> {renderView(caption1, caption2, time, numbers, image)} </div>
      }
    </div>
    <div className="flex justify-between">
      <div
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        onClick={_ => setShowForm(form => !form)}>
        {"Generate Image" |> str}
      </div>
      {showForm ? React.null : <Screenshot elementId />}
    </div>
  </div>;
};
