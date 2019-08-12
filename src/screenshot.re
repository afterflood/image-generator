let str = React.string;

[@bs.module "./screenshot.js"]
external htmlToImage: string => unit = "default";

[@react.component]
let make = (~elementId) =>
  <div>
    <div className="text-center">
      <button
        onClick={_ => htmlToImage(elementId)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 ml-4">
        {"Download Image" |> str}
      </button>
    </div>
  </div>;
